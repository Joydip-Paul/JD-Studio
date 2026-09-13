import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './site-header.component.html'
})
export class SiteHeaderComponent {
  @Input() menuOpen = false;
  @Input() isDark = false;
  linkClicked = false;
  @Output() menuChange = new EventEmitter<boolean>();
  @Output() themeChange = new EventEmitter<void>();

  closeMenu(): void { this.menuChange.emit(false); }

  handleLinkClick(): void {
    this.linkClicked = true;
    this.closeMenu();
  }

  clearLinkState(): void {
    this.linkClicked = false;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
}
