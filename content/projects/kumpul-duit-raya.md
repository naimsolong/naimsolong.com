---
title: 'Kumpul Duit Raya'
description: 'A web app to track and manage Raya (Eid) money collected by family members'
event: 'kumpul_duit_raya'
image: ''
draft: false
published: '2026-03-28'
---

Assalamualaikum.

Every Raya season, parents hand out *duit raya* (gift money) to children, and keeping track of how much each child collects across multiple events and givers can get messy fast. **Kumpul Duit Raya** is a web app built to solve exactly that — a simple, fun tool for families to track and manage Raya money together.

Live at: [kumpul-duit-raya.naimsolong.com](https://kumpul-duit-raya.naimsolong.com)

Source code: [github.com/naimsolong/kumpul-duit-raya](https://github.com/naimsolong/kumpul-duit-raya)

## What It Does

The app lets you set up a Raya event, add family members, and record every transaction — who gave, how much, and any notes. At the end, a leaderboard shows who collected the most, and you can export a PDF report to share with the family.

### Key Features

- **Event management** — create named events with a custom emoji and theme colour, track multiple years
- **Member management** — add family members with roles (Parent, Child, Grandparent, Relative), avatars, and colours
- **Wallet & transactions** — record money received by denomination (coins and notes), with giver name and optional notes
- **Leaderboard** — ranks members by total collected, with a shareable view
- **PDF export** — generate printable reports sorted by amount or member
- **Multi-language** — supports English and Malay (Bahasa Malaysia)
- **Admin panel** — manage all events, members, and transactions in one place

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Nuxt 3 + Vue 3 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| State | Pinia (with persistence) |
| UI Components | Radix Vue |
| i18n | @nuxtjs/i18n |
| PDF Export | jsPDF + jspdf-autotable |
| Testing | Vitest |
| Deployment | Cloudflare Workers |

## Highlights

Building this project was a great exercise in composables-first design — most of the business logic (wallet calculations, leaderboard ranking, PDF generation) lives in reusable composables rather than inside components. Pinia with `pinia-plugin-persistedstate` keeps all data in local storage, meaning it works offline with no backend required.

The multi-language setup using `@nuxtjs/i18n` also made it straightforward to ship both English and Malay interfaces without duplicating any component code.

See you soon!
