<template>
  <div class="container">
    <div class="container--divider"></div>

    <div class="container__content">
      <div class="container__content__info">
        <h3>Title and Owner</h3>
        <p>
          Named <b>{{ doggie?.name }}</b> and owned by
          <b>{{ doggie?.owner }}</b>
        </p>

        <h3>Description</h3>
        <p>{{ doggie?.description }}</p>
      </div>

      <div class="container__content__image">
        <img :src="doggie?.thumbnail" alt="doggie" />
      </div>
    </div>
    <div class="container--divider"></div>

    <DoggiesTraits v-if="doggie?.traits?.length" :doggie="doggie" />
  </div>
</template>

<script>
import DoggiesTraits from './DoggiesTraits.vue'

export default {
  name: 'DoggiesDetails',
  components: {
    DoggiesTraits,
  },
  props: {
    doggie: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style scoped lang="scss">
$gl-ms: 'screen and (max-width: 23.5em)'; // up to 360px
$gl-xs: 'screen and (max-width: 35.5em)'; // up to 568px
$gl-sm: 'screen and (max-width: 48em)'; // max 768px
$gl-md: 'screen and (max-width: 64em)'; // max 1024px
$gl-lg: 'screen and (max-width: 80em)'; // max 1280px

.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  &--divider {
    width: 100%;
    height: 1px;
    background: #e0e0e0;
    margin: 2rem 0;
  }

  &__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    &__info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      width: 100%;
      padding: 0 0 0 4rem;

      h3 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        font-weight: 700;
        color: #1b1b1b;
      }

      p {
        font-size: 1rem;
        text-align: start;
        margin-bottom: 2rem;
      }
    }

    &__image {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 24rem;
        height: 100%;
        object-fit: cover;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
        border-radius: 4px;
      }
    }
  }
}

@media #{$gl-sm} {
  .container {
    &__content {
      flex-direction: column;

      &__info {
        padding: 0;
      }
    }
  }
}
</style>
