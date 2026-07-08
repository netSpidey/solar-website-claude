// Brand partners rendered as styled wordmarks that approximate each brand's visual
// identity (colors, case, tagline) until official logo artwork is licensed/provided.
// To switch to a real logo image, drop the file into public/assets/images/brands/
// and set the `logo` field — the component then renders the image instead.
export interface BrandWordmarkPart {
  text: string
  color?: string
  gradient?: string
}

export interface BrandPartner {
  name: string
  parts: BrandWordmarkPart[]
  tagline?: string
  taglineColor?: string
  italic?: boolean
  icon?: string
  iconColor?: string
  logo?: string
}

export const brandPartners: BrandPartner[] = [
  {
    name: 'Waaree',
    parts: [{ text: 'WAAREE', color: '#00539F' }],
    italic: true,
    tagline: 'One with the Sun',
    taglineColor: '#F58220',
  },
  {
    name: 'Adani Solar',
    parts: [{ text: 'adani', gradient: 'linear-gradient(90deg, #0B74B0, #75479C, #BD3861)' }],
    tagline: 'Solar',
    taglineColor: '#63666A',
  },
  {
    name: 'Tata Power Solar',
    parts: [{ text: 'TATA', color: '#486AAE' }],
    tagline: 'POWER SOLAR',
    taglineColor: '#1E4396',
  },
  {
    name: 'UTL',
    parts: [{ text: 'UTL', color: '#D7181F' }],
    tagline: "India's Most Preferred",
    taglineColor: '#63666A',
  },
  {
    name: 'Vikram Solar',
    parts: [
      { text: 'vikram', color: '#E1251B' },
      { text: ' solar', color: '#1B3F94' },
    ],
    tagline: 'Creating Climate for Change',
    taglineColor: '#63666A',
  },
  {
    name: 'Polycab',
    parts: [{ text: 'POLYCAB', color: '#12284C' }],
    icon: 'mdi-lightning-bolt',
    iconColor: '#F58220',
  },
]
