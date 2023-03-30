<template>
  <div v-for="item in cartItems">
    <h2>{{ item.title }} -</h2>
    <h2>{{ finalPrice(item.price, item.quantity) }}$</h2>
    <h3>
      <button
        class="btnPlusMinus"
        @click="cart.decrementCartItemQuantity(cartItems, item)"
      >
        -
      </button>
      {{ item.quantity }}br.
      <button
        class="btnPlusMinus"
        @click="cart.incrementCartItemQuantity(item)"
      >
        +
      </button>
    </h3>
    <button class="btnPlusMinus" @click="cart.deleteCartItem(cartItems, item)">
      delete
    </button>
  </div>
</template>

<script setup lang="ts">
// pinia store
import { itemCart } from "@/stores/cart";
import { storeToRefs } from "pinia";
const cart = itemCart();
const { cartItems } = storeToRefs(cart);

function finalPrice(price: number, quantity: number) {
  let sum = price * quantity;
  return (Math.round(sum * 100) / 100).toFixed(2);
}
</script>

<style>
.btnPlusMinus {
  margin: 10px;
  display: inline-block;
  outline: none;
  border-width: 0px;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: inherit;
  font-weight: 500;
  max-width: 100%;
  text-align: center;
  text-decoration: none;
  transition: background 0.1s ease-out 0s,
    box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
  background: #0102000a;
  cursor: pointer;
  height: 32px;
  line-height: 32px;
  padding: 0px 12px;
  vertical-align: middle;
  width: auto;
  font-size: 14px;
  color: #42526e;
}

.btnPlusMinus:hover {
  background: #091e4214;
  text-decoration: inherit;
  transition-duration: 0s, 0.15s;
  color: #42526e;
}
</style>
