<template>
    <div class="hero-section">
        <div class="container">
            <div class="title-container">
                <h1 class="mb-2">MyFreeLancer</h1>
                <h4 class="mb-2">MyFreeLancer is a dynamic platform connecting talented freelancers with businesses and individuals seeking specialized skills. </h4>
                <div class="hero-button-container">
                    <a href="#"><HeroButton :title="'GET A FREELANCER'" /></a>
                    <a href="#"><HeroButton :title="'START TO EARN MONEY'" /></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeroButton from '@/components/HeroButton/HeroButton.components.vue'

export default defineComponent({
  name: 'HeroImage',
  components: {
    HeroButton,
  },
  props: {},
});

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './HeroImage.styles.scss';
</style>
