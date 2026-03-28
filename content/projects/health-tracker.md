---
title: 'Health Tracker'
description: 'A full-stack app to log and monitor daily health metrics with a 30-day stats dashboard'
event: 'health_tracker'
image: ''
draft: false
published: '2026-03-28'
---

Assalamualaikum.

**Health Tracker** is a full-stack web app for logging and monitoring personal wellness metrics. Log your numbers daily, view 30-day trends on the dashboard, and set goals — all from a responsive interface that works on both mobile and desktop.

Live at: [health-tracker.naimsolong.com](https://health-tracker.naimsolong.com)

Source code: [github.com/naimsolong/health-tracker](https://github.com/naimsolong/health-tracker)

## What It Does

The app lets you record multiple health metrics each day and tracks them over time. A dashboard surfaces 30-day statistics at a glance, while the history view gives you a full log with the ability to delete entries. User accounts are protected with encrypted passwords and session cookies.

### Key Features

- **Multi-metric logging** — weight, blood pressure, heart rate, glucose, sleep, steps, water intake, and mood
- **30-day dashboard** — statistical summaries and trends across all tracked metrics
- **Entry history** — full log of past entries with deletion support
- **Goal tracking** — set and monitor personal wellness targets
- **Authentication** — encrypted passwords and session cookie management
- **Responsive design** — works on mobile and desktop

## Tech Stack

- Nuxt 3 + Vue 3
- TypeScript
- Tailwind CSS
- Drizzle ORM
- Cloudflare D1 (SQLite)
- Cloudflare Pages + Workers

## Highlights

The interesting part of this build was using Cloudflare D1 as the database — a SQLite-compatible serverless database that runs at the edge alongside Cloudflare Workers. Drizzle ORM sits on top of it and handles schema migrations cleanly with `drizzle-kit`. The entire stack (frontend, API routes, and database) deploys to Cloudflare with no separate server to manage.

Authentication is handled via Nuxt server routes (H3) rather than a third-party auth library, keeping the dependency footprint small.

See you soon!
