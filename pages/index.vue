<template>
  <body>
    <header>
      <img alt="Doggies logo" class="logo" src="~/assets/logo.svg" />
      <DoggiesHeader msg="The Doggies Explorer" />
    </header>

    <TheDoggies />
  </body>
</template>

<script>
import TheDoggies from '../components/Doggies.vue'
import DoggiesHeader from '../components/DoggiesHeader.vue'

export default {
  name: 'TheDoggiesIndexPage',
  components: {
    DoggiesHeader,
    TheDoggies,
  },
}
</script>

<style scoped lang="scss">
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  line-height: 1.5;
  margin: 0 0 1rem 0;
}

.logo {
  display: block;
  height: 2.5rem;
  width: 2.5rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 0 0.5rem 0;
  }
}
</style>
