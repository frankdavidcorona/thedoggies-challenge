<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'DoggiesHeader',
  props: {
    msg: {
      type: String,
      default: 'The Doggies Explorer',
    },
  },
}
</script>

<style scoped lang="scss">
h1 {
  font-weight: 500;
  font-size: 2.6rem;
}
</style>
