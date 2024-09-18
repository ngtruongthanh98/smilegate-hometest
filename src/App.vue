<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import HeaderTitle from './components/HeaderTitle.vue';
import ImageCardList from './components/ImageCardList.vue';

const imageData = ref([
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 1', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 2', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 3', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 4', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 5', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 6', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 7', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 8', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 9', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 10', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 11', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 12', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 13', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 14', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 15', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 16', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 17', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 18', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 19', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 20', title: 'Product name is quite long in some cases.' }
]);
</script>

<template>
  <Navbar/>
  <HeaderTitle title="Photo Cards:" />
  <ImageCardList :images="imageData" />
</template>

<style lang="scss" scoped>
@import './assets/styles/index.scss';
</style>
