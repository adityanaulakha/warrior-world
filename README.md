# Warrior World 🛡️🇮🇳

> Premium Military-Themed & Tactical Lifestyle Apparel Brand.

**Warrior World** is a high-performance direct-to-consumer (D2C) e-commerce storefront dedicated to military-inspired apparel, tactical gear, unit insignia tees, and patriotic merchandise.

---

## 📂 Repository Structure

```text
warrior-world/
├── frontend/             # High-performance storefront (React 19 + TypeScript + Vite)
│   ├── src/              # Application source code
│   │   ├── components/   # Reusable UI components (Navbar, Cart, Hero, Modals, etc.)
│   │   ├── data/         # Catalog & mock product dataset
│   │   └── types.ts      # TypeScript data models
│   ├── package.json      # Dependencies and scripts
│   └── vite.config.ts    # Vite configuration
│
├── backend/              # Planned microservices & API layer
│   └── README.md         # Planned architecture & service design
│
└── README.md             # Project documentation (this file)
```

---

## ⚡ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting**: [Oxlint](https://oxc.rs/)

### Backend (Planned)
- **Runtime**: Node.js (Express / Fastify) or Go
- **Database & Cache**: PostgreSQL (Prisma) + Redis
- **Integrations**: Razorpay / Cashfree payments, Shiprocket logistics, WhatsApp Cloud API

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm

### Running the Frontend Locally

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at the local URL (typically `http://localhost:5173`).

### Available Scripts

Inside the `frontend/` directory:
- `npm run dev`: Starts the local development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles TypeScript and creates an optimized production bundle in `dist/`.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Fast code linting with Oxlint.

---

## 📦 Deployment & Git Setup

To push your repository to GitHub:

```bash
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/adityanaulakha/warrior-world.git
git push -u origin main
```

---

## 📜 License

Private repository & proprietary codebase for Warrior World.
