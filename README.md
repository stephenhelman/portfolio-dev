# operationprofitllc.com

> Personal portfolio and business site for **Operation Profit LLC** — full-stack development and automation services based in El Paso, TX.

Built as a demo in itself. Every design decision here — the bilingual toggle, the animated stats modal, the dark editorial aesthetic — is something I can replicate for a local business in under a day.

---

## Tech Stack

| Layer      | Technology                                 |
| ---------- | ------------------------------------------ |
| Framework  | React 18 + Vite                            |
| Styling    | Tailwind CSS v4 (Vite plugin)              |
| Routing    | React Router v6                            |
| Icons      | Lucide React                               |
| Deployment | Vercel                                     |
| Domain     | Ionos → Vercel DNS                         |
| Email      | Zoho Mail (stephen@operationprofitllc.com) |

---

## Features

- **Page-by-page routing** — each route renders as a full-screen section with no scroll, clean SPA navigation via `useNavigate`
- **Bilingual toggle** — floating EN/ES pill powered by a shared language context, demonstrating the bilingual capability offered to El Paso clients
- **Impact stats modal** — animated counter cards in a 2×2 grid, triggered from the navbar, with backdrop blur and ESC/click-outside dismissal
- **Custom cursor** — gold ring cursor consistent with the editorial design system
- **Fully responsive** — tested down to 320px, mobile nav closes on link click, no horizontal overflow
- **Dark editorial design** — Georgia serif headings, amber gold accents, grid backgrounds, glow effects — no templates, no generic AI aesthetics

---

## Project Structure

```
src/
├── components/
│   ├── Button.jsx
│   ├── AboutRow.jsx
│   ├── Cursor.jsx
│   ├── ServicesCard.jsx
│   └── StatsModal.jsx
├── layout/
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/
│   ├── HeroPage.jsx
│   ├── WorkPage.jsx
│   ├── ServicesPage.jsx
│   ├── AboutPage.jsx
│   └── ContactPage.jsx
├── utils/
│   └── constants.js
├── App.jsx
└── main.jsx
```

---

## Local Development

```bash
# Clone the repo
git clone https://github.com/stephenhelman/operation-profit-portfolio.git
cd operation-profit-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Runs at `http://localhost:5173`

---

## Deployment

Deployed on Vercel via GitHub integration. Every push to `main` triggers an automatic production deploy.

DNS is managed through Ionos pointing directly to Vercel — no Cloudflare proxy layer needed for a static portfolio site.

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Case Study — HOEP

The featured project in this portfolio is the **Hemophilia Organization of El Paso** platform — a bilingual full-stack web application built on the MERN stack with:

- DeepL API integration for EN/ES translations optimized for local SEO
- Diagnosis letter verification system
- Dynamic resource directories
- Nodemailer email notification pipeline
- GoHighLevel CRM integration
- Role-based board member management

That project is what this portfolio was built to showcase. The same tooling, speed, and attention to detail applies to every client engagement.

---

## Services

| Service                       | Starting Price                   |
| ----------------------------- | -------------------------------- |
| Landing Pages                 | $300 setup + $150–200/mo hosting |
| Full Web Apps                 | Custom quote                     |
| CRM & Automation              | From $500                        |
| Ongoing Hosting & Maintenance | $150–200/mo                      |

Upsells available: GoHighLevel sub-accounts, missed call text-back, Google review automation, SEO, Google Ads management.

---

## Contact

**Stephen Helman**  
Operation Profit LLC · El Paso, TX  
stephen@operationprofitllc.com  
[LinkedIn](https://www.linkedin.com/in/stephen-helman-dev/) · [GitHub](https://github.com/stephenhelman)
