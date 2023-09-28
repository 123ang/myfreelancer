<template>
    <div class="hero-button">{{ title }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeroButton',
  props: {
    title: {
        required: true,
        type: String
    }
  },
});

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './HeroButton.styles.scss';
</style>