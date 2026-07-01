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
                description:"Fresh, juicy, and bursting with flavor — nature’s perfect bite.",
                availability: true,
                image: 'tomato.jpg'
            },
            1:{
                id: 2,
                name: "Banana",
                category: "Fruit",
                price: 100,
                description:"Nature’s energy bar, peel and go.",
                availability: true,
                image: 'banana.jpg'
            },
            2:{
                id: 3,
                name: "Mango",
                category: "Fruit",
                price: 300,
                description:"The king of fruits, sweet in every bite.",
                availability: true,
                image: 'mango.jpg'
            },
            3:{
                id: 4,
                name: "Watermelon",
                category: "Fruit",
                price: 400,
                description:"Summer in a slice.",
                availability: true,
                image: 'watermelon.jpg'
            },
            4:{
                id: 5,
                name: "Cabbage",
                category: "Vegetable",
                price: 100,
                description:"Humble leaves, hearty goodness.",
                availability: true,
                image: 'cabbage.jpg'
            },
            5:{
                id: 6,
                name: "Potato",
                category: "Vegetable",
                price: 200,
                description:"The comfort food classic, endlessly versatile.",
                availability: true,
                image: 'potato.jpg'
            },
            6:{
                id: 7,
                name: "Onion",
                category: "Vegetable",
                price: 100,
                description:"Layers of flavor in every dish.",
                availability: true,
                image: 'onion.jpg'
            },
            7:{
                id: 8,
                name: "Garlic",
                category: "Vegetable",
                price: 100,
                description:"Small clove, big punch",
                availability: true,
                image: 'garlic.jpg'
            },
            8:{
                id: 9,
                name: "Carrot",
                category: "Vegetable",
                price: 300,
                description:"Crunchy, sweet, and packed with goodness.",
                availability: true,
                image: 'carrot.jpg'
            },
            9:{
                id: 10,
                name: "Tangerine",
                category: "Fruit",
                price: 400,
                description:"Little bursts of sunshine",
                availability: true,
                image: 'tangerine.jpg'
            },
            10:{
                id: 11,
                name: "Lemon",
                category: "Fruit",
                price: 100,
                description:"Zesty freshness in every squeeze.",
                availability: true,
                image: 'lemon.jpg'
            },
            11:{
                id: 12,
                name: "Eggplant",
                category: "Vegetable",
                price: 300,
                description:"Rich, glossy, and full of flavor.",
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