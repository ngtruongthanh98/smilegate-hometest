<template>
  <button class="btn-outline" @click="handleClick">
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    buttonText: {
      type: String,
      required: true
    }
  },
  emits: ['click'],
  methods: {
    handleClick(event: Event) {
      this.$emit('click', event);
    }
  }
});
</script>

<style scoped lang="scss">
.btn-outline {
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid $white;
  color: $white;
  background: transparent;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: $white;
    color: $text-dark;
    border-color: $text-dark;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}

@media (min-width: 600px) {
  .btn-outline {
    font-size: 14px;
  }
}

@media (min-width: 900px) {
  .btn-outline {
    font-size: 18px;
  }
}

@media (min-width: 1200px) {
  .btn-outline {
    font-size: 20px;
  }
}
</style>
