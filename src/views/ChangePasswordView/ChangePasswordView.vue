<template>
    <div class="body-section" id="forget-password">
        <div class="login-card">
            <h2 class="mb-4 text-center">{{ $t('message.change_password') }}</h2>

            <div class="form-container">
                <form @submit.prevent="handleChangePassword">
                    <div class="login-form-container">                  
                        <label for="oldPassword">{{ $t('message.oldPassword') }}</label>
                        <input v-model="oldPassword" type="password" :placeholder="$t('message.oldPassword')">
                    </div>

                    <div class="login-form-container">                  
                        <label for="newPassword">{{ $t('message.newPassword') }}</label>
                        <input v-model="newPassword" type="password" :placeholder="$t('message.newPassword')">
                    </div>

                    <div class="login-form-container">                  
                        <label for="confirmPassword">{{ $t('message.confirmNewPassword') }}</label>
                        <input v-model="confirmPassword" type="password" :placeholder="$t('message.confirmNewPassword')">
                    </div>

                    <div class="login-form-container text-center">
                        <button class="button-main login" type="submit">{{ $t('message.change_password') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';
import axios from 'axios';

export default defineComponent({
    name: 'ChangePasswordView',
    setup() {
        const router = useRouter();
        const store = useStore();
        const oldPassword = ref('');
        const newPassword = ref('');
        const confirmPassword = ref('');

        const handleChangePassword = async () => {
            if (newPassword.value !== confirmPassword.value) {
                alert('New password and confirm password do not match!');
                return;
            }

            try {
                const apiUrl = store.state.host_url + "user/change-password";  // Concatenate host_url with endpoint
         
                const response = await axios.post(apiUrl, {
                    old_password: oldPassword.value,
                    new_password: newPassword.value,
                    user_id: store.state.user_id
                });


                if (response.data.success) {
                    alert('Password changed successfully');
                    router.push('/my-account');
                } else {
                    alert(response.data.message); // This will display 'Old password does not match' or any other error from the backend
                }
            } catch (error) {
                alert('Network error or server issue. Please try again.');
            }
        };

        return {
            oldPassword,
            newPassword,
            confirmPassword,
            handleChangePassword
        };
    }
});
</script>


<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import '../LoginView/LoginView.styles.scss';
</style>
