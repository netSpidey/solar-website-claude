import type { ProcessStep } from './types'

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Consultation',
    description: 'Share your electricity bill and requirements with our solar experts, free of cost.',
    icon: 'mdi-phone-in-talk-outline',
  },
  {
    step: 2,
    title: 'Site Survey',
    description: 'Our engineers visit your property to assess roof space, shading, and structural readiness.',
    icon: 'mdi-clipboard-search-outline',
  },
  {
    step: 3,
    title: 'System Design',
    description: 'We design a custom system sized to your consumption and roof layout for maximum output.',
    icon: 'mdi-ruler-square-compass',
  },
  {
    step: 4,
    title: 'Quotation',
    description: 'Receive a transparent quote covering equipment, installation, and applicable subsidy.',
    icon: 'mdi-file-document-outline',
  },
  {
    step: 5,
    title: 'Installation',
    description: 'Certified technicians complete installation safely, typically within 3-5 days.',
    icon: 'mdi-solar-panel-large',
  },
  {
    step: 6,
    title: 'Net Metering',
    description: 'We manage the complete net metering application and approval process with MSEDCL.',
    icon: 'mdi-transmission-tower',
  },
  {
    step: 7,
    title: 'Power Generation',
    description: 'Your system goes live — track real-time generation and savings from day one.',
    icon: 'mdi-weather-sunny',
  },
]
