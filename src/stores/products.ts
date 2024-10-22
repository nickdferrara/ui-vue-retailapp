import { defineStore } from 'pinia'
import axios from 'axios'

interface Product {
  id: number
  name: string
  brand: string
  description: string
}

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [] as Product[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchProducts() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get('/api/products')
        this.products = response.data
      } catch (error) {
        this.error = 'Failed to fetch products'
        console.error('Error fetching products:', error)
      } finally {
        this.loading = false
      }
    },
  },
})
