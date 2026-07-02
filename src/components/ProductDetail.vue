<script setup>
import { computed, ref } from 'vue'
import { useProductsStore } from '../stores/products'
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

const props = defineProps({
  product: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])
const router = useRouter()
const productsStore = useProductsStore()
const cartStore = useCartStore()
const quantity = ref(1)

const product = computed(() => props.product || productsStore.selectedProduct || null)

function addToCart() {
  if (!product.value) return

  const selectedProduct = {
    ...product.value,
    quantity: quantity.value
  }

  cartStore.updateCart(selectedProduct)
}

function goBack() {
  if (router.currentRoute.value.path === '/product_detail') {
    router.push('/products')
    return
  }

  emit('close')
}
</script>

<template>
  <v-container>
    <v-row v-if="product">
      <v-col cols="12" md="2">
        <v-btn icon="mdi-arrow-left" color="primary" class="ma-4" @click="goBack"></v-btn>
      </v-col>
      <v-col cols="12" md="10">
        <div class="text-h4 font-weight-bold mb-4">
          {{ product.name }}
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <v-card>
          <v-img class="align-end text-white" height="420" :src="product.image"></v-img>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card height="100%" color="primary">
          <v-card-item>
            <v-chip class="mb-4">{{ product.category }}</v-chip>
            <v-btn color="lime-lighten-2" variant="outlined" density="compact" readonly class="mb-4">
              In Stock
            </v-btn>
            <v-card-text style="min-height: 100px; overflow-y: auto;">
              {{ product.description }}
            </v-card-text>
            <v-card-subtitle>Ksh {{ product.price }}</v-card-subtitle>
            <v-card-text>
              <v-row align="center">
                <v-col cols="4">Quantity</v-col>
                <v-col cols="8">
                  <v-number-input v-model="quantity" control-variant="split" density="compact" :min="1" :max="10"></v-number-input>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card-item>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn elevation="4" variant="elevated" @click="addToCart">Add to Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col cols="12" class="text-center py-8">
        <p>No product selected.</p>
      </v-col>
    </v-row>
  </v-container>
</template>
