<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import ImageCardList from './components/ImageCardList.vue';

const imageData = ref([
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 1', title: 'Sample Image 1' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 2', title: 'Sample Image 2' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 3', title: 'Sample Image 3' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 4', title: 'Sample Image 4' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 5', title: 'Sample Image 5' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 6', title: 'Sample Image 6' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 7', title: 'Sample Image 7' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 8', title: 'Sample Image 8' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 9', title: 'Sample Image 9' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 10', title: 'Sample Image 10' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 11', title: 'Sample Image 11' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 12', title: 'Sample Image 12' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 13', title: 'Sample Image 13' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 14', title: 'Sample Image 14' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 15', title: 'Sample Image 15' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 16', title: 'Sample Image 16' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 17', title: 'Sample Image 17' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 18', title: 'Sample Image 18' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 19', title: 'Sample Image 19' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 20', title: 'Sample Image 20' }
]);
</script>

<template>
  <Navbar/>
  <ImageCardList :images="imageData" />
</template>

<style lang="scss" scoped>
@import './assets/styles/index.scss';
</style>
