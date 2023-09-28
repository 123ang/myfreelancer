<template>
    <div class="body-section" id="register">
        <div class="login-card">
            <h2 class="mb-4 text-center">Create An Account</h2>

            <div class="form-container">
                <form action="">
                    <div class="login-form-container">                  
                        <label for="email">First Name:</label>
                        <input type="text" name="first_name" id="first_name" placeholder="First Name">
                    </div>

                    <div class="login-form-container">                  
                        <label for="email">Last Name:</label>
                        <input type="text" name="last_name" id="last_name" placeholder="Last Name">
                    </div>

                    <div class="row login-form-container gy-5 gy-lg-0">
                        <div class="col-lg-6 px-0 px-lg-2">
                            <label>Gender:</label>
                            <div class="gender-checkbox">
                                <input type="radio" name="gender" id="male" checked>
                                <label for="male" class="p-3">Male</label>
                                <input type="radio" name="gender" id="female" >
                                <label for="female" class="p-3">Female</label>
                            </div>
                        </div>
                        <div class="col-lg-6 px-0 px-lg-2">
                            <label for="date_of_birth">Date of Birth:</label>
                            <input type="date" name="date_of_birth" id="date_of_birth" placeholder="Mobile Number">
                        </div>
                    </div>

                    <div class="login-form-container row gy-5 gy-lg-0">
                        <div class="col-lg-6 px-0 px-lg-2">
                            <label for="email">Email:</label>
                            <input type="email" name="email" id="email" placeholder="Email">
                        </div>
                        <div class="col-lg-6 px-0 px-lg-2">
                            <label for="phone">Mobile Number:</label>
                            <input type="tel" name="phone" id="phone" placeholder="Mobile Number">
                        </div>
                    </div>

                    <div class="login-form-container">               
                        <label for="password">Password:</label>
                        <input type="password" name="password" id="password" placeholder="Password">
                    </div>

                    <div class="login-form-container">               
                        <label for="password">Confirm Password:</label>
                        <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password">
                    </div>

                    <div class="login-form-container tnc-checkbox">               
                        <input type="checkbox" name="tnc" id="tnc">
                        <label for="tnc" class="tnc-label">
                            TERM AND CONDITION 
                            <a href="#tnc" class="tnc-link" @click="toggleTnc">LINK</a>
                        </label>
                    </div>

                    <div class="login-form-container text-center">
                        <button class="button-main login">Register</button>
                    </div>
                </form>
            </div>

            <TncDisplay />

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import TncDisplay from'@/components/TncDisplay/TncDisplay.components.vue'
import {TncDisplayClasses} from '@/components/TncDisplay/export_classes'

export default defineComponent({
    name: 'RegisterView',
    components: {
        TncDisplay,
    },
    setup () {
        let isTncToggle = ref<boolean>(false);
        let body:HTMLElement;
        let tncModal:HTMLElement;    

        // toggle tnc modal
        const toggleTnc = ():void =>{            
            tncModal.classList.contains('active') ? isTncToggle.value = true : isTncToggle.value = false;

            if (!isTncToggle.value) {     
                tncModal.classList.add(TncDisplayClasses.active as string)
                body?.setAttribute('style', 'overflow: hidden');
            } else {
                tncModal.classList.remove('active');
                body?.removeAttribute('style');
            }            
        }        

        const updateTncStatus = ():void => {
            console.log();
                                    
        }

        onMounted(()=>{
            body = document.querySelector('body')!;     
            tncModal = document.querySelector('#tnc-display')!;                   
        })

        return{
            toggleTnc,
            isTncToggle,
            updateTncStatus
        }
    },
    
});
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import '../LoginView/LoginView.styles.scss';
</style>