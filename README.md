# Emberline — Independent Game Studio site

Multi-file static SPA (hash routing). No build step required.

## Structure

```
emberline/
├── index.html          # Shell + markup (home + overlays)
├── css/
│   ├── styles.css      # Design system, layout, components
│   └── fixes.css       # Legibility / stacking / mobile UX fixes
├── js/
│   ├── app.js          # Router, data, views, interactions (IIFE)
│   └── gl.js           # Three.js ornaments (ES module)
└── README.md
```

## Run locally

Serve the folder over HTTP (module + CORS for fonts/CDN):

```bash
cd emberline
python3 -m http.server 8080
# open http://localhost:8080
```

Or any static server (VS Code Live Server, `npx serve`, etc.).

## Fixed issues

- Search page links (href/subtitle swap)
- Collections journal references
- Text buried under hero / finale / card imagery (stronger scrims, z-index, text-shadow)
- Header readability after scroll / on non-home routes
- Mobile detail grids stacking so copy is never under portraits

## Notes

External images are hosted on `image.qwenlm.ai`. CDN fonts + GSAP + Three.js load from jsDelivr.
