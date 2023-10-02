<template>
  <div id="about-us">
    <div class="container">
        <div class="content-container">
            <h2>{{ $t('message.aboutTitle') }}</h2>
            <p>
                {{ $t('message.aboutParagraph1') }}
            </p>
            <p>
                {{ $t('message.aboutParagraph2') }}
            </p>
            <p>
                {{ $t('message.aboutParagraph3') }}
            </p>
            <p>
                {{ $t('message.aboutParagraph4') }}
            </p>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutUs',
  props: {},
  setup() {}
});

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './AboutUs.styles.scss';
</style>
