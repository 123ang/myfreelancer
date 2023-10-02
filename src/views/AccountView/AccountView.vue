<template>
  <div class="body-section">
    <div class="container">
      <div v-if="userProfile">
        <div class="my-5">
          <h2>{{ $t('message.account') }}</h2>
        </div>
        <hr>
        <div class="row">
          <div class="col-md-12">
            <h4>{{ $t('message.Name') }}</h4>
            <input type="text" name="name" id="name" :placeholder="$t('message.Name')" :value="userProfile.name">
          </div>

          <div class="col-md-12">
            <h4>{{ $t('message.phone') }}</h4>
            <input type="tel" name="phone" id="phone" :placeholder="$t('message.phone')" :value="userProfile.phone">
          </div>

          <div class="col-md-12">
            <h4>{{ $t('message.Email') }}</h4>
            <p>{{ userProfile.email }}</p>
          </div>

          <div class="col-md-12">
            <h4>{{ $t('message.Gender') }}</h4>
            <p>{{ userProfile.gender }}</p>
          </div>

          <div class="col-md-12">
            <h4>{{ $t('message.Date of Birth') }}</h4>
            <p>{{ userProfile.dob }}</p>
          </div>
        </div>

        <div class="my-5 button-container">
          <button>{{ $t('message.saveChanges') }}</button>
        </div>
      </div>

      <div v-else>
        <p>{{ $t('message.loadingProfile') }}</p>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';

interface UserProfile {
  name: string;
  phone: string;
  email: string;
  gender: string;
  dob: string; // Adjust if the returned format is different
  // Add other fields if needed
}

export default defineComponent({
  name: 'AccountView',
  setup() {
    const store = useStore();
    const userProfile = ref<UserProfile | null>(null);
    
    onMounted(async () => {
      try {
        const url = `${store.state.host_url}user/profile/${store.state.user_id}`;
        console.log(url)
        const response = await axios.post(url);
        userProfile.value = response.data.user;
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    });

    return {
      userProfile
    };
  }
});
</script>


<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './AccountView.styles.scss';
</style>
