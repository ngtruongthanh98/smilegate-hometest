<template>
  <button :class="buttonClass" @click="handleClick">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    buttonText: {
      type: String,
      required: true
    }
  },
  computed: {
    buttonClass() {
      return {
        'btn': true
      };
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  }
};
</script>

<style scoped lang="scss">
.btn {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.btn-outline {
  border: 1px solid white;
  color: white;
  background: transparent;
}
</style>
