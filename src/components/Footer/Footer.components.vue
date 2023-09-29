<template>
  <footer>
    <div class="container">
        <div class="">MyFreeLancer @  {{ (new Date()).getFullYear() }} Managed by Sun Tzu Technologies 202303126583 (003494178-T)</div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
  props: {},
});

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './Footer.styles.scss';
</style>
