import type { BlogPost } from './types'

export const blogPosts: BlogPost[] = [
  {
    slug: 'pm-surya-ghar-subsidy-guide-nashik',
    title: 'PM Surya Ghar Subsidy: Complete Guide for Nashik Homeowners',
    excerpt:
      'Everything you need to know about eligibility, subsidy amounts, and the application process for rooftop solar subsidy in Maharashtra.',
    content:
      'The PM Surya Ghar Muft Bijli Yojana offers substantial subsidy for residential rooftop solar installations up to 3 kW. In this guide, we walk through eligibility criteria, required documents, expected subsidy amounts, and how our team assists Nashik homeowners through the entire application process, from registration on the national portal to final disbursement after net metering approval.',
    image: '/assets/images/blog/blog-subsidy-guide.svg',
    author: 'Suryoday Solar Team',
    date: '2026-05-12',
    category: 'Subsidy',
    readTime: '6 min read',
  },
  {
    slug: 'how-many-solar-panels-does-my-home-need',
    title: 'How Many Solar Panels Does Your Home Really Need?',
    excerpt:
      'A simple breakdown of how your electricity bill, roof space, and sunlight hours determine the right system size.',
    content:
      'Sizing a rooftop solar system correctly is the single biggest factor in maximizing your savings. This article explains how to estimate your ideal system size using your average monthly electricity bill, available shadow-free roof area, and Nashik\'s average sun hours, with worked examples for 3 kW, 5 kW, and 10 kW systems.',
    image: '/assets/images/blog/blog-system-sizing.svg',
    author: 'Suryoday Solar Team',
    date: '2026-04-28',
    category: 'Residential',
    readTime: '5 min read',
  },
  {
    slug: 'net-metering-explained-msedcl',
    title: 'Net Metering Explained: How MSEDCL Bi-Directional Meters Work',
    excerpt:
      'Understand how net metering lets you export surplus solar power and earn credits on your electricity bill.',
    content:
      'Net metering is what makes rooftop solar financially attractive in Maharashtra. This post explains how bi-directional meters installed by MSEDCL track your import and export of electricity, how billing credits are calculated, and the typical timeline for net metering approval in the Nashik region.',
    image: '/assets/images/blog/blog-net-metering.svg',
    author: 'Suryoday Solar Team',
    date: '2026-04-10',
    category: 'Technical',
    readTime: '4 min read',
  },
  {
    slug: 'commercial-solar-roi-nashik-businesses',
    title: 'Commercial Solar ROI: What Nashik Businesses Can Expect',
    excerpt:
      'A look at typical payback periods, financing options, and tax benefits for commercial solar installations.',
    content:
      'Commercial and industrial electricity tariffs are significantly higher than residential rates, making solar even more attractive for businesses. We break down typical ROI timelines, accelerated depreciation benefits, and financing structures available to Nashik-based businesses considering rooftop or ground-mount solar.',
    image: '/assets/images/blog/blog-commercial-roi.svg',
    author: 'Suryoday Solar Team',
    date: '2026-03-22',
    category: 'Commercial',
    readTime: '7 min read',
  },
  {
    slug: 'solar-panel-maintenance-tips-monsoon',
    title: '5 Solar Panel Maintenance Tips Before Monsoon Season',
    excerpt:
      'Simple steps to protect your solar investment and maintain peak performance through the rainy season.',
    content:
      'While monsoon rains naturally help clean solar panels, pre-monsoon maintenance is still essential. This article covers roof drainage checks, cable and junction box inspection, structural mounting checks, and why scheduling a professional inspection before monsoon can prevent costly issues.',
    image: '/assets/images/blog/blog-maintenance-tips.svg',
    author: 'Suryoday Solar Team',
    date: '2026-02-15',
    category: 'Maintenance',
    readTime: '4 min read',
  },
  {
    slug: 'pm-kusum-solar-water-pump-farmers',
    title: 'PM-KUSUM Scheme: Solar Water Pumps for Nashik District Farmers',
    excerpt:
      'How farmers around Nashik can access subsidised solar irrigation pumps under the PM-KUSUM scheme.',
    content:
      'The PM-KUSUM scheme provides significant subsidy for solar-powered agricultural water pumps, helping farmers reduce dependence on diesel and grid electricity. We explain eligibility, pump capacity selection based on borewell depth, and how our team supports the application and installation process for farms across Nashik district.',
    image: '/assets/images/blog/blog-water-pump.svg',
    author: 'Suryoday Solar Team',
    date: '2026-01-30',
    category: 'Agriculture',
    readTime: '5 min read',
  },
]

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug)
