import { ref, watch, computed } from "vue";
import { defineStore } from "pinia";
import { useQuasar } from "quasar";

export const itemCart = defineStore("cart", () => {
  const cartItems = ref<Product[]>([]);

  
  const finalCartPrice = computed(()=>{
    return cartItems.value.reduce((totalCartPrice,cartItem)=> totalCartPrice + (cartItem.quantity * cartItem.price),0)
  })

  const allCartQuantity = computed(()=>{
    return cartItems.value.reduce((totalCartQuantity,cartItem)=> totalCartQuantity + cartItem.quantity,0)
  })


  if (localStorage.getItem("cart")) {
    // checking if there is Cart Item in local storage, if true, set state.
    cartItems.value = JSON.parse(localStorage.getItem("cart") as string);
  }

  watch(
    //saving Cart Items in local storage
    cartItems,
    (cartItemsVal) => {
      localStorage.setItem("cart", JSON.stringify(cartItemsVal));
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
        return true;
      }
    }
  }

  function decrementCartItemQuantity(productList: Product[], product: Product) {
    for (let item of cartItems.value) {
      if (item.title === product.title) {
        if (item.quantity === 1) {
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
      itemNotify("Item removed from Cart.", "red");
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
    finalPrice,
    finalCartPrice,
    allCartQuantity,
    itemNotify,
  };
});
