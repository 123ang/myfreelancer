<template>
    <div class="body-section" id="login">
        <div class="login-card">
            <h2 class="mb-4 text-center">{{ $t('message.login') }}</h2>

            <div class="form-container">
                <form @submit.prevent="handleLogin">
                    <div class="login-form-container">                  
                        <label for="email">{{ $t('message.Email') }}:</label>
                        <input type="email" v-model="email" name="email" id="email" :placeholder="$t('message.Email')">
                    </div>

                    <div class="login-form-container">               
                        <label for="password">{{ $t('message.Password') }}:</label>
                        <div class="password-input">
                            <input type="password" v-model="password" name="password" id="password" :placeholder="$t('message.Password')">
                        </div>
                        <div class="remember-me">                    
                            <label><input type="checkbox" v-model="remember" name="remember" id="remember">{{ $t('message.rememberMe') }}</label>
                        </div>
                    </div>

                    <div class="login-form-container text-center">
                        <button class="button-main login" type="submit">{{ $t('message.login') }}</button>
                    </div>
                </form>

                <div class="login-form-footer">
                    <div class="link">                  
                        <a href="/forget-password">{{ $t('message.Forget Password?') }}</a>                  
                    </div>
                    <div class="link">
                        <a href="/register">{{ $t('message.Create an Account') }}</a>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted  } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
import { useRouter } from 'vue-router'; 

export default defineComponent({
    name: 'LoginView',
    setup() {
        const store = useStore();
        const email = ref('');
        const password = ref('');
        const remember = ref(false);
        const router = useRouter();
        onMounted(() => {
            store.commit('HostUrl', 'https://backend.myfreelancer.com.my/api/');      
            store.commit('IsLogin', false);
            console.log(store.state.remember_boolean)
            if (store.state.remember_boolean) {
                email.value = store.state.remember_username;
                password.value = store.state.remember_password;
                remember.value = true;  // To auto-check the 'Remember Me' checkbox
            }
        });

        const handleLogin = async () => {
            console.log(email.value)
            console.log(password.value)
            try {
                const response = await axios.post(store.state.host_url + 'user/login', {
                    email: email.value,
                    password: password.value
                });
                console.log(response.data)
                if (response.data.message && response.data.message === 'Login successful!') {
                    store.commit('IsLogin', true);
                    store.commit('Username', response.data.user.email);  // Assuming that the response contains the email
                    store.commit('UserID', response.data.user.ID);  // Assuming that the response contains the user ID
                    
                    // If the "Remember Me" checkbox is ticked, save the details
                    if (remember.value) {
                        store.commit('RememberBoolean', true);
                        store.commit('RememberUsername', email.value);
                        store.commit('RememberPassword', password.value);
                    } else {
                        store.commit('RememberBoolean', false);
                        store.commit('RememberUsername', '');
                        store.commit('RememberPassword', '');
                    }
                    router.push('/'); 
                } else if(response.data.error) {
                    alert(response.data.error); // This will show the specific error message
                } else {
                    alert('Login failed!');
                }
            } catch (error) {
                console.error('Error logging in:', error);
                alert('An error occurred while logging in. Please try again.');
            }
        }

        return {
            email,
            password,
            remember,
            handleLogin
        };
    }
});
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/global.styles.scss';
    @import './LoginView.styles.scss';
</style>