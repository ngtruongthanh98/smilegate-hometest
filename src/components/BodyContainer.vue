<script>
import HeaderTitle from './HeaderTitle.vue';
import ImageCardList from './ImageCardList.vue';
import { MOCK_DATA_PHOTO_LIST } from '../constants'

export default {
  name: 'BodyContainer',
  components: {
    HeaderTitle,
    ImageCardList
  },
  data() {
    return {
      imageData: MOCK_DATA_PHOTO_LIST
    }
  }
};
</script>

<template>
  <div class="body-container">
    <HeaderTitle title="Photo Cards:" />
    <ImageCardList :images="imageData" />
  </div>
</template>

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
