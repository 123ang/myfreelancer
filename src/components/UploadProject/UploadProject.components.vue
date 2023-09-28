<template>
    <div class="upload-project-section align-items-center d-flex">
        <div class="container">
            <div class="row w-100 align-items-center d-flex">
                <div class="col-lg-8 text-container my-2">
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                </div>
                <div class="col-lg-4 d-flex project-button my-2">
                    <a href="#" class="">
                        <div class="button">
                            <h5>UPLOAD PROJECT</h5>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UploadProject',
  components: {},
  props: {},
});

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './UploadProject.styles.scss';
</style>
