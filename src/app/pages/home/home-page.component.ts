import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  readonly collections = [
    {
      number: '01',
      name: 'MONOCHROME FUTURE',
      type: "WOMEN'S / MEN'S",
      year: 'SS26',
      image:
        'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85',
      className: 'feature-card',
    },
    {
      number: '02',
      name: 'MATTER / FORM',
      type: "MEN'S COLLECTION",
      year: 'AW25',
      image:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=85',
      className: 'portrait-card',
    },
    {
      number: '03',
      name: 'SOFT ARMOUR',
      type: "WOMEN'S COLLECTION",
      year: 'SS25',
      image:
        'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=85',
      className: 'portrait-card',
    },
    {
      number: '04',
      name: 'OBJECT 001',
      type: 'LIMITED EDITION',
      year: 'ARCHIVE',
      image:
        'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=85',
      className: 'wide-card',
    },
  ];

  readonly journal = [
    {
      category: 'FIELD NOTES / 01',
      title: 'The future is tactile.',
      image:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85',
    },
    {
      category: 'MATERIAL STUDIES / 02',
      title: 'Behind the fabric.',
      image:
        'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=85',
    },
    {
      category: 'DIGITAL COUTURE / 03',
      title: 'A body in motion.',
      image:
        'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=85',
    },
  ];
}
