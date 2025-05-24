<template>
  <DefaultLayout>
    <HomeHero />
    <HomeCategoriesSection />
    <HomeQualityBanner />
    <HomeFeaturedProducts />
    <HomeBusinessServices />
  </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import HomeHero from "@/components/partials/HomeHero.vue";
import HomeCategoriesSection from "@/components/partials/HomeCategoriesSection.vue";
import HomeQualityBanner from "@/components/partials/HomeQualityBanner.vue";
import HomeFeaturedProducts from "@/components/partials/HomeFeaturedProducts.vue";
import HomeBusinessServices from "@/components/partials/HomeBusinessServices.vue";

export default defineComponent({
  name: "HomeView",
  components: { 
    DefaultLayout, 
    HomeHero, 
    HomeCategoriesSection, 
    HomeQualityBanner, 
    HomeFeaturedProducts, 
    HomeBusinessServices
  },
});
</script>
