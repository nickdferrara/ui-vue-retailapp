<template>
  <v-container class="pa-8 products-container">
    <h1 class="mx-4 mt-4 mb-4">Products</h1>
    <v-data-table
      :headers="headers"
      :items="products"
      :items-per-page="10"
      :loading="loading"
    >
      <template #top>
        <v-toolbar flat>
          <v-toolbar-title>Products List</v-toolbar-title>
          <v-spacer />
          <v-btn color="primary" @click="refreshProducts"> Refresh </v-btn>
        </v-toolbar>
      </template>
      <template #no-data>
        <v-alert v-if="error" class="mt-4" type="error">
          {{ error }}
        </v-alert>
        <v-alert v-else class="mt-4" type="info">
          No products available
        </v-alert>
      </template>
    </v-data-table>

    <!-- Add round FAB button -->
    <v-btn class="fab-button" color="primary" icon @click="goToAddProduct">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { useProductStore } from "@/stores/products";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const productStore = useProductStore();
const router = useRouter();

const headers = ref([
  { title: "Name", key: "name" },
  { title: "Brand", key: "brand" },
  { title: "Description", key: "description" },
]);

const { products, loading, error } = storeToRefs(productStore);

const refreshProducts = () => {
  productStore.fetchProducts();
};

const goToAddProduct = () => {
  router.push("/add-product");
};

onMounted(() => {
  refreshProducts();
});
</script>

<style scoped>
.products-container {
  position: relative;
  min-height: 100vh;
}

.fab-button {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 5;
}
</style>
