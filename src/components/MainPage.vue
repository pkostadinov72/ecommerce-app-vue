<template>
  <div class="container">
    <div v-for="product in store">
      <q-separator></q-separator>

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
    product.quantity = 1;
  }
}

function addInCartHandler(product: Product) {
  if (cartItems.value.length === 0) {
    cart.addCartItem(product);
  } else if (!cart.incrementCartItemQuantity(product) as boolean) {
    cart.addCartItem(product);
  } else {
    cart.itemNotify("One more Item Added.", "blue");
  }
}

getStore();
</script>
