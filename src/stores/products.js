import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products',  {
   state: () => {
        const products= {
            0:{
                id: 1,
                name: "Tomato",
                category: "Fruit",
                price: 200,
                availability: true,
                image: 'tomato.jpg'
            },
            1:{
                id: 2,
                name: "Banana",
                category: "Fruit",
                price: 100,
                availability: true,
                image: 'banana.jpg'
            },
            2:{
                id: 3,
                name: "Mango",
                category: "Fruit",
                price: 300,
                availability: true,
                image: 'mango.jpg'
            },
            3:{
                id: 4,
                name: "Watermelon",
                category: "Fruit",
                price: 400,
                availability: true,
                image: 'watermelon.jpg'
            },
            4:{
                id: 5,
                name: "Cabbage",
                category: "Vegetable",
                price: 100,
                availability: true,
                image: 'cabbage.jpg'
            },
            5:{
                id: 6,
                name: "Potato",
                category: "Vegetable",
                price: 200,
                availability: true,
                image: 'potato.jpg'
            },
            6:{
                id: 7,
                name: "Onion",
                category: "Vegetable",
                price: 100,
                availability: true,
                image: 'onion.jpg'
            },
            7:{
                id: 8,
                name: "Garlic",
                category: "Vegetable",
                price: 100,
                availability: true,
                image: 'garlic.jpg'
            },
            8:{
                id: 9,
                name: "Carrot",
                category: "Vegetable",
                price: 300,
                availability: true,
                image: 'carrot.jpg'
            },
            9:{
                id: 10,
                name: "Tangerine",
                category: "Fruit",
                price: 400,
                availability: true,
                image: 'tangerine.jpg'
            },
            10:{
                id: 11,
                name: "Lemon",
                category: "Fruit",
                price: 100,
                availability: true,
                image: 'lemon.jpg'
            },
            11:{
                id: 12,
                name: "Eggplant",
                category: "Vegetable",
                price: 300,
                availability: true,
                image: 'eggplant.jpg'
            },
        }
        const selectedProduct = ref(null)
        return{
            products, selectedProduct
        }
   },
   actions:{
       updateSelectedProduct (payload){
        this.selectedProduct = payload
       },
   },
   persist: true,
})