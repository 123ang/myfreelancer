<template>
    <div class="body-section" id="forget-password">
        <div class="login-card">
            <h2 class="mb-4 text-center">Reset Password</h2>

            <div class="form-container">
                <form @submit.prevent="resetPassword">
                    <div class="login-form-container">                  
                        <label for="email">Email:</label>
                        <input type="email" v-model="email" placeholder="Email">
                    </div>

                    <div class="login-form-container text-center">
                        <button class="button-main login" type="submit">Reset Password</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios, { AxiosError } from 'axios';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'ForgetPasswordView',
    setup() {
        const email = ref('');
        const router = useRouter();
        const store = useStore();

        const resetPassword = async () => {
            const apiUrl = store.state.host_url + "user/password-reset"; // Assuming the endpoint is user/reset-password
            console.log(email.value)
            try {
                const response = await axios.post(apiUrl, { email: email.value });
                console.log(response.data);

                if (response.data.message === 'New password sent to email') {
                    alert('Please check your email');
                    router.push('/login');
                } else {
                    alert('An error occurred. Please try again later.');
                }
            } catch (error) {
               
                alert('Email is not registered, please register');
                router.push('/register');
            
            }
        };

        return { email, resetPassword };
    }
});
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import '../LoginView/LoginView.styles.scss';
</style>
