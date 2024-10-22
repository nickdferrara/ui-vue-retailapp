<template>
  <v-navigation-drawer permanent clipped>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.route"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const items = [
  { title: 'Products', icon: 'mdi-package-variant', route: '/products' },
  { title: 'Orders', icon: 'mdi-cart', route: '/orders' },
  { title: 'Picking', icon: 'mdi-hand-pointing-right', route: '/picking' },
  { title: 'Shipping', icon: 'mdi-truck', route: '/shipping' },
  { title: 'Invoices', icon: 'mdi-file-document', route: '/invoices' },
]
</script>
