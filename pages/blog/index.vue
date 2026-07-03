<template>
  <div>
    <CommonPageHero
      title="Solar Energy Blog"
      subtitle="Guides, tips, and updates on solar subsidy, technology, and savings for Nashik homeowners and businesses."
    />

    <section class="section-py">
      <v-container>
        <v-row>
          <v-col v-for="post in blogPosts" :key="post.slug" cols="12" sm="6" md="4">
            <NuxtLink :to="`/blog/${post.slug}`" class="text-decoration-none">
              <v-card class="h-100 hover-lift" elevation="1" rounded="xl">
                <v-img :src="post.image" :alt="post.title" height="200" cover />
                <v-card-item>
                  <v-chip color="accent" size="small" variant="flat" class="mb-2" style="color: #0B1F3A">
                    {{ post.category }}
                  </v-chip>
                  <v-card-title class="text-subtitle-1 font-weight-bold px-0" style="white-space: normal">
                    {{ post.title }}
                  </v-card-title>
                  <v-card-text class="px-0 text-body-2" style="color: #616161">
                    {{ post.excerpt }}
                  </v-card-text>
                </v-card-item>
                <v-card-actions class="px-4 pb-4 d-flex justify-space-between">
                  <span class="text-caption" style="color: #9e9e9e">{{ formatDate(post.date) }}</span>
                  <span class="text-caption" style="color: #9e9e9e">{{ post.readTime }}</span>
                </v-card-actions>
              </v-card>
            </NuxtLink>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <HomeFinalCTA />
  </div>
</template>

<script setup lang="ts">
import { blogPosts } from '~/data/blog'

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

useSeoMeta({
  title: 'Solar Energy Blog — Tips & Guides for Nashik',
  description:
    'Read the latest articles on solar subsidy, system sizing, net metering, and maintenance tips for solar owners in Nashik, Maharashtra.',
  ogTitle: 'Solar Energy Blog — Nashik',
  ogDescription: 'Guides and tips on solar subsidy, savings, and maintenance for Nashik homeowners.',
  keywords: 'solar blog Nashik, solar tips Maharashtra, solar subsidy guide, net metering guide',
})
</script>
