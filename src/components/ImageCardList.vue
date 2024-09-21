<template>
  <div class="image-card-list">
    <template v-if="isLoading">
      <ImageCardSkeleton
        v-for="index in 6"
        :key="index"
      />
    </template>
    <template v-else>
      <ImageCard
        v-for="(image, index) in images"
        :key="index"
        :imageSrc="image.src"
        :imageAlt="image.alt"
        :title="image.title"
      />
    </template>
  </div>
</template>

<script>
import ImageCard from './ImageCard.vue';
import ImageCardSkeleton from './ImageCardSkeleton.vue';

export default {
  name: 'ImageCardList',
  components: {
    ImageCard,
    ImageCardSkeleton
  },
  props: {
    images: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every(item => 'src' in item && 'title' in item && 'alt' in item);
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
