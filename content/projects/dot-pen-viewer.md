---
title: 'dot-pen viewer'
description: 'A browser-only viewer for .pen design files — no installation, no data collected'
event: 'dot_pen_viewer'
image: ''
draft: false
published: '2026-03-28'
---

Assalamualaikum.

**dot-pen viewer** is a companion viewer for [pencil.dev](https://pencil.dev) that lets you instantly preview `.pen` design files in the browser — no installation, no backend, no data collected.

Live at: [dot-pen-viewer.naimsolong.com](https://dot-pen-viewer.naimsolong.com)

Source code: [github.com/naimsolong/dot-pen-viewer](https://github.com/naimsolong/dot-pen-viewer)

## What It Does

Drop a `.pen` file, paste a GitHub URL, or pick a file from disk — the viewer parses and renders the design instantly in the browser. All processing is client-side only, so nothing ever leaves your machine.

### Key Features

- **Drag & drop or file upload** — open `.pen`, `.epz`, and `.ep` files instantly
- **GitHub URL loading** — paste a GitHub blob URL and it fetches the raw file automatically
- **SVG canvas** — renders shapes, text, gradients, and image placeholders faithfully
- **Frame/page sidebar** — navigate between pages of a multi-frame document
- **Pan & zoom** — mouse drag, touch, zoom controls, fit-to-screen, and 1:1 ratio
- **Keyboard shortcuts** — arrow keys to switch frames, +/− to zoom
- **Zero data collection** — no server, no tracking, everything stays local

## Tech Stack

- HTML + JavaScript (vanilla, no framework)
- JSZip (lazy-loaded for Evolus Pencil ZIP formats)
- Cloudflare Workers (static asset hosting)

## Highlights

The interesting challenge here was supporting two distinct `.pen` formats: the modern pencil.dev JSON format and the older Evolus Pencil ZIP/XML format. Both share the same `.pen` extension but are structurally very different. The viewer detects the format at runtime and routes to the appropriate parser.

Keeping the entire stack as vanilla HTML and JavaScript — with no build step — also made deployment dead simple. The Cloudflare Worker just serves the static `public/` directory and handles SPA routing, so the whole thing deploys with a single `wrangler deploy`.

See you soon!
