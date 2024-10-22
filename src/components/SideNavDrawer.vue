<template>
  <v-navigation-drawer permanent clipped>
    <v-list-item-group>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.route"
          class="hover-effect"
        >
          <v-list-item-content>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-list-item-group>
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

<style scoped>
.hover-effect:hover {
  background-color: lightgray;
}
</style>
