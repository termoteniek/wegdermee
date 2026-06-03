# wegdermee

Website voor **wegdermee** — inboedels & rommelophaal (België).

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Starten

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Aanpassen

- **Contactgegevens:** `src/components/Contact.tsx` (e-mail en telefoon)
- **Teksten:** componenten in `src/components/`
- **Logo & camionette:** `public/logo.png`, `public/camionette.png`

## Structuur

```
src/
  components/   # Secties (Header, Hero, Services, …)
  App.tsx       # Pagina-layout
  index.css     # Tailwind theme (kleuren, fonts)
public/         # Statische assets
```
