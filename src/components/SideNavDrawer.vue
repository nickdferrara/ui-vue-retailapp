<template>
  <v-navigation-drawer permanent clipped>
    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.route"
        class="py-1"
      >
        <v-list-item-content class="py-0">
          <v-list-item-title class="d-flex align-center">
            <v-icon size="20" class="mr-3">{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const items = [
  { title: 'Home', icon: 'mdi-home', route: '/' },
  { title: 'Products', icon: 'mdi-package-variant', route: '/products' },
  { title: 'Orders', icon: 'mdi-cart', route: '/orders' },
  { title: 'Picking', icon: 'mdi-hand-pointing-right', route: '/picking' },
  { title: 'Shipping', icon: 'mdi-truck', route: '/shipping' },
  { title: 'Invoices', icon: 'mdi-file-document', route: '/invoices' },
]
</script>

<style scoped>
.v-list-item:hover {
  background-color: rgba(255, 255, 255, 0.08);
}

.v-list-item-title {
  font-size: 0.875rem;
}
</style>
