# Shivam Chowdhry — Creative Portfolio

An immersive React + Vite portfolio inspired by Dogstudio’s scroll-driven 3D experience. Built by **Shivam Chowdhry** to explore the intersection of art, design, and real-time graphics.

## What’s inside

- Animated 3D dog model (Three.js + React Three Fiber)
- Scroll-linked camera and material transitions (GSAP ScrollTrigger)
- Project hover states that morph matcap materials and reveal case imagery
- Dark, cinematic layout with a fixed WebGL canvas behind the content

## Stack

| Tool | Role |
|------|------|
| React 19 | UI |
| Vite | Dev server & build |
| Three.js / R3F / Drei | 3D scene |
| GSAP | Scroll & material animation |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

```bash
npm run build    # production build
npm run preview  # preview the build locally
npm run lint     # ESLint
```

## Project structure

```
src/
  App.jsx              # Page layout, nav, project list
  App.css              # Layout & hover interactions
  components/Dog.jsx   # 3D model, materials, scroll timeline
public/
  models/dog.drc.glb   # Compressed dog GLB
  matcap/              # Matcap textures for material swaps
```

## Notes

Scroll through the hero into the selected work list — hovering each title shifts the dog’s material and fades in the matching project image.

—
Shivam Chowdhry · Creative developer
