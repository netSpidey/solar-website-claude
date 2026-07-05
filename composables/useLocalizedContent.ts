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
  'solar-maintenance': 'solarMaintenance',
  'solar-amc': 'solarAmc',
  'solar-water-pump': 'solarWaterPump',
}

export function useLocalizedContent() {
  const { t, tm } = useI18n()

  const navLinks = computed(() => [
    { title: t('nav.home'), to: '/' },
    { title: t('nav.about'), to: '/about' },
    { title: t('nav.residential'), to: '/residential-solar' },
    { title: t('nav.commercial'), to: '/commercial-solar' },
    { title: t('nav.industrial'), to: '/industrial-solar' },
    { title: t('nav.subsidy'), to: '/solar-subsidy' },
    { title: t('nav.projects'), to: '/projects' },
    { title: t('nav.blog'), to: '/blog' },
    { title: t('nav.faqs'), to: '/faqs' },
    { title: t('nav.contact'), to: '/contact' },
  ])

  const services = computed<ServiceItem[]>(() =>
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

  const getServiceBySlug = (slug: string) => computed(() => services.value.find((service) => service.slug === slug))

  const translateCategory = (category: string) => t(`categories.${category}`, category)

  const projects = computed<ProjectItem[]>(() =>
    baseProjects.map((project) => ({
      ...project,
      propertyTypeLabel: translateCategory(project.propertyType),
    } as ProjectItem & { propertyTypeLabel: string }))
  )

  const processSteps = computed<ProcessStep[]>(() => baseProcessSteps)
  const trustStats = computed<TrustStat[]>(() => baseTrustStats)
  const whyChooseUs = computed<WhyChooseUsItem[]>(() => baseWhyChooseUs)
  const faqs = computed<FaqItem[]>(() => baseFaqs)
  const testimonials = computed<TestimonialItem[]>(() => baseTestimonials)
  const blogPosts = computed<BlogPost[]>(() => baseBlogPosts)
  const getBlogPostBySlug = (slug: string) => computed(() => blogPosts.value.find((post) => post.slug === slug))

  return {
    navLinks,
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
