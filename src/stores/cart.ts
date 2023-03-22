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

  function incrementCartItemQuantity(product: cartProduct) {
    for (let item of cartItems.value) {
      if (item.title === product.title) {
        item.quantity++;
        return true;
      }
    }
  }

  return { cartItems, addCartItem, incrementCartItemQuantity };
});
