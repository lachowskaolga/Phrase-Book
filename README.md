# Phrasebook · Rozmówki

Bilingual (PL/EN) situational phrasebook — React + Vite.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build   # outputs to /dist
npm run preview # preview production build locally
```

## Project Structure

```
phrasebook-react/
├── index.html                     # Vite entry, Google Fonts
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                   # React root, mounts App
    ├── App.jsx                    # Root component, view router
    ├── App.module.css
    │
    ├── styles/
    │   └── global.css             # Design tokens, resets, animations
    │
    ├── data/
    │   └── categories.js          # 21 categories × 680+ bilingual phrases
    │
    ├── hooks/
    │   └── usePhrasebook.js       # All app state (active cat, search, copy, EN toggle)
    │
    └── components/
        ├── Navbar.jsx             # Sticky nav with back button + breadcrumb
        ├── Navbar.module.css
        │
        ├── HomeView.jsx           # Hero + search + grid
        ├── HomeView.module.css
        │
        ├── Hero.jsx               # Hero section (Syne headline + chips)
        ├── Hero.module.css
        │
        ├── SearchInput.jsx        # Reusable search field (home + phrases)
        ├── SearchInput.module.css
        │
        ├── CategoryGrid.jsx       # Responsive grid of CategoryTile
        ├── CategoryGrid.module.css
        │
        ├── CategoryTile.jsx       # Individual category card (6 accent variants)
        ├── CategoryTile.module.css
        │
        ├── PhraseView.jsx         # Full phrase view (header + list + search)
        ├── PhraseView.module.css
        │
        ├── PhraseList.jsx         # Ordered list of PhraseRow
        ├── PhraseList.module.css
        │
        ├── PhraseRow.jsx          # Single phrase row with copy action
        ├── PhraseRow.module.css
        │
        ├── Toast.jsx              # Copy confirmation toast
        └── Toast.module.css
```

## Typography

| Font | Role | Character |
|---|---|---|
| **Syne** | Display / Broadcast | Geometric, wide, punchy — headlines, category names, number labels |
| **Space Grotesk** | UI / Studio | Structured, editorial — body text, EN translations, badges |

## Design Tokens

All colours, shadows, and typography are defined as CSS custom properties in `src/styles/global.css`.
Accent colours rotate across 6 variants: rose · blue · gold · coral · mint · violet.

## Adding a Category

Edit `src/data/categories.js` — add an entry to `CATEGORIES` following the existing shape:

```js
{
  id: 'my-category',
  icon: 'SomeLucideIconName',
  pl: 'Polska nazwa',
  en: 'English name',
  phrases: [
    { pl: 'Zwrot po polsku.', en: 'Phrase in English.' },
    // ...
  ],
}
```

Add the emoji fallback to `EMOJI_MAP` if the icon is new.
