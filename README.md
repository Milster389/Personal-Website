# Personal Site — Next.js port

Drop these into your existing `personal-website` Next.js project, replacing the placeholders.

## File map

| From this folder            | → To your repo                  |
| --------------------------- | ------------------------------- |
| `app/layout.tsx`            | `app/layout.tsx`     (replace)  |
| `app/page.tsx`              | `app/page.tsx`       (replace)  |
| `app/globals.css`           | `app/globals.css`    (replace)  |
| `public/milan.png`          | `public/milan.png`   (add)      |

## Notes

- `app/page.tsx` is a **client component** (`"use client"`) because it uses `useState` + `useEffect` for the scrollspy nav and the case-study modal. Marquee + name reveal animations are CSS-only.
- Fonts are loaded via `next/font/google` in `layout.tsx` (Bricolage Grotesque, Inter Tight, JetBrains Mono, Newsreader). No external stylesheet — they're served from your own origin.
- The page uses Tailwind utilities **only where convenient**. All design tokens live as CSS variables in `globals.css` (`--bg`, `--fg`, `--accent`, etc.). If you'd rather rip out the existing `@import "tailwindcss"` line at the top of `globals.css`, you can — none of the JSX actually depends on a Tailwind class.
- The headshot is referenced as `/milan.png` via `next/image`. Make sure it lands in `public/` at the project root.

## Run it

```bash
npm install     # if you haven't already
npm run dev
```

Then open http://localhost:3000.

## Edit data

Open `app/page.tsx` and look for the `EXPERIENCE` array near the top — each entry is one row in the Experience list and one modal. Add/edit/reorder freely.

`SKILLS` is just above it. `MARQUEE_LINES` controls the kinetic text behind the hero name.

## Deploy

This works out-of-the-box on Vercel — push to GitHub, connect the repo at vercel.com, done.
