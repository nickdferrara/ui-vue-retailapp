<template>
  <v-container>
    <h1>Add New Product</h1>
    <v-form @submit.prevent="submitProduct">
      <v-text-field v-model="product.name" label="Product Name" required />
      <v-text-field v-model="product.brand" label="Brand" required />
      <v-textarea v-model="product.description" label="Description" required />
      <v-btn class="mt-4" color="primary" type="submit">Add Product</v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { useProductStore } from "@/stores/products";
import { ref } from "vue";
import { useRouter } from "vue-router";

const productStore = useProductStore();
const router = useRouter();

const product = ref({
  name: "",
  brand: "",
  description: "",
});

const submitProduct = async () => {
  try {
    // Assuming you have an addProduct action in your store
    await productStore.addProduct(product.value);
    router.push("/products");
  } catch (error) {
    console.error("Error adding product:", error);
    // Handle error (e.g., show an error message to the user)
  }
};
</script>
