import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  template: `
    <div class="cursor" [class.cursor--active]="active" [class.cursor--view]="label === 'VIEW'" [style.left.px]="x" [style.top.px]="y">
      @if (label) { <span>{{ label }}</span> }
    </div>
  `
})
export class CustomCursorComponent {
  x = -100;
  y = -100;
  active = false;
  label = '';

  @HostListener('document:mousemove', ['$event'])
  move(event: MouseEvent): void {
    this.x = event.clientX;
    this.y = event.clientY;
  }

  @HostListener('document:mouseover', ['$event'])
  enter(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const interactive = target.closest('a, button, [data-cursor]');
    this.active = Boolean(interactive);
    this.label = interactive?.getAttribute('data-cursor') ?? (interactive?.tagName === 'A' ? 'ENTER' : '');
  }

  @HostListener('document:mouseout', ['$event'])
  leave(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('a, button, [data-cursor]')) {
      this.active = false;
      this.label = '';
    }
  }
}
