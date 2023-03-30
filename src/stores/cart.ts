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

  function decrementCartItemQuantity(productList: Product[], product: Product) {
    for (let item of cartItems.value) {
      if (item.title === product.title) {
        if (item.quantity <= 1) {
          deleteCartItem(productList, product);
        } else {
          item.quantity--;
          return true;
        }
      }
    }
  }

  function deleteCartItem(productList: Product[], product: Product) {
    productList = cartItems.value;
    // find the index of the element in the array
    const index = productList.indexOf(product);
    // if the element is in the array, remove it
    if (index !== -1) {
      productList.splice(index, 1);
    }
    // return the modified array
    return productList;
  }

  return {
    cartItems,
    addCartItem,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
    deleteCartItem,
  };
});
