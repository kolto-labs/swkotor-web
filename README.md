# swkotor-web

> [!WARNING]
> **🚧 Work in progress. 🚧**

## What this is

`swkotor-web` is a fork of the KotOR.js web launcher. It is being reworked so players can eventually run the original **Star Wars: Knights of the Old Republic** (KotOR I) and **KotOR II: The Sith Lords** in the browser.

The old JavaScript reimplementation of the engine is on its way out.

No game files are distributed with this project. You need your own legally obtained copy of KotOR I and/or II.

## Current status

| Piece | Status |
|---|---|
| Launcher (`/launcher/`) | Kept from upstream. Profile selection, game-directory access and the Electron wrapper are still present. |
| Game client (`/game/`) | **Removed.** Only a static "game client unavailable" placeholder page remains. Launching KotOR I or II from the launcher lands on this page. |
| `_______` | **Not started / not integrated.** There is no `______________` build or filesystem bridge in this repo yet. |
| KotOR Forge (`/forge/`) | **Removed.** |
| Script debugger (`/debugger/`) | **Removed.** |
| Original TypeScript engine (`KotOR.js`) | Legacy, from upstream. Its future is undecided. Still built as a library. It is not used to run the game. |

## Supported games (planned)

- Star Wars: Knights of the Old Republic (PC)
- Star Wars: Knights of the Old Republic II: The Sith Lords (PC)

Neither is playable in this repository yet.

## Technologies

- TypeScript, React and webpack for the launcher
- Three.js, used by the legacy engine
- Electron, for the desktop wrapper around the launcher

## Getting started (developer)

### Prerequisites

1. Install [Node.js / npm](https://www.npmjs.com/get-npm).
2. Clone this repository.
3. Install dependencies:

```bash
npm install
```

### Running the web apps

```bash
npm run dev
```

This runs webpack-dev-server on **http://localhost:8080** with HMR and React Fast Refresh. It builds these bundles in parallel:

- `KotOR.js`: legacy engine library
- `dist/launcher/`: launcher UI
- `dist/game/`: static `/game/` placeholder page

| URL | What it is |
|---|---|
| http://localhost:8080 | Redirects to the launcher |
| http://localhost:8080/launcher/ | Launcher |
| http://localhost:8080/game/?key=kotor | Placeholder page (KotOR I). **Not playable.** |
| http://localhost:8080/game/?key=tsl | Placeholder page (KotOR II). **Not playable.** |

The VS Code launch configurations in `.vscode/launch.json` open these same URLs.

### Desktop app (Electron)

```bash
npm run start
```

This compiles the Electron main process and opens the launcher in a desktop window. The game itself is not playable from it either.

### Docker

```bash
docker build -t swkotor-web .
docker run --rm -p 8080:80 swkotor-web
```

Then open http://localhost:8080/. The image runs the production build (`npm run webpack:prod`) and serves it with nginx.

### Other commands

| Command | What it does |
|---|---|
| `npm run webpack:dev` | One-shot development build (no watch) |
| `npm run webpack:dev-watch` | Watch-mode development build (no dev server) |
| `npm run webpack:prod` | Production build (minified, no source maps) |
| `npm run electron:compile` | Compile only the Electron main process TypeScript |
| `npm run test` | Run the Jest test suite |
| `npm run typedoc` | Generate API docs into the `wiki/` folder |

## Credits

This project is a fork of [KotOR.js](https://github.com/KobaltBlu/KotOR.js) by KobaltBlu and its contributors. Everything the launcher and the legacy engine do comes from that work.

Also thanks to [xoreos](https://xoreos.org/) and [The KotOR Modding Community](https://deadlystream.com/).

This is an independent fan project. It is not affiliated with Lucasfilm, Disney, BioWare, Obsidian, EA, Steam, or GOG.

## License

[GPL 3.0 (GNU General Public License)](LICENSE.md)
