<script setup>
import {ref} from 'vue'
import { useProductsStore } from '../stores/products'
import { useCartStore} from '../stores/cart'
import { useRouter } from 'vue-router'


const router = useRouter()
const productsStore = useProductsStore()
const products= productsStore.products


function view(product){
   productsStore.updateSelectedProduct(product) // keep track of the selected item
    router.push('/product_detail')
}

//cart
const cartStore = useCartStore()
const cart = cartStore.cart
const dialog = ref(false)

const quantity = ref(1)

function buy(product){
    product.quantity = quantity.value
    cartStore.updateCart(product)
}

</script>

<template> 
    <v-container max-width="100%">
        <v-row class="mb-12 mt-12">
            <v-col>
                <div class="text-display-small"> 
                    Browse Products
                </div>
            </v-col>
            <v-col align="right">
                <v-btn variant="elevated" @click="dialog = true">Checkout</v-btn>
            </v-col>
        <v-divider/>
        </v-row>
        <v-row>
            <v-col v-for = "product in products" >
                <v-card class="h-100 d-flex flex-column" width="250">
                    <v-img :src="product.image" height="200px" class="mt-4"></v-img>
                    <v-card-title>{{product.name}}</v-card-title>
                    <v-card-subtitle>Ksh {{product.price}}</v-card-subtitle>
                    <v-card-text>{{product.category}}</v-card-text>
                    <v-card-text>By {{product.author}}</v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" variant="elevated" @click="buy(product)">Add to Cart</v-btn>
                        <v-btn color="primary" variant="elevated" @click="view(product)">View Products</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <!-- Checkout -->
<v-dialog v-model="dialog" max-width="600">
    <div v-if="cart.length == 0" class="mt-12">
        <v-card>
            <v-row class="mb-12 mt-12">
                <v-col cols="12" md="10" sm="12" align="center">
                    <div class="text-display-small">
                        Your cart is empty!
                    </div>
                </v-col>
                <v-col cols="12" md="2" sm="12" align="right">
                    <v-btn class="ma-2" color="primary" icon="mdi-close" @click="dialog = false"></v-btn>
                </v-col>
            </v-row>
        </v-card>
    </div>
    <div v-else>
    <v-row>
        <v-col md="12">
            <v-card>
                <v-row class="ma-4">
                    <v-col cols="12" md="10" sm="12">
                        <div class="text-display-small">
                            Cart
                        </div>
                    </v-col>
                    <v-col cols="12" md="2" sm="12" align="right">
                        <v-btn color="primary" icon="mdi-close" @click="dialog = false"></v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-divider/>
                    <v-col md="6">
                        <v-list lines="two" >
                            <v-list-item
                                v-for="item in cart"
                                :key="item"
                                :title="item.name"
                                :subtitle="'Total: ' + item.price * item.quantity"
                                color="primary"
                            ></v-list-item>
                            
                        </v-list>
                    </v-col>
                    <v-divider/>
                </v-row>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn variant="elevated">Pay via MPesa</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
    </div>
</v-dialog>

    <!-- Footer Again -->
  <v-container class="bg-primary" max-width="100%">
    <v-row>
        <v-col>
            <div allign="center">
                <router-link to="/">
                    <v-img src="/logo.png" width="50%" height="50%" ></v-img>
                </router-link>

                <p> Copyright Novel Nook Online Book Store &copy; 2026</p>
            </div>
        </v-col>
        <v-col md="4" >
            <div class="text-center">
                <p>Follow us on:</p>
                <v-icon icon="mdi-instagram"></v-icon>
                <v-icon icon="mdi-twitter"></v-icon>
                <v-icon icon="mdi-facebook"></v-icon>
            </div>
        </v-col>
        <v-col md="4">
            <div class="text-center">
                <p>Contact Us:</p>
                <p>Email: info@novelnook.com</p>
                <p>Phone: +254795164644</p>
            </div>
        </v-col>
    </v-row>
  </v-container>
                        
</template>

<!-- md="3" class="pa-3" made the page nice, you had it in the v-col <v-for="book in books">. after class see if this works better for you-->