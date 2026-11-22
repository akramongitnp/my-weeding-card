import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const publicHost = process.env.VITE_SITE_URL
  || process.env.VERCEL_PROJECT_PRODUCTION_URL
  || process.env.VERCEL_URL
const siteOrigin = publicHost
  ? new URL(publicHost.startsWith('http') ? publicHost : `https://${publicHost}`).origin
  : null

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'social-preview-metadata',
      transformIndexHtml(html) {
        if (siteOrigin) return html.replaceAll('__SITE_ORIGIN__', siteOrigin)

        return html
          .replace(/<meta property="og:url" content="__SITE_ORIGIN__\/" \/>\n\s*/, '')
          .replaceAll('__SITE_ORIGIN__', '')
      },
    },
  ],
})
