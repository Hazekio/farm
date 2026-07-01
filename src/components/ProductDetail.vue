<script setup>
import {ref} from 'vue'
import { useProductsStore } from '../stores/products'
import { useCartStore} from '../stores/cart'
import { useRouter } from 'vue-router'

const router = useRouter()
const productsStore = useProductsStore()
const product = productsStore.selectedProduct

//cart
const cartStore = useCartStore()
const quantity = ref(1)

function buy(product){
    product.quantity = quantity.value
    cartStore.updateCart(product)
}

function checkout(){
    if (isAuthenticated) {
        ordersStore.checkout(cart)
        console.log('here')
    }
    else{
        router.push('/login')
    }
    
}

</script>

<template>
    <v-container>
        <v-row>
            <v-col md="2">
                <v-btn icon="mdi-arrow-left" color="primary" to="/products" class="ma-10"></v-btn>. 
            </v-col>
            <v-col md="10">
                <div class="text-display-medium mb-12 mt-10 ">
                    {{product.name}}
                </div>
            </v-col>
            <v-col align="right">
                <v-fab-transition>
                    <v-btn color="primary" position="fixed" style="z-index: 9999; top: 100px; right: 50px" class="me-4 mt-4" @click="dialog = true" >Checkout</v-btn>
                </v-fab-transition>
            </v-col>
            <v-divider/>
        </v-row>
        <v-row>
            <v-col md="6">
            <v-card>
                <v-img class="align-end text-white" height="620" :src="product.image" ></v-img>
            </v-card>
            </v-col>
            <v-col md="6" >
                <v-card height="400" color="primary">
                    <v-card-item>
                        <!-- <v-card-title class="mb-4">{{product.name}}</v-card-title> -->
                        <v-chip class="mb-4"> {{product.category}} </v-chip>
                            <v-row>
                                <v-col md="6">
                                    <v-btn color="lime-lighten-2" variant="outlined" density="compact" readonly > In Stock</v-btn>
                                </v-col>
                            </v-row>
                        <v-card-text style="height: 100px; overflow-y: auto;"> {{product.description}} </v-card-text>
                        <v-card-subtitle> Ksh {{product.price}}</v-card-subtitle>
                        <v-card-text> 
                            <v-row>
                                <v-col md="4">Quantity</v-col>
                                <v-col md="6">
                                    <v-number-input v-model = "quantity" control-variant="split" density="compact" :min="1" :max="10" > </v-number-input>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card-item>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-card-text>Total:0</v-card-text>
                        <v-btn elevation="4" variant="elevated" @click="buy(book)"> Add to Cart </v-btn>
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
                            <v-card-title>Cart</v-card-title>
                        </v-col>
                        <v-col cols="12" md="2" sm="12" align="right">
                            <v-btn color="primary" icon="mdi-close" @click="dialog = false"></v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-divider/>
                        <v-expansion-panels :rounded="[20, 8]" gap="8" variant="accordion" class="ma-4" >
                            <v-expansion-panel v-for="(item, index) in cart" :key="item.id" color="secondary">
                                <v-expansion-panel-title expand-icon="mdi-menu-down">{{ item.name }}</v-expansion-panel-title>
                                <v-expansion-panel-text> Price: {{item.price}} </v-expansion-panel-text>
                                <v-expansion-panel-text>
                                    <v-row>
                                    <v-col md="3">
                                        <v-select v-model="cart[index].quantity" :items="[1,2,3,4,5]" label="Qty" density="compact" variant="outlined" hide-details ></v-select>
                                    </v-col>
                                    <v-col>
                                        Subtotal: {{ (item.price * (item.quantity || 0)).toFixed(2)}}
                                    </v-col>
                                     <v-col cols="2" class="text-center">
                                        <v-btn icon="mdi-trash-can-outline" variant="text" color="error" density="comfortable" @click="handleRemove(item.id)" ></v-btn>
                                    </v-col>
                                    </v-row>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-row>
                    <v-card-actions>
                        <div>
                            <span class="mr-2">Total Amount:</span>
                            <span class="text-h5 font-weight-bold text-primary">Ksh {{ cartTotal.toFixed(2) }}</span>
                        </div>
                        <v-spacer/>
                        <v-btn variant="elevated" @click="checkout">Pay via MPesa</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        </div>
    </v-dialog>
</template>

<!-- i removed 'text-center' from inside the v-col opening div tag, because it lowkinuenly wasn't center and it being on the left made more sense -->