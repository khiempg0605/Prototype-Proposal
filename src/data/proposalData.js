// Complete dataset representing TAMCA Proposal & Slide 06 Prototype
// Netcompany IT Consultant Challenge 2026

export const proposalMeta = {
  team: "TAMCA",
  challenge: "Netcompany IT Consultant Challenge 2026",
  round: "Round 1 Proposal",
  solution: "AI Delivery & Fulfilment Orchestrator",
  client: "Company A (Nordic Building Materials Retailer)",
  motto: "From alert to approved fix on one screen — AI drafts, people decide",
  threeNumbers: [
    {
      value: "~17 months",
      label: "Payback Period",
      description: "On €680k total investment (€80k PoV + €600k build/rollout), Sweden savings alone",
      badge: "Team Financial Model"
    },
    {
      value: "~19% vs 30%",
      label: "Break-Even Threshold",
      description: "Break-even requires preventing ~19% of addressable failures, vs 30% base case assumption",
      badge: "Sensitivity Analysis"
    },
    {
      value: "1 → 3 Markets",
      label: "Nordic Reusability",
      description: "Prove capability first in Sweden (#1 delivery bottleneck), then extend across Norway and Denmark",
      badge: "Strategic Roadmap"
    }
  ],
  standardMetrics: {
    b2bRevenueShare: "~85%",
    contractorJobsitePreference: "77–88%",
    swedishLaborCost: "€43.5 / hour (vs €30.0 EU avg, +45%)",
    avoidableFailureCost: "~€200 per incident",
    recoveryCost: "~€50 per order",
    earlyDetectionLeadTime: "16½ hours earlier",
    decisionSpeed: "Under 20 minutes",
    netSavingPerOrder: "~€150 net saving",
    povBudget: "~€80k (4-week Proof of Value)",
    totalInvestment: "€680k (€80k + €600k)",
    netAnnualBenefitBase: "~€248k / year"
  }
};

export const sampleOrders = [
  {
    id: "#2004",
    country: "Sweden",
    city: "Stockholm Region",
    contractor: "Byggmästare Nilsson AB",
    description: "100 plasterboard sheets (Gipsskivor Standard 12.5mm)",
    commitment: "Tue 07:00",
    dataTimestamp: "Mon 13:58",
    flaggedTimestamp: "Mon 14:00",
    approvedTimestamp: "Mon 14:20",
    shortfall: "20 short (80/100 available)",
    shortfallReason: "20 sheets allocated elsewhere; regular replenishment arriving Thursday, after delivery commitment.",
    siteNote: "Crane slot booked for 07:00 — option B needs a new slot",
    hasCriticalConstraint: true,
    options: [
      {
        id: "A",
        label: "Option A",
        recommended: true,
        action: "Transfer 20 from Branch B (12 km), tonight's shuttle",
        recoveryCost: "€50",
        costNum: 50,
        arrives: "Mon 21:00",
        arrivesTimeText: "Monday 21:00 (10 hrs before commitment)",
        status: "Feasible",
        statusType: "success",
        checks: [
          "20 available at Branch B after existing reservations",
          "Transfer cut-off 18:00 adhered (shuttle leaves 17:30)",
          "Arrives at main depot Mon 21:00, well before Tue 07:00 departure",
          "Maintains contractor crane appointment at 07:00 sharp"
        ],
        badgeVariant: "success",
        netSaving: "€150 (Avoid €200 failure - €50 shuttle)",
        impactAnalysis: "Full order delivered on original schedule. Avoids site downtime and worker standby cost (~€43.5/h). Highest customer satisfaction."
      },
      {
        id: "B",
        label: "Option B",
        recommended: false,
        action: "Split: 80 at 07:00; 20 at 13:00",
        recoveryCost: "€120",
        costNum: 120,
        arrives: "Tue 13:00",
        arrivesTimeText: "Tuesday 13:00 (6 hrs after commitment)",
        status: "Customer consent required",
        statusType: "warning",
        checks: [
          "80 sheets loaded on early truck for 07:00 drop",
          "20 sheets sourced from afternoon replenishment",
          "CRITICAL CONFLICT: Crane slot is booked at 07:00 only",
          "Requires contractor approval to reschedule crane or hire mobile hoist"
        ],
        badgeVariant: "warning",
        netSaving: "€80 (Avoid €200 failure - €120 split logistics)",
        impactAnalysis: "Two truck journeys increase transport cost to €120. Contractor may reject split if drywall crew is stalled on floors 3-5."
      },
      {
        id: "C",
        label: "Option C",
        recommended: false,
        action: "Wait for replenishment",
        recoveryCost: "€0",
        costNum: 0,
        arrives: "Thu",
        arrivesTimeText: "Thursday afternoon (48+ hrs late)",
        status: "Late",
        statusType: "danger",
        checks: [
          "Supplier delivery scheduled for Thursday morning",
          "CRITICAL FAILURE: Delivery commitment missed by 48+ hours",
          "Contractor site halted; crew downtime incurred",
          "Incurs €200+ rework, redelivery, and penalty costs"
        ],
        badgeVariant: "danger",
        netSaving: "-€200 (Full delivery failure cost incurred)",
        impactAnalysis: "Default outcome under current legacy operating model. Destroys B2B contractor trust and risks loss of repeat account."
      }
    ],
    sms: {
      recipient: "+46 70 123 4567 (Johan Nilsson, Site Manager)",
      senderName: "Company A Proffsservice",
      swedish: "Hej! Er order #2004 levereras komplett på tisdag kl. 07.00. Vi har säkrat de återstående 20 skivorna från en närliggande butik. Svara på detta sms om ni behöver hjälp. Vänliga hälsningar, Company A Proffsservice",
      englishTranslation: "Your order #2004 is confirmed for complete delivery on Tuesday at 07:00. We have secured the remaining 20 sheets from a nearby branch. Reply if you need assistance. Kind regards, Company A Pro Service",
      policyNote: "Sent only after stock and transport are secured · Approved by account manager"
    },
    timeline: [
      { step: "Flagged", time: "Mon 14:00", desc: "Shortfall detected 16½ hours before loading", state: "done" },
      { step: "Coordinator Approves A", time: "Mon 14:20", desc: "Human in the loop reviews options and commits fix", state: "current" },
      { step: "Staff Secure Stock & Shuttle", time: "Mon 15:00", desc: "Warehouse staff pick 20 sheets at Branch B for 17:30 shuttle", state: "pending" },
      { step: "Customer Informed", time: "Mon 15:15", desc: "Proactive SMS confirmed after stock reservation confirmed", state: "pending" },
      { step: "Sheets Arrive Depot", time: "Mon 21:00", desc: "Stock consolidated at central dispatch hub", state: "pending" },
      { step: "Delivered in Full", time: "Tue 07:00", desc: "Arrives on jobsite with crane slot intact", state: "pending" }
    ]
  },
  {
    id: "#2180",
    country: "Denmark",
    city: "Copenhagen Cluster",
    contractor: "København Byg A/S",
    description: "50 rolls mineral wool insulation (Isover A34)",
    commitment: "Wed 08:30",
    dataTimestamp: "Tue 11:20",
    flaggedTimestamp: "Tue 11:30",
    approvedTimestamp: "Tue 11:45",
    shortfall: "15 rolls short (35/50 available)",
    shortfallReason: "Damaged packaging during pallet unstacking; supplier batch arriving Friday.",
    siteNote: "Access via narrow historical courtyard — rigid truck max 7.5t",
    hasCriticalConstraint: true,
    options: [
      {
        id: "A",
        label: "Option A",
        recommended: true,
        action: "Express electric van transfer from Roskilde Hub",
        recoveryCost: "€45",
        costNum: 45,
        arrives: "Tue 19:30",
        arrivesTimeText: "Tuesday 19:30 (13 hrs before commitment)",
        status: "Feasible",
        statusType: "success",
        checks: [
          "15 undamaged rolls available at Roskilde",
          "Fits within electric urban van load volume",
          "Consolidates before morning load wave (05:00)"
        ],
        badgeVariant: "success",
        netSaving: "€155 (Avoid €200 failure - €45 recovery)",
        impactAnalysis: "On-time full delivery with zero site delay."
      },
      {
        id: "B",
        label: "Option B",
        recommended: false,
        action: "Substitute 15 rolls with Premium Lambda 32 at no extra charge",
        recoveryCost: "€60",
        costNum: 60,
        arrives: "Wed 08:30",
        arrivesTimeText: "Wednesday 08:30 (On time)",
        status: "Customer consent required",
        statusType: "warning",
        checks: [
          "Higher thermal grade in local stock",
          "Cost difference absorbed by Company A",
          "Requires architect / engineering signoff on thermal specs"
        ],
        badgeVariant: "warning",
        netSaving: "€140 (Avoid €200 failure - €60 margin cost)",
        impactAnalysis: "Fast resolution but requires technical verification."
      },
      {
        id: "C",
        label: "Option C",
        recommended: false,
        action: "Partial delivery: 35 rolls on Wed, 15 rolls on Fri",
        recoveryCost: "€110",
        costNum: 110,
        arrives: "Fri 10:00",
        arrivesTimeText: "Friday 10:00 (48 hrs late)",
        status: "Late",
        statusType: "danger",
        checks: [
          "Delays insulation team finishing wall cavities",
          "Drywallers cannot board without inspection"
        ],
        badgeVariant: "danger",
        netSaving: "-€90 (Extra freight + unhappy client)",
        impactAnalysis: "Risk of penalty clause."
      }
    ],
    sms: {
      recipient: "+45 20 44 88 12 (Morten Jensen, Projektleder)",
      senderName: "Company A Proffsservice DK",
      swedish: "Hej! Din ordre #2180 leveres komplet onsdag kl. 08.30. Vi har sikret de resterende 15 ruller isolering fra vores Roskilde hub. Med venlig hilsen, Company A Proffsservice",
      englishTranslation: "Hello! Your order #2180 is confirmed for complete delivery Wednesday at 08:30. We have secured the remaining 15 insulation rolls from our Roskilde hub. Kind regards, Company A Pro Service",
      policyNote: "Sent only after stock and transport are secured · Approved by account manager"
    },
    timeline: [
      { step: "Flagged", time: "Tue 11:30", desc: "Shortfall detected 21 hrs prior to commitment", state: "done" },
      { step: "Coordinator Approves A", time: "Tue 11:45", desc: "Decision logged in 15 minutes", state: "current" },
      { step: "Staff Secure Stock & Van", time: "Tue 14:00", desc: "Transfer booked on routine route", state: "pending" },
      { step: "Customer Informed", time: "Tue 14:30", desc: "SMS sent confirming full on-time arrival", state: "pending" },
      { step: "Rolls Consolidated", time: "Tue 19:30", desc: "Staged at dispatch dock", state: "pending" },
      { step: "Delivered in Full", time: "Wed 08:30", desc: "Complete delivery before drywall team starts", state: "pending" }
    ]
  },
  {
    id: "#1905",
    country: "Norway",
    city: "Oslo Region",
    contractor: "Fjordbygg Entreprenør AS",
    description: "40 glulam structural beams (Limtrebjelker 90x315mm)",
    commitment: "Fri 06:45",
    dataTimestamp: "Thu 10:15",
    flaggedTimestamp: "Thu 10:30",
    approvedTimestamp: "Thu 10:55",
    shortfall: "8 beams short (32/40 available)",
    shortfallReason: "Moisture reading exceeded tolerance on 8 beams during morning inbound check.",
    siteNote: "Direct offload onto roof frame using 50-tonne mobile crane (booked 07:00-09:00)",
    hasCriticalConstraint: true,
    options: [
      {
        id: "A",
        label: "Option A",
        recommended: true,
        action: "Transfer 8 certified beams from Drammen distribution centre",
        recoveryCost: "€65",
        costNum: 65,
        arrives: "Thu 22:00",
        arrivesTimeText: "Thursday 22:00 (8 hrs before commitment)",
        status: "Feasible",
        statusType: "success",
        checks: [
          "8 moisture-verified beams available at Drammen",
          "Inter-branch heavy flatbed arrives tonight",
          "Preserves critical 50-tonne crane appointment"
        ],
        badgeVariant: "success",
        netSaving: "€135 (Avoid €200 failure - €65 transfer)",
        impactAnalysis: "Guarantees 06:45 delivery. Mobile crane cancellation would cost €1,200+."
      },
      {
        id: "B",
        label: "Option B",
        recommended: false,
        action: "Direct hot-shot truck from supplier sawmill in Lillehammer",
        recoveryCost: "€190",
        costNum: 190,
        arrives: "Fri 06:15",
        arrivesTimeText: "Friday 06:15 (Tight buffer)",
        status: "Customer consent required",
        statusType: "warning",
        checks: [
          "Direct timber run from mill",
          "High expediting freight fee (€190)",
          "Extreme weather on E6 mountain pass could delay arrival"
        ],
        badgeVariant: "warning",
        netSaving: "€10 (Avoid €200 failure - €190 hotshot)",
        impactAnalysis: "Feasible but high economic cost and weather risk."
      },
      {
        id: "C",
        label: "Option C",
        recommended: false,
        action: "Deliver 32 beams Fri; remaining 8 on Monday",
        recoveryCost: "€0",
        costNum: 0,
        arrives: "Mon 08:00",
        arrivesTimeText: "Monday 08:00 (72 hrs late)",
        status: "Late",
        statusType: "danger",
        checks: [
          "Roof truss assembly incomplete over weekend",
          "Crane company charges 100% cancellation penalty",
          "Major commercial dispute risk"
        ],
        badgeVariant: "danger",
        netSaving: "-€200 (Catastrophic site failure)",
        impactAnalysis: "Severe project delay and relationship damage."
      }
    ],
    sms: {
      recipient: "+47 98 76 54 32 (Erik Løken, Anleggsleder)",
      senderName: "Company A Proffservice NO",
      swedish: "Hei! Ordre #1905 leveres komplett fredag kl. 06.45. Vi har sikret de resterende 8 limtredragere fra Drammen. Svar på denne meldingen hvis dere har spørsmål. Med vennlig hilsen, Company A Proffservice",
      englishTranslation: "Hello! Order #1905 is confirmed for complete delivery Friday at 06:45. We have secured the remaining 8 glulam beams from Drammen. Reply if you have questions. Kind regards, Company A Pro Service",
      policyNote: "Sent only after stock and transport are secured · Approved by account manager"
    },
    timeline: [
      { step: "Flagged", time: "Thu 10:30", desc: "Shortfall detected 20 hrs before crane slot", state: "done" },
      { step: "Coordinator Approves A", time: "Thu 10:55", desc: "Cross-depot transfer sanctioned", state: "current" },
      { step: "Staff Secure Stock & Flatbed", time: "Thu 13:00", desc: "Drammen warehouse pre-loads flatbed", state: "pending" },
      { step: "Customer Informed", time: "Thu 13:30", desc: "Contractor notified of on-time crane arrival", state: "pending" },
      { step: "Beams Staged at Hub", time: "Thu 22:00", desc: "Consolidated on morning site truck", state: "pending" },
      { step: "Delivered in Full", time: "Fri 06:45", desc: "Arrives 15 mins before crane operation commences", state: "pending" }
    ]
  }
];

export const proposalPillars = [
  {
    id: "summary",
    slideNumber: "01",
    title: "Executive Summary",
    subtitle: "Start with Swedish B2B delivery reliability; prove value in 4 weeks for ~€80k",
    tagline: "Conclusion first: challenge, question, solution, and decision requested",
    keyPoints: [
      "Target the #1 stated pain point: Delivery & fulfilment in Sweden (B2B = ~85% revenue).",
      "AI Delivery & Fulfilment Orchestrator detects at-risk orders early and drafts verified recovery actions.",
      "Human in the loop: Coordinators approve every stock transfer and customer communication.",
      "Proof of Value: 4 weeks, ~€80k replay on historical orders before any major expenditure."
    ],
    heroStat: "~17 mo",
    heroStatLabel: "Payback Period (€680k investment)",
    takeaway: "Validate the biggest assumptions with minimal upfront investment before scaling."
  },
  {
    id: "identify",
    slideNumber: "02–03",
    title: "Identify — Customer & Business Diagnosis",
    subtitle: "On-time jobsite delivery is core to contractor economics; local silos stall response",
    tagline: "Why contractors care, and why Company A currently struggles across 3 markets",
    keyPoints: [
      "77–88% of professional contractors rate direct jobsite delivery as critical (L.E.K. 2016).",
      "Swedish construction labor cost is €43.5/hr (45% above EU average of €30.0/hr). Late delivery leaves expensive crews idle.",
      "1 Business, 3 Markets, 3 Priorities: Denmark (manual processes), Norway (store ops), Sweden (delivery & fulfilment).",
      "Root cause hypothesis: Fragmented local systems create coordination bottlenecks between warehouse, store, and transport."
    ],
    heroStat: "€43.5/h",
    heroStatLabel: "Swedish Construction Labor (Eurostat 2024)",
    takeaway: "A missed delivery breaks the exact promise professional contractors pay a premium for."
  },
  {
    id: "prioritise",
    slideNumber: "04–05",
    title: "Prioritise — Strategic Focus & Root Cause",
    subtitle: "Focus on delivery failures in Sweden: high cost, high B2B exposure, solvable exceptions",
    tagline: "Who pays → What they value → Where it breaks → What is at risk",
    keyPoints: [
      "~85% B2B revenue share + Sweden priority #1 + €200 cost per failed delivery.",
      "Avoidable failures: Inventory, picking, and vehicle errors turn into delivery failures only because they are caught too late.",
      "First test case: Material shortfall (easy to detect, clearly bounded, multiple recovery options).",
      "Honest condition: Clear 'Validate first' and 'Reconsider if' gates established before commit."
    ],
    heroStat: "~€200",
    heroStatLabel: "Avoidable Cost per Failed Delivery",
    takeaway: "Material shortfall is the ideal initial exception type to demonstrate coordinated recovery."
  },
  {
    id: "solve",
    slideNumber: "06–07",
    title: "Solve — Operating Model & Architecture",
    subtitle: "From alert to approved fix on one screen: AI drafts options, people decide",
    tagline: "Dual-layer deterministic rules ensure AI never acts alone; no systems replaced",
    keyPoints: [
      "Interactive coordinator workspace: Why at risk → AI recovery options → Feasibility checks → Human approval.",
      "Speed contrast: 16½ hours earlier detection (Mon 14:00 vs Tue 06:30); decision in 20 minutes.",
      "Economics: ~€50 recovery cost prevents a ~€200 failed delivery (~€150 net saving per incident).",
      "Technical Safeguard: Read-only existing ERP/WMS/TMS → Rules detect → AI drafts → Rules validate → People approve."
    ],
    heroStat: "16½ hrs",
    heroStatLabel: "Earlier Detection for Order #2004",
    takeaway: "No legacy system replaced. AI reads data, drafts solutions, humans stay in full command."
  },
  {
    id: "scale",
    slideNumber: "08–10",
    title: "Scale — Roadmap, ROI & Nordic Rollout",
    subtitle: "4-week PoV pays back in ~17 months; 1 shared core scaled across Denmark and Norway",
    tagline: "Prove (W1–4) → Launch MVP (W5–10) → Measure & Scale (W11–22)",
    keyPoints: [
      "Phase 1 Prove (W1–4, ~€80k): Historical replay of Sweden orders. Pass criteria: prove ≥19% addressable failure recovery.",
      "Phase 2 Launch MVP (W5–10): Go-live in 1 Sweden cluster with live coordinator UI.",
      "Phase 3 Measure & Scale (W11–22): Full Sweden rollout and adapt shared capability for Denmark & Norway priorities.",
      "Financial scenarios: Conservative (−€247k), Base Case (+€248k/yr net), Aggressive (+€1.37M/yr net)."
    ],
    heroStat: "30% vs 19%",
    heroStatLabel: "Base Case vs Break-Even Recovery Rate",
    takeaway: "Gate-based investment shields Company A from downside risk at every milestone."
  }
];

export const architectureSafeguards = [
  {
    title: "AI Never Writes Directly",
    desc: "The Orchestrator reads from existing WMS/ERP via secure APIs. AI never directly commits inventory or books freight without explicit coordinator signoff.",
    icon: "ShieldCheck"
  },
  {
    title: "Deterministic Rule Bracketing",
    desc: "AI recommendations are sandwiched between two strict deterministic rule engines: detection rules (identify shortfall) and validation rules (guarantee stock cut-off and physical arrival).",
    icon: "Cpu"
  },
  {
    title: "Zero Disruption to Existing IT",
    desc: "No core ERP or WMS systems are decommissioned or re-platformed. The solution operates as an agile intelligence overlay.",
    icon: "Layers"
  },
  {
    title: "Auditable Human Approval Log",
    desc: "Every recommendation, override, and approved action is timestamped and logged with user credentials for total operational accountability.",
    icon: "FileCheck"
  }
];
