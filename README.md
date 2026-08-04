# OECS — Open EV Charger Schema

A standardized, computer-readable schema for EV charger specifications — so you can compare
hardware for your use case without reading a stack of inconsistent vendor PDFs.

## What is OECS

Every charger vendor ships its own dense PDF spec sheet, and the same feature is often named
differently from one vendor to the next ("Rated Amperage" vs. "Max Output Current"). OECS defines
a single, vendor-neutral schema for describing charger hardware, so specs can be compared and
queried programmatically instead of read one PDF at a time.

This repository is the presentation site for the project.

## Tech stack

- [React](https://react.dev/) + [Vite](https://vite.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [pnpm](https://pnpm.io/)

## Getting started

Requires Node 20+ (see `.nvmrc`) and pnpm.

```bash
pnpm install
pnpm dev
```

The site is served at `http://localhost:5173`.

### With Docker

```bash
docker compose up web
```

Serves the dev server with hot reload at `http://localhost:5173`.

To sanity-check the production build (static assets served via nginx):

```bash
docker compose --profile prod up web-prod
```

Serves the built site at `http://localhost:8080`.

## Available scripts

| Script              | Description                          |
| ------------------- | ------------------------------------ |
| `pnpm dev`          | Start the Vite dev server            |
| `pnpm build`        | Type-check and build for production  |
| `pnpm preview`      | Preview the production build locally |
| `pnpm lint`         | Run ESLint                           |
| `pnpm lint:fix`     | Run ESLint with autofix              |
| `pnpm format`       | Format all files with Prettier       |
| `pnpm format:check` | Check formatting without writing     |
| `pnpm typecheck`    | Type-check without emitting          |

## Project structure

```
src/
├── components/
│   ├── ui/          shadcn/ui primitives
│   ├── layout/       Header, Footer
│   └── sections/      Page sections (Hero, Problem, Solution, ...)
├── data/             Placeholder schema/spec content
└── lib/              Shared utilities and constants
```

## License

MIT
