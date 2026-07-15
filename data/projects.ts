import type { ProjectItem } from './types'

// Real S.P. Enterprises installations — photos supplied by the client (July 2026).
// The first 3 entries also appear on the homepage (ProjectsPreview shows slice(0, 3)).
// TODO(client): systemSize and estimatedSavings are pending from S.P. Enterprises —
// need kW capacity + approx. monthly saving for each site below. ProjectCard hides
// the stat chips while these are empty strings, so nothing fabricated is shown.
export const projects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Elevated Rooftop Solar Canopy',
    location: 'Dattatray Nagar, Hanuman Nagar, Nashik',
    systemSize: '',
    propertyType: 'Residential',
    estimatedSavings: '',
    image: '/assets/images/projects/project-residential-1.jpg',
    description:
      'Elevated-structure rooftop system that shades the terrace and water tanks while generating power for the home.',
  },
  {
    id: 'proj-2',
    title: 'Terrace Solar Installation',
    location: 'Saraf Bazar, Panchavati, Nashik',
    systemSize: '',
    propertyType: 'Residential',
    estimatedSavings: '',
    image: '/assets/images/projects/project-residential-2.jpg',
    description:
      'Elevated rooftop solar structure installed on a family home in the heart of Panchavati, keeping the terrace usable below.',
  },
  {
    id: 'proj-3',
    title: 'Home Solar Canopy System',
    location: 'Pavan Nagar, Nashik',
    systemSize: '',
    propertyType: 'Residential',
    estimatedSavings: '',
    image: '/assets/images/projects/project-residential-3.jpg',
    description:
      'High-clearance solar canopy over the terrace of a bungalow near Raigad Chowk, Pavan Nagar.',
  },
  {
    id: 'proj-4',
    title: 'Twin-Canopy Rooftop System',
    location: 'Shiv Krupa Nagar, Nashik',
    systemSize: '',
    propertyType: 'Residential',
    estimatedSavings: '',
    image: '/assets/images/projects/project-residential-4.jpg',
    description:
      'Two elevated panel canopies installed side by side on a residential terrace in Shiv Krupa Nagar.',
  },
  {
    id: 'proj-5',
    title: 'Bungalow Rooftop Installation',
    location: 'Nandgaon, Malegaon Road',
    systemSize: '',
    propertyType: 'Residential',
    estimatedSavings: '',
    image: '/assets/images/projects/project-residential-5.jpg',
    description:
      'Rooftop solar system installed on a bungalow along the Aurangabad–Malegaon Road in Nandgaon.',
  },
  {
    id: 'proj-6',
    title: 'Duplex Home Solar System',
    location: 'Sadashiv Nagar, Old Cidco, Nashik',
    systemSize: '',
    propertyType: 'Residential',
    estimatedSavings: '',
    image: '/assets/images/projects/project-residential-6.jpg',
    description:
      'Elevated rooftop structure on a duplex home in Old Cidco, built to carry the full panel array above the terrace.',
  },
]
