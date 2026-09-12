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
  @Output() menuChange = new EventEmitter<boolean>();
  @Output() themeChange = new EventEmitter<void>();

  closeMenu(): void { this.menuChange.emit(false); }
}
