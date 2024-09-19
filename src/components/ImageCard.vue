<template>
  <div class="image-card">
    <div class="image-card__image-container">
      <img :src="imageSrc" :alt="imageAlt" class="image-card__image" />
    </div>
    <div class="image-card__title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      default: 'Image'
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.image-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: $white;

  &__image-container {
    width: 100%;
    padding-top: 66.67%; /* 3:2 aspect ratio */
    position: relative;
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    padding-top: 4px;
    padding-bottom: 4px;
    font-size: 1.4em;
    color: #333;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
}

/* Responsive styles */
@media (min-width: 600px) {
  .image-card {
    &__title {
      font-size: 1.2em;
    }
  }
}

@media (min-width: 900px) {
  .image-card {
    &__title {
      font-size: 1.0em;
    }
  }
}

@media (min-width: 1200px) {
  .image-card {
    &__title {
      font-size: 0.8em;
    }
  }
}
</style>
