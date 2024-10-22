<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4">
          <!-- Back button -->
          <v-btn
            class="mb-4"
            color="primary"
            prepend-icon="mdi-arrow-left"
            @click="goBack"
          >
            Back to Products
          </v-btn>

          <h1 class="text-h4 mb-6">Add New Product</h1>

          <v-form @submit.prevent="submitProduct">
            <v-text-field
              v-model="product.name"
              class="mb-4"
              label="Product Name"
              required
            />
            <v-text-field
              v-model="product.brand"
              class="mb-4"
              label="Brand"
              required
            />
            <v-textarea
              v-model="product.description"
              class="mb-4"
              label="Description"
              required
            />
            <v-btn
              color="primary"
              :disabled="isSubmitting"
              :loading="isSubmitting"
              type="submit"
            >
              Add Product
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
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

const isSubmitting = ref(false);

const submitProduct = async () => {
  isSubmitting.value = true;
  try {
    await productStore.addProduct(product.value);
    router.push("/products");
  } catch (error) {
    console.error("Error adding product:", error);
    // Handle error (e.g., show an error message to the user)
  } finally {
    isSubmitting.value = false;
  }
};

const goBack = () => {
  router.push("/products");
};
</script>
