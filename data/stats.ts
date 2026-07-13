import type { TrustStat, WhyChooseUsItem } from './types'

// English base values — labels/values are localized by index via `stats.values`/`stats.labels`
// in locales/messages.ts (keep array lengths in sync across en/mr/hi).
export const trustStats: TrustStat[] = [
  { label: 'Max Central Subsidy', value: '₹78,000', icon: 'mdi-cash-multiple' },
  { label: 'Performance Warranty', value: '25 Years', icon: 'mdi-shield-check-outline' },
  { label: 'Typical Payback', value: '3–4 Years', icon: 'mdi-chart-line' },
  { label: 'Bank Loan Interest', value: '6.4%', icon: 'mdi-bank-outline' },
]

// The 8 USPs from the S.P. Enterprises flyer. Titles/descriptions are localized by index
// via `why.titles`/`why.descriptions` in locales/messages.ts (keep lengths in sync ×3 locales).
export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: 'Subsidy up to ₹78,000',
    description: 'Government subsidy up to ₹78,000 under PM Surya Ghar Yojana, with complete application support.',
    icon: 'mdi-cash-multiple',
    image: '/assets/images/why/subsidy-inr.jpg',
  },
  {
    title: 'Bank Loans at 6.4%',
    description: 'Nationalised-bank solar loans at 6.4% interest — we assist with the application.',
    icon: 'mdi-bank-outline',
    image: '/assets/images/why/bank-loan.jpg',
  },
  {
    title: 'MSEB-Compliant Installation',
    description: 'Installation as per MSEB/MSEDCL norms with complete net metering support.',
    icon: 'mdi-transmission-tower',
    image: '/assets/images/why/mseb-grid.jpg',
  },
  {
    title: '25-Year Performance Warranty',
    description: 'Tier-1 panels with up to 25-year performance warranty.',
    icon: 'mdi-shield-check-outline',
    image: '/assets/images/why/warranty-panels.jpg',
  },
  {
    title: 'Payback in 3–4 Years',
    description: 'Recover your investment in just 3–4 years through electricity bill savings.',
    icon: 'mdi-chart-line',
    image: '/assets/images/why/payback-growth.jpg',
    imagePosition: 'center 65%',
  },
  {
    title: 'Experienced Technicians',
    description: 'Skilled, experienced team for safe and high-quality installation.',
    icon: 'mdi-account-hard-hat-outline',
    image: '/assets/images/why/technicians.jpg',
  },
  {
    title: 'Fast & Transparent Service',
    description: 'Quick, transparent, and reliable service from enquiry to commissioning.',
    icon: 'mdi-lightning-bolt-outline',
    image: '/assets/images/why/transparent-service.jpg',
  },
  {
    title: 'Complete After-Sales Support',
    description: 'Full support after the sale — service visits, AMC plans, and quick fault response.',
    icon: 'mdi-headset',
    image: '/assets/images/why/after-sales-support.jpg',
  },
]
