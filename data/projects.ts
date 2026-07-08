import type { ProjectItem } from './types'

// PLACEHOLDER portfolio — replace with real S.P. Enterprises installations before go-live.
export const projects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Bungalow Rooftop Installation',
    location: 'Gangapur Road, Nashik',
    systemSize: '5 kW',
    propertyType: 'Residential',
    estimatedSavings: '₹4,500/month',
    image: '/assets/images/projects/project-residential-1.jpg',
    description:
      'A 5 kW rooftop system installed for a bungalow, cutting the monthly electricity bill from ₹5,200 to under ₹700.',
  },
  {
    id: 'proj-2',
    title: 'Duplex Home Solar System',
    location: 'Indiranagar, Nashik',
    systemSize: '3 kW',
    propertyType: 'Residential',
    estimatedSavings: '₹2,800/month',
    image: '/assets/images/projects/project-residential-2.jpg',
    description:
      'Compact 3 kW system on a duplex roof, designed to offset nearly the entire household consumption.',
  },
  {
    id: 'proj-3',
    title: 'Retail Showroom Solar',
    location: 'College Road, Nashik',
    systemSize: '15 kW',
    propertyType: 'Commercial',
    estimatedSavings: '₹18,000/month',
    image: '/assets/images/projects/project-commercial-1.jpg',
    description:
      'Rooftop solar for a two-floor retail showroom, reducing daytime grid dependency by over 80%.',
  },
  {
    id: 'proj-4',
    title: 'Hotel & Banquet Hall',
    location: 'Mumbai Naka, Nashik',
    systemSize: '40 kW',
    propertyType: 'Commercial',
    estimatedSavings: '₹52,000/month',
    image: '/assets/images/projects/project-commercial-2.jpg',
    imagePosition: 'center 88%',
    description:
      'A 40 kW hybrid rooftop system supporting a hotel and banquet hall with heavy daytime HVAC load.',
  },
]
