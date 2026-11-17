# Beacon 3D

Beacon 3D is an installable custom-apparel design studio. Browse garment mockups, customize colors and print text, upload and position artwork, and save designs locally. The app shell and saved work are available offline after the first visit.

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL shown in your terminal. Service workers and app installation require a secure context; local development on `localhost` is supported.

## Build

```bash
npm run build
```

## Publish for everyone

Deploy the production build (`dist/`) to an HTTPS host such as GitHub Pages. Once published, visitors can install Beacon 3D from their browser:

- **Chrome / Edge on desktop or Android:** use the install icon in the address bar, or open the browser menu and choose **Install Beacon 3D** / **Add to Home screen**.
- **iPhone / iPad:** open the HTTPS site in Safari, tap **Share**, then **Add to Home Screen**.

The app name and install icon are supplied by `manifest.webmanifest`. On some browsers, the install option appears only after the site has been visited and meets that browser's PWA requirements. If no install option appears, visitors can still use the site in the browser or download the repository source from GitHub.

## Offline and checkout notes

The service worker caches the app shell and icon. Design, cart, and demo order data are stored locally in the current browser and do not sync across devices. Checkout is a front-end demonstration: no payment is processed and no supplier order is submitted.
