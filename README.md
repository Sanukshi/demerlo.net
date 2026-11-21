;# Demerlo

Product landing page for **Demerlo** (`demerlo.net`) — an AI e-commerce product discovery and recommendation management platform.

Built with React 18, Vite, TypeScript, Tailwind CSS, Framer Motion, lucide-react, and Recharts.

## Setup

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |

## Project structure

```
src/
  assets/           # Royalty-free section photos
  components/
    sections/       # One file per landing-page section
    ui/             # Reusable Card, Button, GlassCard, etc.
  data/content.ts   # All editable marketing copy
  pages/            # Home + 404
```

## Notes

- All marketing text lives in `src/data/content.ts`.
- The application preview dashboard uses **sample data** only.
- NVIDIA Merlin / NeMo / NIM / Triton and RAPIDS are listed as **proposed** technology options, not implemented integrations.
- Login links to the placeholder app URL: `https://app.demerlo.net`.
