<template>
  <div class="image-card">
    <div class="image-card__image-container">
      <img :src="imageSrc" :alt="imageAlt" class="image-card__image" />
    </div>
    <div class="image-card__title-container">
      <div class="image-card__title">{{ title }}</div>
      <div class="image-card__tooltip">{{ title }}</div>
    </div>
  </div>
</template>

<script lang="ts">
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
  border: 1px solid $gray-dark;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: $white;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

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

  &__title-container {
    position: relative;
    display: inline-block;
    width: 100%;
    padding: 10px;
  }

  &__title {
    font-size: 1.4em;
    color: $text-dark;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    cursor: pointer;
  }

  &__tooltip {
    visibility: hidden;
    width: auto;
    background-color: $background-dark;
    color: $white;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    top: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
  }

  &__tooltip::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-bottom: 8px solid $background-dark;
    border-top: 8px solid transparent;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
  }

  &__title:hover + .image-card__tooltip {
    visibility: visible;
    opacity: 1;
    transform: translateX(-50%) translateY(10px);
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
