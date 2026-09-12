# JD Studio - Digital Fashion House

JD Studio is an editorial fashion agency website concept built as an immersive digital experience. It combines neo-brutalist structure, luxury magazine typography, asymmetric layouts, bento-inspired collections, and cinematic motion.

## Features

- Animated archive loading screen
- Editorial full-screen hero and runway sections
- Responsive navigation with mobile menu
- Light/dark theme toggle
- Custom cursor on pointer devices
- GSAP and ScrollTrigger reveal animations
- Lenis smooth scrolling
- Route-backed Archive, Studio, Journal, Contact, and 404 pages
- Responsive layouts for desktop, tablet, and mobile
- External Unsplash editorial imagery that can be replaced with local assets later

## Technology

- Angular 22
- TypeScript 6
- SCSS
- GSAP and ScrollTrigger
- Lenis
- Angular Router
- Karma and Jasmine

## Project Structure

```text
src/
├── app/
│   ├── components/
│   │   ├── loading-screen/
│   │   └── site-header/
│   ├── pages/
│   │   ├── home/
│   │   ├── inner-page/
│   │   └── not-found/
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/
├── index.html
├── main.ts
└── styles.scss
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home experience and selected work |
| `/archive` | Collection archive story |
| `/studio` | Studio philosophy and process |
| `/journal` | Fashion journal editorial page |
| `/contact` | New business contact page |
| Any unknown route | Custom 404 archive page |

## Setup

Angular 22 currently requires a recent Node 22 release. Use Node `22.22.3` or newer within the Node 22 line.

```bash
npm install
npm start
```

Open `http://localhost:4200` in a browser.

## Verification

```bash
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```

The project uses remote Unsplash images as temporary editorial assets. Confirm network access before presenting the site in an offline environment, or download approved assets into `src/assets/` and update the page data.

## Credits

Designed and developed by Joydip Paul.

This is an educational and portfolio concept. Images are temporary placeholders and remain the property of their respective owners.
