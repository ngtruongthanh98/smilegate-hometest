<template>
  <div class="body-container">
    <HeaderTitle title="Photo Cards:" />
    <ImageCardList :images="imageData" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import HeaderTitle from './HeaderTitle.vue';
import ImageCardList from './ImageCardList.vue';
import { MOCK_DATA_PHOTO_LIST } from '../constants';

interface Photo {
  id: number;
  url: string;
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

    const fetchImageData = (): Promise<Photo[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(MOCK_DATA_PHOTO_LIST as unknown as Photo[]);
        }, 1000);
      });
    };

    onMounted(async () => {
      try {
        const data = await fetchImageData();
        imageData.value = data;
      } catch (error) {
        console.error('Failed to load image data:', error);
      }
    });

    return {
      imageData
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
