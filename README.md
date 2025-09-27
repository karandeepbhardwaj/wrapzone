# WrapZone

[![CI](https://github.com/karandeepbhardwaj/wrapzone/actions/workflows/ci.yml/badge.svg)](https://github.com/karandeepbhardwaj/wrapzone/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Premium vehicle wrapping booking platform with three-tier packages.

## Features

- Three-tier packages (Silver, Gold, Platinum) with vehicle-size pricing
- Multi-step booking flow with Stripe payments
- Admin dashboard for booking management
- Before/after image gallery
- Contact form with email notifications
- Responsive design with dark mode
- SEO optimized

## Tech Stack

- Next.js 15 (App Router, Server Components, Server Actions)
- TypeScript
- Drizzle ORM + SQLite
- Stripe for payments
- Resend for emails
- Zod for validation

## Getting Started

```sh
npm install
cp .env.example .env.local
npm run db:push
npm run dev
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | SQLite database path |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `RESEND_API_KEY` | Resend API key |
| `ADMIN_PASSWORD` | Admin dashboard password |

## License

MIT
