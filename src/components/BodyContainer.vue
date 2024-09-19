<script>
import HeaderTitle from './HeaderTitle.vue';
import ImageCardList from './ImageCardList.vue';

export default {
  name: 'BodyContainer',
  components: {
    HeaderTitle,
    ImageCardList
  },
  data() {
    return {
      imageData: [
        { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 1', title: 'Product name is quite long in some cases.' },
        { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 2', title: 'Product name is quite long in some cases.' },
        { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 3', title: 'Product name is quite long in some cases.' },
        { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 4', title: 'Product name is quite long in some cases.' },
        { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 5', title: 'Product name is quite long in some cases.' },
        { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 6', title: 'Product name is quite long in some cases.' },
        { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 7', title: 'Product name is quite long in some cases.' },
        { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 8', title: 'Product name is quite long in some cases.' },
        { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 9', title: 'Product name is quite long in some cases.' },
        { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 10', title: 'Product name is quite long in some cases.' },
        { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 11', title: 'Product name is quite long in some cases.' },
        { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 12', title: 'Product name is quite long in some cases.' },
        { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 13', title: 'Product name is quite long in some cases.' },
        { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 14', title: 'Product name is quite long in some cases.' },
        { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 15', title: 'Product name is quite long in some cases.' },
        { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 16', title: 'Product name is quite long in some cases.' },
        { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 17', title: 'Product name is quite long in some cases.' },
        { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 18', title: 'Product name is quite long in some cases.' },
        { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 19', title: 'Product name is quite long in some cases.' },
        { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 20', title: 'Product name is quite long in some cases.' }
      ]
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
  padding: 16px;
  margin-left: 32px;
  margin-right: 32px;
  border-radius: 8px;
}
</style>
