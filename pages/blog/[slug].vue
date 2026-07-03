<template>
  <div v-if="post">
    <section class="bg-navy-gradient">
      <v-container class="py-10 py-md-14">
        <v-breadcrumbs :items="breadcrumbs" class="pl-0 mb-4">
          <template #divider>
            <v-icon icon="mdi-chevron-right" size="16" color="white" />
          </template>
        </v-breadcrumbs>
        <v-chip color="accent" size="small" variant="flat" class="mb-4" style="color: #0B1F3A">{{ post.category }}</v-chip>
        <h1 class="text-h4 text-md-h3 font-weight-bold text-white" style="max-width: 780px">{{ post.title }}</h1>
        <div class="d-flex ga-4 mt-4 text-white opacity-80 text-body-2">
          <span>{{ post.author }}</span>
          <span>{{ formatDate(post.date) }}</span>
          <span>{{ post.readTime }}</span>
        </div>
      </v-container>
    </section>

    <section class="section-py">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-img :src="post.image" :alt="post.title" rounded="xl" cover height="360" class="mb-8" />
            <p class="text-body-1" style="color: #424242; line-height: 1.9">{{ post.content }}</p>

            <v-divider class="my-8" />

            <v-card class="pa-6" color="secondary" rounded="xl">
              <div class="d-flex flex-column flex-sm-row align-sm-center justify-space-between ga-4">
                <div>
                  <h3 class="text-subtitle-1 font-weight-bold text-white mb-1">Ready to go solar in Nashik?</h3>
                  <p class="text-body-2 text-white opacity-90 mb-0">Get a free site survey and personalised quote today.</p>
                </div>
                <v-btn color="accent" class="text-deep-navy" to="/contact">Get Free Quote</v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
  <div v-else>
    <v-container class="py-16 text-center">
      <h1 class="text-h5 font-weight-bold">Article not found</h1>
      <v-btn class="mt-4" color="secondary" to="/blog">Back to Blog</v-btn>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { getBlogPostBySlug } from '~/data/blog'

const route = useRoute()
const post = getBlogPostBySlug(route.params.slug as string)

if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

const breadcrumbs = [
  { title: 'Home', to: '/' },
  { title: 'Blog', to: '/blog' },
  { title: post.title, disabled: true },
]

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

useSeoMeta({
  title: post.title,
  description: post.excerpt,
  ogTitle: post.title,
  ogDescription: post.excerpt,
  ogImage: post.image,
})
</script>
