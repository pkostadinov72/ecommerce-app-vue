<template>
  <div v-if="cartItems.length === 0">
    <h3>Your cart is emty...</h3>
    <h3>- <RouterLink to="/">Add</RouterLink> an Item!</h3>
  </div>
  <div class="container" v-else>
    <h1 class="finalPrice">Общо : {{ cart.finalCartPrice.toFixed(2) }}лв.</h1>
    <div>--------------------------------------------------</div>
    <div class="itemStyle" v-for="item in cartItems">
      <h4 class="cartItemTitle">{{ item.title }}</h4>
      <img class="cartProductImage" :src="item.image" :alt="item.image" />
      <h5 class="price">
        Цена за 1бр - {{ item.price }}лв. | Сума -
        {{ cart.finalPrice(item.price, item.quantity) }}лв.
      </h5>
      <h5>
        <q-btn
          class="btnPlusMinus"
          @click="cart.decrementCartItemQuantity(cartItems, item)"
        >
          -
        </q-btn>
        {{ item.quantity }}бр.
        <q-btn
          class="btnPlusMinus"
          @click="cart.incrementCartItemQuantity(item)"
        >
          +
        </q-btn>
      </h5>
      <q-btn class="btnPlusMinus" @click="cart.deleteCartItem(cartItems, item)">
        Remove from Cart
      </q-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { itemCart } from "@/stores/cart";
import { storeToRefs } from "pinia";

// pinia store
const cart = itemCart();
const { cartItems } = storeToRefs(cart);
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

.price {
  margin-bottom: 10px;
}

.finalPrice {
  font-size: 30px;
  margin: 10px 0px;
}

.cartProductImage {
  float: bottom;
  width: 150px;
  height: auto;
  margin: 25px;
}

.itemStyle {
  margin-bottom: 30px;
}
</style>
