<template>
  <div class="container">
    <div v-for="product in store">
      <Product
        :product="product"
        @add-in-cart="addInCartHandler($event)"
      ></Product>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

// components
import Product from "@/components/Product.vue";

// pinia store
import { itemCart } from "@/stores/cart";
import { storeToRefs } from "pinia";
const cart = itemCart();
const { cartItems } = storeToRefs(cart);

const store = ref<Product[]>([]);

async function getStore() {
  const api: string = "https://fakestoreapi.com/products";
  const response = await axios.get(api);
  store.value = response.data;
  for (let product of store.value) {
    product.quantity = 0;
  }
}

function addInCartHandler(product: Product) {
  if (cartItems.value.length === 0) {
    cart.addCartItem(product);
  }

  console.log(product.quantity, "product");

  for (let item of cartItems.value) {
    if (item.title === product.title) {
      product.quantity++;
      console.log(product.quantity);
    } else {
      cart.addCartItem(product);
    }
  }
}

getStore();
</script>
