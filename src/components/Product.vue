<template>
  <div class="productStyle">
    <h2 class="productTitle">{{ product.title }}</h2>
    <p class="productDescription">
      {{ product.description }}
    </p>
    <div>
      <img class="productImage" :src="product.image" :alt="product.image" />
      <h1 class="productPrice">
        - {{ product.price }}лв.
        <q-btn class="btnAddCart" @click="emits('addInCart', product)">
          Add in Cart
        </q-btn>
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  product: Product;
}>();

const emits = defineEmits(["addInCart"]);
</script>

<style scoped>
.btnAddCart {
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

.btnAddCart:hover {
  background: #091e4214;
  text-decoration: inherit;
  transition-duration: 0s, 0.15s;
  color: #42526e;
}

.productStyle {
  margin: 25px;
}

.productTitle {
  font-size: 30px;
  margin-bottom: 20px;
}

.productDescription {
  margin-bottom: 75px;
  float: right;
}

.productImage {
  float: bottom;
  width: 250px;
  height: auto;
  margin-bottom: 40px;
}

.productPrice {
  float: right;
  margin: 10px;
}
</style>
