# BVM Inter‑College Events Platform

A static event display platform showcasing inter-college events at BVM Holy Cross College. Built with Next.js 15 + Tailwind CSS 4.

## Features

- Public landing page with static event listings
- Event showcase for 5 competitions: E-Football, PC Building, Coding Challenge, Speed Typing, and Tech Quiz
- Clean, modern UI with FAQ section
- Static events data (no database required)

## Getting started

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the event platform

## Current Status

- **Registration**: Currently disabled. The registration UI is visible but non-functional.
- **Ticket Generation**: Code preserved in `src/lib/ticket.ts` for future use but not actively called.
- **Database**: All Firebase/database functionality has been removed.
- **Admin Access**: Admin functionality has been removed.
- **Events**: All event data is statically defined in `src/lib/events.ts` and includes 5 hardcoded events.
  This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
