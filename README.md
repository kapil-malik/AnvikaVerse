# AnvikaVerse

A mobile-first React + Vite static birthday game. The player travels through a 100-step magical journey, seeing one step at a time.

## Local Run

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open the local URL printed by Vite, usually `http://127.0.0.1:5173/`.

For clean CI-style installs after `package-lock.json` exists:

```bash
npm ci
```

## Build

```bash
npm run build
```

The static site is generated in `dist/`.

## Static Deploy

Deploy the contents of `dist/` to any static host, such as Netlify, Vercel, GitHub Pages, Cloudflare Pages, or an S3 bucket.

For most hosts:

- Build command: `npm run build`
- Publish directory: `dist`

## Deploying to AWS Amplify

1. Connect the GitHub repo in Amplify.
2. Select the `main` branch.
3. Use the `amplify.yml` build settings.
4. Add the custom domain in Amplify domain management.
5. Point DNS records if the domain is outside Route 53.

## Editing The Journey

The 100 cells live in `src/gameData.js`.

Each cell uses:

- `id`
- `type`: `normal`, `boost`, `detour`, or `quiz`
- `title`
- `caption`
- `image`
- optional `move` for boost and detour cells
- optional quiz fields: `question`, `options`, `answerIndex`, `correctMove`, `wrongMove`, `correctText`, `wrongText`

Images are expected at paths like `public/images/step-001.png`. Missing images automatically fall back to an in-game magical placeholder.

Normal cells use lightweight generated CSS art by default, so they do not need image files. Special cells can still use real images by placing files such as `public/images/step-021.png`; if a special-cell image is missing, the existing magical placeholder fallback appears instead.

## Optional Avatar And Audio

Place Anvika's avatar image at:

```text
public/images/anvika-avatar.png
```

Transparent PNG or WebP works best for the avatar. If the avatar image is missing or cannot load, the game falls back to the built-in `AV` avatar badge.

Place optional music files at:

```text
public/audio/background.mp3
public/audio/victory.mp3
```

Use small MP3 files so the site stays lightweight. Audio is optional: if either file is missing, blocked by the browser, or cannot play, the game continues silently without broken UI.
