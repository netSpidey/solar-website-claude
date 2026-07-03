import type { TrustStat, WhyChooseUsItem } from './types'

export const trustStats: TrustStat[] = [
  { label: 'Happy Customers', value: '500+', icon: 'mdi-emoticon-happy-outline' },
  { label: 'Installed Capacity', value: '12 MW+', icon: 'mdi-solar-power-variant-outline' },
  { label: 'Panel Warranty', value: '25 Years', icon: 'mdi-shield-check-outline' },
  { label: 'Customer Satisfaction', value: '98%', icon: 'mdi-star-outline' },
]

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: 'Free Site Survey',
    description: 'Detailed on-site assessment of your roof and consumption pattern, at no cost.',
    icon: 'mdi-map-marker-check-outline',
  },
  {
    title: 'Government Subsidy Assistance',
    description: 'End-to-end support for PM Surya Ghar and other applicable subsidy schemes.',
    icon: 'mdi-bank-outline',
  },
  {
    title: 'Net Metering Support',
    description: 'We manage the entire net metering application process with MSEDCL for you.',
    icon: 'mdi-transmission-tower',
  },
  {
    title: 'Professional Installation',
    description: 'Certified in-house technicians follow strict safety and quality standards.',
    icon: 'mdi-account-hard-hat-outline',
  },
  {
    title: 'Premium Solar Panels',
    description: 'Tier-1 panels and inverters sourced from trusted, long-warranty manufacturers.',
    icon: 'mdi-solar-panel',
  },
  {
    title: 'After-Sales Support',
    description: 'Dedicated maintenance and AMC plans to keep your system performing for decades.',
    icon: 'mdi-headset',
  },
]
