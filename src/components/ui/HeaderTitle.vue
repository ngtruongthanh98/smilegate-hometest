<template>
  <header class="header-title">
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.header-title {
  text-align: left;

  h1 {
    margin: 0;
    font-size: 2em;
    color: $text-dark;
  }
}
</style>
