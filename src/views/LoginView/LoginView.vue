<template>
    <div class="body-section" id="login">
        <div class="login-card">
            <h2 class="mb-4 text-center">LOGIN</h2>

            <div class="form-container">
                <form action="">
                    <div class="login-form-container">                  
                        <label for="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Email">
                    </div>

                    <div class="login-form-container">               
                        <label for="password">Password:</label>
                        <div class="password-input">
                            <div class="show-password"><i class="bi bi-eye-fill"></i></div>
                            <input type="password" name="password" id="password" placeholder="Password">
                        </div>
                        <div class="remember-me">                    
                            <label><input type="checkbox" name="remember" id="remember">Remember Me</label>
                        </div>
                    </div>

                    <div class="login-form-container text-center">
                        <button class="button-main login">Login</button>
                    </div>
                </form>

                <div class="login-form-footer">
                    <div class="link">                  
                        <a href="/forget-password">Forget Password?</a>                  
                    </div>
                    <div class="link">
                        <a href="/register">Create an Account</a>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
    name: 'LoginView',
    components: {},
});
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './LoginView.styles.scss';
</style>