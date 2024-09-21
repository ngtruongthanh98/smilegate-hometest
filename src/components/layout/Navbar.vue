<template>
  <nav class="navbar">
    <div class="navbar-left">
      <img src="../../assets/images/logo.png" alt="Logo" class="logo">
    </div>
    <div class="navbar-right">
      <button class="hamburger" @click="toggleMenu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
      <div v-click-outside="handleCloseMenu" :class="['menu', { 'menu--open': isMenuOpen }]">
        <Button buttonText="Indie Game" @click="handleIndieGameClick" />
        <Button buttonText="Entry Game" @click="handleEntryGameClick" />
        <Button buttonText="Community" @click="handleCommunityClick" />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import Button from '../ui/Button.vue';
import clickOutsideDirective from '../../directives/click-outside';

export default defineComponent({
  name: 'Navbar',
  components: {
    Button
  },
  directives: {
    clickOutside: clickOutsideDirective
  },
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const handleCloseMenu = () => {
      isMenuOpen.value = false;
    };

    const handleResize = () => {
      isMenuOpen.value = false;
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize);
    });

    const handleIndieGameClick = () => {
      console.log('Indie Game button clicked');
      isMenuOpen.value = false;
    };

    const handleEntryGameClick = () => {
      console.log('Entry Game button clicked');
      isMenuOpen.value = false;
    };

    const handleCommunityClick = () => {
      console.log('Community button clicked');
      isMenuOpen.value = false;
    };

    return {
      isMenuOpen,
      toggleMenu,
      handleCloseMenu,
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
  background-color: $primary-color;
  color: $white;
}

.navbar-left .logo {
  height: 25px;
  cursor: pointer;
}

.navbar-right {
  display: flex;
  gap: 10px;
  margin-left: 24px;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  position: relative;
}

.hamburger-line {
  width: 30px;
  height: 3px;
  background: $white;
  border-radius: 2px;
}

.menu {
  display: flex;
  gap: 10px;
}

.menu--open {
  display: block;
}

.btn {
  &+.btn {
    margin-left: 10px;
  }
}

@media (max-width: 600px) {
  .hamburger {
    display: flex;
  }

  .menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: 20px;
    width: 200px;
    background-color: $primary-color;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    z-index: 9;
  }

  .menu--open {
    transform: translateX(0);
    display: flex;
    opacity: 1;
  }
}

@media (min-width: 600px) {
  .navbar-left .logo {
    height: 25px;
  }
}

@media (min-width: 900px) {
  .navbar-left .logo {
    height: 25px;
  }
}

@media (min-width: 1200px) {
  .navbar-left .logo {
    height: 30px;
  }
}

@media (max-width: 700px) {
  .navbar {
    padding: 33px;
  }
}
</style>
