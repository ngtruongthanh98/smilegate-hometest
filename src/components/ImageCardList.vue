<template>
  <div class="image-card-list">
    <div v-if="isLoading">Loading...</div>
    <ImageCard
      v-else
      v-for="(image, index) in images"
      :key="index"
      :imageSrc="image.src"
      :imageAlt="image.alt"
      :title="image.title"
    />
  </div>
</template>

<script>
import ImageCard from './ImageCard.vue';

export default {
  name: 'ImageCardList',
  components: {
    ImageCard
  },
  props: {
    images: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every(item => 'src' in item && 'title' in item);
      }
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
.image-card-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 16px;
}
</style>
