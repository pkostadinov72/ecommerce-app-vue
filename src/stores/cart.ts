import { ref } from "vue";
import { defineStore } from "pinia";

export const itemCart = defineStore("cart", () => {
  type cartProduct = {
    title: string;
    price: number;
    image: string;
    quantity: number;
  };
  const cartItems = ref<cartProduct[]>([]);

  function addCartItem(product: cartProduct) {
    cartItems.value.push(product);
  }

  function checkCartItem(product: cartProduct) {
    return cartItems.value.includes(product);
  }

  function incrementItemQuantity(product: cartProduct) {}

  return { cartItems, addCartItem, checkCartItem, incrementItemQuantity };
});
