<template>
  <v-container>
    <h1 class="text-h4 mb-4">Orders</h1>
    <v-data-table
      class="elevation-1"
      :headers="headers"
      item-value="id"
      :items="orders"
      :loading="loading"
      show-expand
    >
      <template #expanded-row="{ columns, item }">
        <tr>
          <td :colspan="columns.length">
            <v-card
              class="ma-4"
              color="grey-darken-3"
              prepend-icon="mdi-package-variant"
              title="Order Items"
            >
              <v-card-text>
                <v-row dense>
                  <v-col
                    v-for="orderItem in item.orderItems"
                    :key="orderItem.id"
                    cols="12"
                    md="3"
                    sm="6"
                  >
                    <v-card color="grey-darken-2" flat>
                      <v-card-text>
                        <v-row no-gutters>
                          <v-col class="text-caption" cols="6">Name:</v-col>
                          <v-col class="text-body-2" cols="6">{{
                            orderItem.name
                          }}</v-col>
                          <v-col class="text-caption" cols="6">Brand:</v-col>
                          <v-col class="text-body-2" cols="6">{{
                            orderItem.brand
                          }}</v-col>
                          <v-col class="text-caption" cols="6">Quantity:</v-col>
                          <v-col class="text-body-2" cols="6">{{
                            orderItem.quantity
                          }}</v-col>
                          <v-col class="text-caption" cols="6">Price:</v-col>
                          <v-col class="text-body-2" cols="6">{{
                            formatCurrency(orderItem.price)
                          }}</v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </td>
        </tr>
      </template>
    </v-data-table>

    <v-btn class="fab-button" color="primary" icon to="/addorder">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";

interface OrderItem {
  id: number;
  name: string;
  brand: string;
  quantity: number;
  price: number;
}

interface Order {
  id: number;
  orderNumber: string;
  orderDate: string;
  status: string;
  totalAmount: number;
  orderItems: OrderItem[];
}

const orders = ref<Order[]>([]);
const loading = ref(true);

const headers = [
  { title: "Order Number", key: "orderNumber" },
  { title: "Order Date", key: "orderDate" },
  { title: "Status", key: "status" },
  {
    title: "Total Amount",
    key: "totalAmount",
    format: (value: number) => formatCurrency(value),
  },
];

const fetchOrders = async () => {
  try {
    const response = await axios.get("/api/orders");
    orders.value = response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
  } finally {
    loading.value = false;
  }
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

onMounted(() => {
  fetchOrders();
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
