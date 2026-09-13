import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { InnerPageComponent } from './pages/inner-page/inner-page.component';
import { NotFoundPageComponent } from './pages/not-found/not-found-page.component';
import { CollectionDetailComponent } from './pages/collection-detail/collection-detail.component';

export const routes: Routes = [
	{ path: '', component: HomePageComponent, title: 'JD STUDIO — A Digital Fashion House' },
	{ path: 'collections/:id', component: CollectionDetailComponent, title: 'Collection — JD STUDIO' },
	{ path: 'archive', component: InnerPageComponent, data: { section: '01 / The archive', title: 'The archive', intro: 'Collections made for a future with a memory.', body: 'Past informs possible.', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1600&q=85', actionLabel: 'Start a conversation', actionHref: '/contact', actionExternal: false }, title: 'The Archive — JD STUDIO' },
	{ path: 'studio', component: InnerPageComponent, data: { section: '02 / Behind the vision', title: 'Quietly radical.', intro: 'We design identities, not clothes.', body: 'Ideas become identity.', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=85', actionLabel: 'Start a conversation', actionHref: '/contact', actionExternal: false }, title: 'Studio — JD STUDIO' },
	{ path: 'journal', component: InnerPageComponent, data: { section: '03 / Field notes', title: 'The journal', intro: 'Dispatches from the edge of fashion, culture, and form.', body: 'The future is tactile.', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=85', actionLabel: 'Start a conversation', actionHref: '/contact', actionExternal: false }, title: 'Journal — JD STUDIO' },
	{ path: 'contact', component: InnerPageComponent, data: { section: '04 / New business', title: 'Make a mark.', intro: 'Bring us the impossible. We will bring it into focus.', body: 'Let us create something iconic.', image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1600&q=85', actionLabel: 'Email the studio', actionHref: 'mailto:hello@jd.studio', actionExternal: true }, title: 'Contact — JD STUDIO' },
	{ path: '**', component: NotFoundPageComponent, title: '404 — JD STUDIO' }
];
