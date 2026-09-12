import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-inner-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inner-page.component.html'
})
export class InnerPageComponent {
  readonly page = this.route.snapshot.data as {
    section: string;
    title: string;
    intro: string;
    body: string;
    image: string;
    actionLabel: string;
    actionHref: string;
    actionExternal: boolean;
  };

  constructor(private readonly route: ActivatedRoute) {}
}
