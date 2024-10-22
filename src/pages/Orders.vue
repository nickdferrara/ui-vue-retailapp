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
              class="mb-4"
              color="grey-darken-3"
              prepend-icon="mdi-package-variant"
              title="Order Items"
            >
              <v-card-text>
                <v-simple-table>
                  <template #default>
                    <thead>
                      <tr>
                        <th class="text-left">Name</th>
                        <th class="text-left">Brand</th>
                        <th class="text-left">Quantity</th>
                        <th class="text-left">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="orderItem in item.orderItems"
                        :key="orderItem.id"
                      >
                        <td>{{ orderItem.name }}</td>
                        <td>{{ orderItem.brand }}</td>
                        <td>{{ orderItem.quantity }}</td>
                        <td>{{ formatCurrency(orderItem.price) }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </td>
        </tr>
      </template>
    </v-data-table>
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
