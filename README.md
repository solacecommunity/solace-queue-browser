# Solace Queue Browser Utility

This project offers a Solace Queue Browser which can run either as a desktop application (Windows, Mac, and Linux) or fully in-browser with certain restrictions. Most of the capabilities of the tool require interacting with a Solace broker using both SEMP and the Solace Javascript client library, and as such, users must provide two sets of credentials to establish a connection.

> [!IMPORTANT]
> Most of the capabilities of this tool require replay to be enabled. In most modes of operation, the utiltiy assumes all messages found on a given queue are also present on the Replay Log. Unexpected behavior may occur if the replay log has been trimmed while messages are still on the queue, or if replay filtering results in a mix replayable and non-replayable messages. Additionally, the browser will typically show messages that have been acknowledged out-of-order as still being present on a given queue.

## Core Capabilities

- Bidrectionally browsing a queue (replay-based) from:
  - The oldest message (queue head)
  - The newest message (queue tail)
  - A specified date/time
  - A specified RGMID or Message ID
- Forward-only basic queue browing (no replay required)
- Client-side payload and header filtering

Additionally, the following features are planned:
- Republishing messages from one queue to another
- Browsing messages based on topic an selectors
- Browsing of Partitioned Queues

## Project Design and Architecture

All UI components of the project are written in HTML/JS using the Prime React component library.

### Browser Mode
To run the application in browser mode, check out the source code and run:

```
> npm install
> npm run dev
```

Then open up a browser session and navigate to http://localhost:1420/.

> [!NOTE]
> When running the application via a browser, the broker SEMP service must be [configured to allow any host](https://docs.solace.com/Services/Managing-Services.htm#managing-cross-origin-resource-sharing). Also, if the Queue Browser is hosted on a domain other than `localhost`, the browser and broker TLS configuration must match. For example, running the utility from over HTTP allows connecting to HTTP (non secured) brokers, while running from an HTTPS site will only permit connecting to HTTPS brokers.

### Desktop Mode

Running this project as a desktop application assumes you have a Rust compiler installed on your system. The complete steps and prerequisites for building a Tauri app can be [found here](https://v1.tauri.app/v1/guides/getting-started/prerequisites/).

Once the prerequisites have been met, it is possible to run in desktop mode:

```
npm install
npm run tauri dev
```

## Publishing Project to GitHub Pages

A simple version of this app is available via GitHub pages, on the `gh-pages` branch of the repository. In order to publish a new release to pages, follow this procedure:

_Checkout the pages branch and pull latest changes from main_
```
git checkout gh-pages
git pull origin main
```
Resove any merge conflicts, if any, and continue.

_Create a production build and publish to the desired target (latest or stable)_
```
npm run build
npm run publish latest
```

_Preview the changes locally_
```
npm run preview
```
Open a browser and navigate to http://localhost:4173/stable/ or http://localhost:4173/latest/ to verify changes before pushing.

_Commit the changes and push back to the repo_
```
git commit -a -m "Update latest with new feature ..."
git push origin gh-pages
```