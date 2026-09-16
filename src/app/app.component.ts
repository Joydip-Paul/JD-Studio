import { AfterViewInit, Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { CustomCursorComponent } from './components/custom-cursor/custom-cursor.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingScreenComponent, SiteHeaderComponent, CustomCursorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'JD STUDIO';
  isDark = false;
  menuOpen = false;
  loading = true;
  loadProgress = 0;
  pageTransitioning = false;
  private lenis?: Lenis;
  private readonly lenisTick = (time: number): void => {
    this.lenis?.raf(time * 1000);
  };

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

        this.scrollToTop(false);
        window.setTimeout(() => (this.pageTransitioning = false), 220);
        window.setTimeout(() => this.animatePage(), 60);
      });
  }

  ngAfterViewInit(): void {
    gsap.fromTo('.loader__brand', { y: 28, opacity: 0, letterSpacing: '0.08em' }, { y: 0, opacity: 1, letterSpacing: '-0.1em', duration: 1.1, ease: 'power3.out' });
    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1,
      wheelMultiplier: 0.9
    });
    this.lenis = lenis;
    gsap.ticker.lagSmoothing(0);
    gsap.ticker.add(this.lenisTick);
    lenis.on('scroll', ScrollTrigger.update);
    this.animatePage();
  }

  toggleTheme(): void { this.isDark = !this.isDark; }

  scrollToTop(smooth = false): void {
    this.lenis?.scrollTo(0, smooth ? { duration: 0.75, easing: (value: number) => 1 - Math.pow(1 - value, 4) } : { immediate: true });
    if (!this.lenis) window.scrollTo({ top: 0, left: 0, behavior: smooth ? 'smooth' : 'auto' });
  }

  ngOnDestroy(): void {
    gsap.ticker.remove(this.lenisTick);
    this.lenis?.destroy();
  }

  private animatePage(): void {
    gsap.utils.toArray<HTMLElement>('.section-pad, .runway__overlay, .timeline__item, .collection-card, .journal-card, .inner-grid__tile').forEach((element) => {
      if (element.dataset['motionReady']) return;
      element.dataset['motionReady'] = 'true';
      gsap.from(element, {
        y: 32,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        clearProps: 'transform',
        scrollTrigger: { trigger: element, start: 'top 86%' }
      });
    });
    ScrollTrigger.refresh();
  }
}
