<template>
    <div class="upload-project-section align-items-center d-flex">
        <div class="container">
            <div class="row w-100 align-items-center d-flex">
                <div class="col-lg-8 text-container my-2">
                    <h4>{{$t('message.postYourProject')}}</h4>
                </div>
                <div class="col-lg-4 d-flex project-button my-2">
                    <a @click="redirectTo" href="javascript:void(0)" class="">
                        <div class="button">
                            <h5>{{$t('message.uploadProject')}}</h5>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'; 

export default defineComponent({
  name: 'UploadProject',
  components: {},
  props: {},
  setup() {
    const store = useStore(); 
    const router = useRouter(); 

    const redirectTo = () => {
      if (store.state.is_login) {
        router.push('/create-project');
      } else {

        router.push('/login');
      }
    }

    return {
      redirectTo // make the method available to the template
    }
  }
});

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './UploadProject.styles.scss';
</style>
