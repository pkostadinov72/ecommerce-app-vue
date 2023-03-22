<template>
  <div v-for="item in cartItems">
    {{ item.title }} -- {{ item.price }} -- {{ item.quantity }} =
    {{ item.price * item.quantity }}
  </div>
</template>

<script setup lang="ts">
import { itemCart } from "@/stores/cart";
import { storeToRefs } from "pinia";
const cart = itemCart();
const { cartItems } = storeToRefs(cart);
</script>

<style></style>
