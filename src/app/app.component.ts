import { AfterViewInit, Component, HostListener, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
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
  pageTransitioning = false;
  private lenis?: Lenis;

  constructor(private readonly router: Router) {
    const timer = window.setInterval(() => {
      this.loadProgress += 5;
      if (this.loadProgress >= 100) {
        this.loadProgress = 100;
        window.clearInterval(timer);
        window.setTimeout(() => (this.loading = false), 450);
      }
    }, 35);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart || event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.pageTransitioning = true;
          return;
        }

        this.scrollToTop();
        window.setTimeout(() => (this.pageTransitioning = false), 220);
      });
  }

  ngAfterViewInit(): void {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    this.lenis = lenis;
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

  scrollToTop(): void {
    this.lenis?.scrollTo(0, { immediate: true });
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  @HostListener('document:mousemove', ['$event'])
  moveCursor(event: MouseEvent): void {
    this.cursorX = event.clientX;
    this.cursorY = event.clientY;
  }
}
