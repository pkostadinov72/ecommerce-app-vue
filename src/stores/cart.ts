import { ref } from "vue";
import { defineStore } from "pinia";

export const itemCart = defineStore("cart", () => {
  const cartItems = ref<Product[]>([]);

  function addCartItem(product: Product) {
    cartItems.value.push(product);
  }

  function incrementCartItemQuantity(product: Product) {
    for (let item of cartItems.value) {
      if (item.title === product.title) {
        item.quantity++;
        return true;
      }
    }
  }

  return { cartItems, addCartItem, incrementCartItemQuantity };
});
