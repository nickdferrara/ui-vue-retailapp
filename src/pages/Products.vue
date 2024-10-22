<template>
  <v-container>
    <h1>Products</h1>
    <v-data-table
      :headers="headers"
      :items="products"
      :loading="loading"
      :items-per-page="10"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Products List</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="refreshProducts">
            Refresh
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:no-data>
        <v-alert v-if="error" type="error" class="mt-4">
          {{ error }}
        </v-alert>
        <v-alert v-else type="info" class="mt-4">
          No products available
        </v-alert>
      </template>
    </v-data-table>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/products'

const productStore = useProductStore()

const headers = ref([
  { title: 'Name', key: 'name' },
  { title: 'Brand', key: 'brand' },
  { title: 'Description', key: 'description' },
])

const { products, loading, error } = storeToRefs(productStore)

const refreshProducts = () => {
  productStore.fetchProducts()
}

onMounted(() => {
  refreshProducts()
})
</script>
