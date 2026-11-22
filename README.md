# Akram & Tamanna Wedding Invitation

React + Vite wedding invitation website.

## Development

- `npm install` installs the project dependencies.
- `npm run dev` starts the local development server.
- `npm run build` creates the production site in `dist/`.
- `npm run preview` serves the production build locally.

Vercel builds use the production domain for WhatsApp/social link previews. For a non-Vercel deployment, set `VITE_SITE_URL` to the public site URL during the build.

## Project structure

- `src/app/` contains the app entry point.
- `src/features/invitation/` contains the invitation page.
- `src/components/` contains reusable presentation components.
- `src/data/` contains invitation content.
- `src/hooks/` contains countdown, reveal, and background effects.
- `src/styles/` contains global styles.
- `public/images/` contains static images; `public/` contains optimized cover videos.

The landing cover switches between 720p mobile and desktop H.264 MP4 encodes. It crops the clip's embedded letterboxing and shifts the framing slightly right, uses the cover image as its poster, and disables the video for reduced-motion preferences.
