# Anthony Ecom — AI-Powered Growth Agency Website

Marketing site for **Anthony Ecom Buy-Up LLC** — an AI-powered digital marketing
agency for eCommerce brands. Built with Next.js (App Router) + Tailwind CSS 4.
Fully static, mobile-first, dark premium design.

## Pages

- `/` — full landing page (hero, stats, pain points, services, AI edge, case studies, process, comparison, testimonials, CTA)
- `/services` — six service disciplines + AI layer
- `/case-studies` — 8 documented results
- `/about` — founder story, differentiators, operating principles
- `/contact` — growth-audit form + FAQ
- `/privacy`, `/terms` — legal

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerender statically)
```

## Deploying to Vercel via GitHub

1. Push this repo to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/anthony-ecom.git
   git push -u origin main
   ```
2. On [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
   Vercel auto-detects Next.js; no configuration needed. Deploy.
3. Add your custom domain (`anthonyecom.com`) under **Project → Settings → Domains**.

## Contact form

The form on `/contact` posts to [FormSubmit](https://formsubmit.co) and delivers
to `info@anthonyecom.com`. **One-time setup:** the first submission triggers a
confirmation email to that inbox — click the activation link once and all
subsequent submissions flow through. No backend or API keys required.

## Content

All copy, stats, case studies, testimonials and contact details live in one
file: [`lib/data.ts`](lib/data.ts). Edit that file to change any content on the
site — no component changes needed.
