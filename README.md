# AI Delivery & Fulfilment Orchestrator — Interactive Prototype

> **Netcompany IT Consultant Challenge 2026 (Round 1)**  
> **Team TAMCA** · Proposal v2.3  
> *"From alert to approved fix on one screen — AI drafts, people decide"*

---

## 🎯 Executive Overview

Company A distributes building materials across Denmark, Norway, and Sweden. Each market operates siloed systems, leading to delayed coordination between warehouses, retail stores, and transport. For B2B contractors, delivery shortfalls stall construction crews and damage long-term accounts.

This interactive web application provides the **live visual prototype** accompanying **Slide 06 (Proposed Operating Model)** of TAMCA's proposal deck, allowing judges and stakeholders to experience firsthand how the **AI Delivery & Fulfilment Orchestrator** detects shortfalls early and empowers coordinators to resolve them in minutes.

---

## 🚀 Key Features

### 1. Slide 06 Interactive Prototype (Core Showcase)
* **High-Fidelity Replication:** 1:1 fidelity with the Netcompany Challenge deck exhibit.
* **Order #2004 Live Simulation:** 100 plasterboard sheets (Stockholm) facing a 20-sheet shortfall.
* **Dynamic Recovery Options:**
  * **Option A (Recommended / Feasible):** Transfer 20 sheets from Branch B tonight (€50 recovery cost, arrives Mon 21:00).
  * **Option B (Split):** 80 at 07:00; 20 at 13:00 (€120, violates contractor crane slot).
  * **Option C (Wait):** Wait for Thursday supplier delivery (€0 direct cost, €200+ failed delivery penalty).
* **Live Human-in-the-Loop Signoff:** Interactive approval button logs the resolution and triggers simulated dispatch.
* **Simulated Customer Smartphone:** Displays real-time bilingual SMS in Swedish (*Company A Proffsservice*) alongside English reader translation.
* **Impact Contrast:** Visualizes **16½ hours earlier detection** (Mon 14:00 vs Tue 06:30) and **~€150 net saving** per addressed incident.

### 2. 5-Pillar Deductive Proposal Story
* **Summary (Slide 01):** The 3 hero anchor numbers (~17-month payback, ~19% break-even vs 30% base case, 1 → 3 Nordic market scale).
* **Identify (Slide 02–03):** Contractor economics (77–88% jobsite delivery priority, Swedish labor at €43.5/h) and 3-market diagnosis.
* **Prioritise (Slide 04–05):** Why Swedish delivery & fulfilment is priority #1, and why material shortfall is the first exception to test.
* **Solve (Slide 06–07):** Operating model and technical architecture.
* **Scale (Slide 08–10):** Phase 1 Prove (4-week PoV, ~€80k) → Phase 2 MVP Launch → Phase 3 Measure & Scale.

### 3. Dual-Layer Rule Architecture (Slide 07)
* Visualizes the rule-bracketed architecture: **Existing Systems (Read-Only) → Rules Detect → AI Drafts → Rules Validate → People Approve → Execution**.
* *"No system replaced; AI reads data, never acts alone."*
* 4 Enterprise Safeguards and Cemex Go industry precedent benchmark.

### 4. Interactive ROI & Sensitivity Calculator (Slide 09)
* Live sliders for addressable recovery rate and baseline failure rate.
* Real-time calculation of value bridge, net annual savings, and payback period.
* Demonstrates why the ~19% break-even threshold justifies the €80k PoV before committing to full scale.

---

## 🛠️ Technology Stack & Deployment

* **Framework:** React 18, Vite 6
* **Styling:** Tailwind CSS (Swiss/Enterprise minimalist design system)
* **Icons:** Lucide React
* **Deployment:** Pre-configured for automated continuous deployment on **Vercel** (`vercel.json` included).

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/khiempg0605/Prototype-Proposal.git
cd Prototype-Proposal

# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

*Team TAMCA · Netcompany IT Consultant Challenge 2026*
