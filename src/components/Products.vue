<template>
  <pre v-for="product in products">
    {{ product }}
    <button @click="$emit('addInCart',product)">Add in Cart</button>
    </pre>
</template>

<script setup lang="ts">
type Store = {
  category: string;
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

const props = defineProps<{
  products: Store[];
}>();

const emits = defineEmits(["addInCart"]);
</script>
