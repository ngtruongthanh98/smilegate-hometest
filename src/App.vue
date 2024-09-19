<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import BodyContainer from './components/BodyContainer.vue';
</script>

<template>
  <Navbar/>
  <BodyContainer />
</template>

<style lang="scss" scoped>
@import './assets/styles/index.scss';


body {
  margin: 0 !important;
}

</style>
