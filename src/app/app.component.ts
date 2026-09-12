import { AfterViewInit, Component, HostListener, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingScreenComponent, SiteHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  title = 'JD STUDIO';
  isDark = false;
  menuOpen = false;
  loading = true;
  loadProgress = 0;
  cursorX = 0;
  cursorY = 0;

  constructor() {
    const timer = window.setInterval(() => {
      this.loadProgress += 5;
      if (this.loadProgress >= 100) {
        this.loadProgress = 100;
        window.clearInterval(timer);
        window.setTimeout(() => (this.loading = false), 450);
      }
    }, 35);
  }

  ngAfterViewInit(): void {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    const tick = (time: number): void => {
      lenis.raf(time);
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    gsap.utils.toArray<HTMLElement>('.section-pad, .runway__overlay, .timeline__item').forEach((element) => {
      gsap.from(element, {
        y: 32,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: element, start: 'top 82%' }
      });
    });
  }

  toggleTheme(): void { this.isDark = !this.isDark; }

  @HostListener('document:mousemove', ['$event'])
  moveCursor(event: MouseEvent): void {
    this.cursorX = event.clientX;
    this.cursorY = event.clientY;
  }
}
