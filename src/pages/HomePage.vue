<script setup lang="ts">
import Navbar from '../components/layout/Navbar.vue';
import BodyContainer from '../components/layout/BodyContainer.vue';
</script>

<template>
  <Navbar/>
  <BodyContainer />
</template>

<script lang="ts">
export default {
  name: 'HomePage'
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';
</style>
