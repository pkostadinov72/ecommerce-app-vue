<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { itemCart } from "@/stores/cart";
import { storeToRefs } from "pinia";

// pinia store
const cart = itemCart();
const { allCartQuantity } = storeToRefs(cart);
</script>

<template>
  <nav>
    <RouterLink class="text-h6" to="/">
      <q-icon name="home" size="lg"></q-icon>
    </RouterLink>
    <RouterLink class="text-h6" to="/cart"
      ><q-icon name="o_shopping_cart" size="md"></q-icon>
      <span class="badge badge-warning" id="lblCartCount">{{
        allCartQuantity
      }}</span></RouterLink
    ><RouterView />
  </nav>
</template>

<style scoped>
.badge {
  padding-left: 9px;
  padding-right: 9px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
}

#lblCartCount {
  font-size: 12px;
  background: #ff0000;
  color: #fff;
  padding: 0 5px;
  vertical-align: top;
  margin-left: -10px;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
