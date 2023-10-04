<template>
  <div class="body-section">
    <div class="container">
        <div class="card">
            <h2>Freelancer Name</h2>

        </div>     



        <div class="back-button">
            <a href="javascript:history.back()">{{ $t('message.back') }}</a>
        </div>           
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FreelancerView',
  setup() {}
});

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './FreelancerView.styles.scss';
</style>
