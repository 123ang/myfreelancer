<template>
    <div class="body-section" id="forget-password">
        <div class="login-card">
            <h2 class="mb-4 text-center">Change Password</h2>

            <div class="form-container">
                <form>
                    <div class="login-form-container">                  
                        <label for="email">Old Password</label>
                        <input type="password" placeholder="Old Password">
                    </div>

                    <div class="login-form-container">                  
                        <label for="email">New Password</label>
                        <input type="password" placeholder="New Password">
                    </div>

                    <div class="login-form-container">                  
                        <label for="email">Confirm New Password</label>
                        <input type="password" placeholder="Confirm New Password">
                    </div>

                    <div class="login-form-container text-center">
                        <button class="button-main login" type="submit">Change Password</button>
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

export default defineComponent({
    name: 'ChangePasswordView',
    setup() {}
});
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import '../LoginView/LoginView.styles.scss';
</style>
