import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  templateUrl: './loading-screen.component.html'
})
export class LoadingScreenComponent {
  @Input() visible = false;
  @Input() progress = 0;
}
