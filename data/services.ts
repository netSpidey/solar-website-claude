import type { ServiceItem } from './types'

export const services: ServiceItem[] = [
  {
    slug: 'residential-solar',
    title: 'Residential Solar',
    shortDescription: 'Rooftop solar systems for homes and bungalows across Nashik.',
    description:
      'Cut your household electricity bill by up to 90% with a custom-designed rooftop solar system. We handle everything from site survey to net metering, using premium panels backed by long-term warranties.',
    icon: 'mdi-home-lightning-bolt-outline',
    image: '/assets/images/services/residential-solar.jpg',
    features: [
      'Free rooftop site survey',
      'Custom system sizing for your bill',
      'Government subsidy assistance (PM Surya Ghar)',
      'Net metering support with MSEDCL',
      '25-year panel performance warranty',
    ],
  },
  {
    slug: 'commercial-solar',
    title: 'Commercial Solar',
    shortDescription: 'Reduce operating costs for shops, offices, and hotels.',
    description:
      'Lower your commercial electricity expenses with a solar installation designed around your business load profile. Ideal for offices, retail showrooms, hotels, and hospitals in and around Nashik.',
    icon: 'mdi-store-outline',
    image: '/assets/images/services/commercial-solar.jpg',
    features: [
      'Detailed load & ROI analysis',
      'Flexible financing & leasing options',
      'Minimal disruption installation',
      'Real-time generation monitoring',
      'Preventive maintenance plans',
    ],
  },
  {
    // Not currently offered by S.P. Enterprises — hidden from nav/grids but kept for later re-enable.
    slug: 'industrial-solar',
    title: 'Industrial Solar',
    shortDescription: 'Large-scale ground-mount and rooftop systems for factories.',
    description:
      'High-capacity solar solutions engineered for industrial power demand — MIDC factories, warehouses, and manufacturing units across Nashik, Sinnar, and Igatpuri.',
    icon: 'mdi-factory',
    image: '/assets/images/services/industrial-solar.jpg',
    hidden: true,
    features: [
      'MW-scale system design & engineering',
      'Ground-mount & rooftop hybrid options',
      'Open access & group captive support',
      'Dedicated project management',
      'SCADA-based performance monitoring',
    ],
  },
  {
    slug: 'auto-cleaning-system',
    title: 'Auto Cleaning System',
    shortDescription: 'Automatic panel cleaning for maximum generation, zero manual effort.',
    description:
      'Automated solar panel cleaning systems that keep your panels dust-free year-round — improving generation by 5–20% while saving water, time, and labour. Can be retrofitted on existing plants.',
    icon: 'mdi-sprinkler-variant',
    // TODO: replace placeholder illustration with a real installation photo
    image: '/assets/images/services/auto-cleaning-system.svg',
    features: [
      'Panels stay clean for maximum generation',
      '5–20% improvement in performance',
      'Saves time and manual labour',
      'Water-saving cleaning cycles',
      'Retrofit-friendly for existing plants',
    ],
  },
  {
    slug: 'solar-maintenance',
    title: 'Solar Maintenance',
    shortDescription: 'Keep your solar system performing at peak efficiency.',
    description:
      'Regular cleaning, inspection, and performance checks to ensure your solar investment keeps generating maximum output year after year.',
    icon: 'mdi-tools',
    image: '/assets/images/services/solar-maintenance.jpg',
    features: [
      'Panel cleaning & inspection',
      'Inverter health checks',
      'Wiring & connection audits',
      'Performance reporting',
      'Rapid fault response',
    ],
  },
  {
    slug: 'solar-amc',
    title: 'Solar AMC',
    shortDescription: 'Annual maintenance contracts for worry-free ownership.',
    description:
      'Comprehensive annual maintenance contracts covering scheduled servicing, priority breakdown support, and generation monitoring for residential and commercial systems.',
    icon: 'mdi-file-document-check-outline',
    image: '/assets/images/services/solar-amc.jpg',
    imagePosition: 'center 88%',
    features: [
      'Scheduled quarterly servicing',
      'Priority breakdown support',
      'Free inverter firmware updates',
      'Annual generation health report',
      'Extended warranty coordination',
    ],
  },
  {
    slug: 'solar-water-pump',
    title: 'Solar Water Pump',
    shortDescription: 'Solar-powered irrigation pumps for farms around Nashik.',
    description:
      'Reliable solar water pumping systems for agricultural land, subsidised under the PM-KUSUM scheme, helping farmers cut diesel and electricity costs.',
    icon: 'mdi-water-pump',
    image: '/assets/images/services/solar-water-pump.jpg',
    features: [
      'PM-KUSUM subsidy assistance',
      'DC & AC submersible pump options',
      'Sized for borewell & open well',
      'Low-maintenance design',
      'On-site farmer training',
    ],
  },
  {
    slug: 'ev-charging',
    title: 'EV Charging Solutions',
    shortDescription: 'EV charger installation for homes, societies, and businesses.',
    description:
      'Safe, professionally installed EV charging points for homes, housing societies, and commercial premises — with the option to power your charging from rooftop solar.',
    icon: 'mdi-ev-station',
    // TODO: replace placeholder illustration with a real installation photo
    image: '/assets/images/services/ev-charging.svg',
    features: [
      'Home & society charger installation',
      'Solar-integrated charging options',
      'Safe, code-compliant wiring',
      'AC charger options for every budget',
      'Installation with after-sales support',
    ],
  },
]

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug)
