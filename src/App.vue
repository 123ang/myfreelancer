<template>
  <Navbar />
  <router-view/>
  <Footer />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Navbar from '@/components/Navbar/Navbar.components.vue'
  import Footer from '@/components/Footer/Footer.components.vue'

  export default defineComponent({
    name: 'App',
    components: {
      Navbar, Footer,
    },
  });
</script>

<style lang="scss">
  @import './assets/styles/global.styles.scss'
</style>
