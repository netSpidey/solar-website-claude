import { services as baseServices } from '~/data/services'
import { projects as baseProjects } from '~/data/projects'
import { processSteps as baseProcessSteps } from '~/data/process'
import { trustStats as baseTrustStats, whyChooseUs as baseWhyChooseUs } from '~/data/stats'
import { faqs as baseFaqs } from '~/data/faqs'
import { testimonials as baseTestimonials } from '~/data/testimonials'
import { blogPosts as baseBlogPosts } from '~/data/blog'
import type { BlogPost, FaqItem, ProcessStep, ProjectItem, ServiceItem, TestimonialItem, TrustStat, WhyChooseUsItem } from '~/data/types'

const serviceKeyBySlug: Record<string, string> = {
  'residential-solar': 'residentialSolar',
  'commercial-solar': 'commercialSolar',
  'industrial-solar': 'industrialSolar',
  'auto-cleaning-system': 'autoCleaningSystem',
  'solar-maintenance': 'solarMaintenance',
  'solar-amc': 'solarAmc',
  'solar-water-pump': 'solarWaterPump',
  'ev-charging': 'evCharging',
}

export function useLocalizedContent() {
  const { t, tm } = useI18n()

  const navLinks = computed(() => [
    { title: t('nav.home'), to: '/' },
    { title: t('nav.about'), to: '/about' },
    { title: t('nav.residential'), to: '/residential-solar' },
    { title: t('nav.commercial'), to: '/commercial-solar' },
    { title: t('nav.subsidy'), to: '/solar-subsidy' },
    { title: t('nav.projects'), to: '/projects' },
    { title: t('nav.blog'), to: '/blog' },
    { title: t('nav.faqs'), to: '/faqs' },
    { title: t('nav.contact'), to: '/contact' },
  ])

  // Header nav: service pages are grouped under a "Services" dropdown, the
  // rest render as top-level links. `exact` marks links that should only
  // highlight on an exact route match (home would otherwise match everything).
  const mainNavLinks = computed(() => [
    { title: t('nav.home'), to: '/', exact: true },
    { title: t('nav.about'), to: '/about' },
    { title: t('nav.subsidy'), to: '/solar-subsidy' },
    { title: t('nav.projects'), to: '/projects' },
    { title: t('nav.blog'), to: '/blog' },
    { title: t('nav.faqs'), to: '/faqs' },
    { title: t('nav.contact'), to: '/contact' },
  ])

  // Includes hidden services so their pages keep working when visited directly.
  const allServices = computed<ServiceItem[]>(() =>
    baseServices.map((service) => {
      const key = serviceKeyBySlug[service.slug]
      const features = tm(`services.${key}.features`) as string[]

      return {
        ...service,
        title: t(`services.${key}.title`),
        shortDescription: t(`services.${key}.shortDescription`),
        description: t(`services.${key}.description`),
        features,
      }
    })
  )

  const services = computed<ServiceItem[]>(() => allServices.value.filter((service) => !service.hidden))

  const getServiceBySlug = (slug: string) => computed(() => allServices.value.find((service) => service.slug === slug))

  const translateCategory = (category: string) => t(`categories.${category}`, category)

  const projects = computed<ProjectItem[]>(() =>
    baseProjects.map((project) => ({
      ...project,
      propertyTypeLabel: translateCategory(project.propertyType),
    } as ProjectItem & { propertyTypeLabel: string }))
  )

  const processSteps = computed<ProcessStep[]>(() => baseProcessSteps)

  // Localized by index — array lengths must match across locales (see messages.ts).
  const trustStats = computed<TrustStat[]>(() => {
    const values = tm('stats.values') as string[]
    const labels = tm('stats.labels') as string[]
    return baseTrustStats.map((stat, index) => ({
      ...stat,
      value: values[index] || stat.value,
      label: labels[index] || stat.label,
    }))
  })

  const whyChooseUs = computed<WhyChooseUsItem[]>(() => {
    const titles = tm('why.titles') as string[]
    const descriptions = tm('why.descriptions') as string[]
    return baseWhyChooseUs.map((item, index) => ({
      ...item,
      title: titles[index] || item.title,
      description: descriptions[index] || item.description,
    }))
  })
  const faqs = computed<FaqItem[]>(() => baseFaqs)
  const testimonials = computed<TestimonialItem[]>(() => baseTestimonials)
  const blogPosts = computed<BlogPost[]>(() => baseBlogPosts)
  const getBlogPostBySlug = (slug: string) => computed(() => blogPosts.value.find((post) => post.slug === slug))

  return {
    navLinks,
    mainNavLinks,
    services,
    getServiceBySlug,
    projects,
    processSteps,
    trustStats,
    whyChooseUs,
    faqs,
    testimonials,
    blogPosts,
    getBlogPostBySlug,
    translateCategory,
  }
}
