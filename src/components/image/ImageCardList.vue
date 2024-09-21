<template>
  <div class="image-card-list">
    <template v-if="isLoading">
      <ImageCardSkeleton
        v-for="index in 20"
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

<script lang="ts">
import { PropType } from 'vue';
import ImageCard from './ImageCard.vue';
import ImageCardSkeleton from './ImageCardSkeleton.vue';


interface ImageData {
  src: string;
  title: string;
  alt: string;
}

export default {
  name: 'ImageCardList',
  components: {
    ImageCard,
    ImageCardSkeleton
  },
  props: {
    images: {
      type: Array as PropType<ImageData[]>,
      required: true,
      validator: (value: Array<{ src: string, title: string, alt: string }>) => {
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
