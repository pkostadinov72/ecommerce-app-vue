import { ref, watch } from "vue";
import { defineStore } from "pinia";
import { useQuasar } from "quasar";

export const itemCart = defineStore("cart", () => {
  const cartItems = ref<Product[]>([]);
  const finalCartPrice = ref<number>(0);

  if (localStorage.getItem("cart")) {
    cartItems.value = JSON.parse(localStorage.getItem("cart") as string);
  }

  watch(
    cartItems,
    (cartItemsVal) => {
      localStorage.setItem("cart", JSON.stringify(cartItemsVal));
    },
    { deep: true }
  );

  if (localStorage.getItem("final")) {
    finalCartPrice.value = JSON.parse(localStorage.getItem("final") as string);
  }

  watch(
    finalCartPrice,
    (finalVal) => {
      localStorage.setItem("final", JSON.stringify(finalVal));
    },
    { deep: true }
  );

  // Quasar
  const $q = useQuasar();

  function itemNotify(msg: string, color: string) {
    $q.notify({
      message: msg,
      color: color,
      position: "top-right",
      timeout: 2300,
      progress: true,
      actions: [
        {
          label: "Dismiss",
          color: "white",
          handler: () => {},
        },
      ],
    });
  }

  function finalPrice(price: number, quantity: number) {
    let sum = price * quantity;
    return Math.round(sum * 100) / 100;
  }

  function addCartItem(product: Product) {
    cartItems.value.push(product);
    itemNotify("Item successfully added to Cart.", "green");
  }

  function incrementCartItemQuantity(product: Product) {
    for (let item of cartItems.value) {
      if (item.title === product.title) {
        item.quantity++;
        finalCartPrice.value += item.price;
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
          finalCartPrice.value -= item.price;
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
      itemNotify("Item removed from Cart.", "red");
      productList.splice(index, 1);
    }
    // return the modified array
    finalCartPrice.value -= finalPrice(product.price, product.quantity);
    return productList;
  }

  return {
    cartItems,
    addCartItem,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
    deleteCartItem,
    finalPrice,
    finalCartPrice,
    itemNotify,
  };
});
