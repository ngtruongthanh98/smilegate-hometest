<template>
  <nav class="navbar">
    <div class="navbar-left">
      <img src="../assets/images/logo.png" alt="Logo" class="logo">
    </div>
    <div class="navbar-right">
      <Button buttonText="Indie Game" @click="handleIndieGameClick" />
      <Button buttonText="Entry Game" @click="handleEntryGameClick" />
      <Button buttonText="Community" @click="handleCommunityClick" />
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue';
import Button from './Button.vue';

export default defineComponent({
  name: 'Navbar',
  components: {
    Button
  },
  setup() {
    const handleIndieGameClick = () => {
      console.log('Indie Game button clicked');
    };

    const handleEntryGameClick = () => {
      console.log('Entry Game button clicked');
    };

    const handleCommunityClick = () => {
      console.log('Community button clicked');
    };

    return {
      handleIndieGameClick,
      handleEntryGameClick,
      handleCommunityClick
    };
  }
});
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 88px;
  background-color: #333;
  color: $white;
}

.navbar-left .logo {
  height: 40px;
}

.navbar-right {
  display: flex;
  gap: 10px;
}
</style>
