<template>
    <div class="body-section" id="forget-password">
        <div class="login-card">
            <h2 class="mb-4 text-center">Reset Password</h2>

            <div class="form-container">
                <form action="">
                    <div class="login-form-container">                  
                        <label for="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Email">
                    </div>

                    <div class="login-form-container text-center">
                        <button class="button-main login">Reset Password</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ForgetPasswordView',
    components: {},
});
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import '../LoginView/LoginView.styles.scss';
</style>