<template>
  <v-app>
    <SideNavDrawer />
    <v-main>
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
import SideNavDrawer from '@/components/SideNavDrawer.vue'
</script>
