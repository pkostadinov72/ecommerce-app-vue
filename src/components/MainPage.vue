<template>
  <div class="container">
    <Products
      :products="store"
      @add-in-cart="addInCartHandler($event)"
    ></Products>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

import Products from "@/components/Products.vue";

type Store = {
  category: string;
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

const store = ref<Store[]>([]);
const productId = ref<number>(0);

async function getStore() {
  const api: string = "https://fakestoreapi.com/products";
  const response = await axios.get(api);
  store.value = response.data;
}

function addInCartHandler(product: Store) {
  console.log(product.title, product.price + "$");
}

getStore();
</script>
