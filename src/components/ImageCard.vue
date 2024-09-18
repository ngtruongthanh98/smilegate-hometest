<template>
  <div class="image-card">
    <div class="image-card__image-container">
      <img :src="imageSrc" :alt="imageAlt" class="image-card__image" />
    </div>
    <h3 class="image-card__title">{{ title }}</h3>
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
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: $white;
  width: 100%;
  max-width: 300px;

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
    border-radius: 8px;
  }

  &__title {
    margin-top: 12px;
    font-size: 1.2em;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
}

/* Responsive styles */
@media (min-width: 600px) {
  .image-card {
    max-width: 300px;

    &__title {
      font-size: 1.6em;
    }
  }
}

@media (min-width: 900px) {
  .image-card {
    max-width: 250px;

    &__title {
      font-size: 1.4em;
    }
  }
}

@media (min-width: 1200px) {
  .image-card {
    max-width: 200px;

    &__title {
      font-size: 1.2em;
    }
  }
}
</style>
