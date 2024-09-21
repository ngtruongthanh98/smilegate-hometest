<template>
  <div class="image-card-skeleton">
    <div class="image-card-skeleton__image-container">
      <img class="image-card-skeleton__image" src="../assets/images/empty.png" alt="Loading..." />
    </div>
    <div class="image-card-skeleton__title-container">
      <div class="image-card-skeleton__title"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCardSkeleton'
};
</script>

<style scoped lang="scss">
.image-card-skeleton {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid $gray-dark;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: $white;
  overflow: hidden;

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
    background-color: $gray-light;
    animation: pulse 1.5s infinite;
  }

  &__title-container {
    width: 100%;
    padding: 10px;
    background-color: $gray-light;
  }

  &__title {
    width: 80%;
    height: 1.4em;
    background-color: $gray-light;
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
}

/* Responsive styles */
@media (min-width: 600px) {
  .image-card-skeleton {
    &__title {
      height: 1.2em;
    }
  }
}

@media (min-width: 900px) {
  .image-card-skeleton {
    &__title {
      height: 1.0em;
    }
  }
}

@media (min-width: 1200px) {
  .image-card-skeleton {
    &__title {
      height: 0.8em;
    }
  }
}
</style>
