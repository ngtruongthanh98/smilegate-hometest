<template>
  <div class="body-container">
    <HeaderTitle title="Photo Cards:" />
    <ImageCardList :images="imageData" :isLoading="isLoading" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import HeaderTitle from '../ui/HeaderTitle.vue';
import ImageCardList from '../image/ImageCardList.vue';
import { shuffledPhotoList } from '../../constants';

interface Photo {
  src: string;
  alt: string;
  title: string;
}

export default defineComponent({
  name: 'BodyContainer',
  components: {
    HeaderTitle,
    ImageCardList
  },
  setup() {
    const imageData = ref<Photo[]>([]);
    const isLoading = ref<boolean>(true);

    const fetchImageData = (): Promise<Photo[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(shuffledPhotoList as unknown as Photo[]);
        }, 1000);
      });
    };

    onMounted(async () => {
      try {
        const data = await fetchImageData();
        imageData.value = data.map(photo => ({
          src: photo.src,
          alt: photo.alt,
          title: photo.title
        }));
      } catch (error) {
        console.error('Failed to load image data:', error);
      } finally {
        isLoading.value = false;
      }
    });

    return {
      imageData,
      isLoading
    };
  }
});
</script>

<style scoped lang="scss">
.body-container {
  margin: 16px 88px;
  border-radius: 8px;
}

@media (max-width: 700px) {
  .body-container {
    margin-left: 30px;
    margin-right: 30px;
  }
}
</style>
