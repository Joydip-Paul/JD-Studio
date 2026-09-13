import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CollectionStory {
  name: string;
  season: string;
  concept: string;
  hero: string;
  gallery: string[];
  notes: string;
  materials: string;
}

@Component({
  selector: 'app-collection-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './collection-detail.component.html'
})
export class CollectionDetailComponent {
  readonly stories: Record<string, CollectionStory> = {
    'monochrome-future': {
      name: 'MONOCHROME FUTURE', season: 'SS26 / OBJECT 01', concept: 'A study of silence, architecture and human form.',
      hero: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=2200&q=90',
      gallery: ['https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=88', 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1400&q=88'],
      notes: 'The body is not a canvas. It is a place, a memory, a moving architecture. This collection searches for the quiet tension between protection and exposure.',
      materials: 'Brushed cotton / silk organza / recycled nylon / hand-finished hardware'
    },
    'matter-form': {
      name: 'MATTER / FORM', season: 'AW25 / OBJECT 02', concept: 'Where utility becomes a language of its own.',
      hero: 'https://images.unsplash.com/photo-1729116302581-2223121597b0?q=85&w=1800&auto=format&fit=crop',
      gallery: ['https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1400&q=88', 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1400&q=88'],
      notes: 'A study in weight, proportion and movement. Matter / Form turns the language of workwear into a precise, urban silhouette.',
      materials: 'Wool gabardine / waxed canvas / vegetable-tanned leather / steel'
    },
    'soft-armour': {
      name: 'SOFT ARMOUR', season: 'SS25 / OBJECT 03', concept: 'Tenderness is a form of strength.',
      hero: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=2200&q=90',
      gallery: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=88', 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=88'],
      notes: 'Soft Armour explores protection as gesture rather than barrier, with silhouettes that hold the body without hiding it.',
      materials: 'Stretch jersey / fine wool / translucent mesh / sculpted knit'
    },
    'object-001': {
      name: 'OBJECT 001', season: 'ARCHIVE / LIMITED EDITION', concept: 'The first object in a continuing conversation.',
      hero: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=2200&q=90',
      gallery: ['https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1400&q=88', 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=88'],
      notes: 'An experiment in translating the studio mark into a physical object: tactile, limited and deliberately unfinished.',
      materials: 'Raw denim / oxidized metal / silk twill / archival paper'
    }
  };

  readonly collection: CollectionStory;

  constructor() {
    const id = window.location.pathname.split('/').filter(Boolean).pop() ?? 'monochrome-future';
    this.collection = this.stories[id] ?? this.stories['monochrome-future'];
  }
}
