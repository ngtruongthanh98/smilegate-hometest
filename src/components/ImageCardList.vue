<template>
  <div class="image-card-list">
    <ImageCard
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
    }
  }
};
</script>

<style scoped lang="scss">
.image-card-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}
</style>
