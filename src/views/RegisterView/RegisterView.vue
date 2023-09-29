<template>
    <div class="body-section" id="register">
        <div class="login-card">
            <h2 class="mb-4 text-center">Create An Account</h2>

            <div class="form-container">
                <form  @submit.prevent="registerUser">
                    <div class="login-form-container">                  
                        <label for="text">Name:</label>
                        <input type="text" name="name" id="name" placeholder="First name" v-model="formData.name">
                    </div>

                    <div class="row login-form-container gy-5 gy-lg-0">
                        <div class="col-lg-6 px-0 px-lg-2">
                            <label>Gender:</label>
                            <div class="gender-checkbox">
                                <input type="radio" name="gender" id="male" checked v-model="formData.gender">
                                <label for="M" class="p-3">Male</label>
                                <input type="radio" name="gender" id="female" v-model="formData.gender">
                                <label for="F" class="p-3">Female</label>
                            </div>
                        </div>
                        <div class="col-lg-6 px-0 px-lg-2">
                            <label for="date_of_birth">Date of Birth:</label>
                            <input type="date" name="dob" id="date_of_birth" placeholder="Date of Birth" v-model="formData.dob">
                        </div>
                    </div>

                    <div class="login-form-container row gy-5 gy-lg-0">
                        <div class="col-lg-6 px-0 px-lg-2">
                            <label for="email">Email:</label>
                            <input type="email" name="email" id="email" placeholder="Email" v-model="formData.email">
                        </div>
                        <div class="col-lg-6 px-0 px-lg-2">
                            <label for="phone">Mobile Number:</label>
                            <input type="tel" name="phone" id="phone" placeholder="Mobile Number"  v-model="formData.phone">
                        </div>
                    </div>

                    <div class="login-form-container">               
                        <label for="password">Password:</label>
                        <input type="password" name="password" id="password" placeholder="Password" v-model="formData.password">
                    </div>

                    <div class="login-form-container">               
                        <label for="password">Confirm Password:</label>
                        <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" v-model="formData.confirm_password">
                    </div>

                    <div class="login-form-container tnc-checkbox">               
                        <input type="checkbox" name="tnc" id="tnc" v-model="formData.tnc">
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
import { defineComponent, onMounted, ref  } from 'vue'
import TncDisplay from'@/components/TncDisplay/TncDisplay.components.vue'
import {TncDisplayClasses} from '@/components/TncDisplay/export_classes'
import { useStore } from 'vuex';
import axios from 'axios';
import { useRouter } from 'vue-router'; 
import { AxiosError } from 'axios';
export default defineComponent({
    name: 'RegisterView',
    components: {
        TncDisplay,
    },
    setup () {
        let isTncToggle = ref<boolean>(false);
        let body:HTMLElement;
        let tncModal:HTMLElement;    
        let formData = ref({
            name: '',
            gender: 'M', 
            dob: '',
            email: '',
            phone: '',
            password: '',
            confirm_password: '',
            tnc: false
        });
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
        const store = useStore();
        const router = useRouter();
        const isFormValid = (): boolean => {
            // Check if any string fields are empty
            if (
                !formData.value.name ||
                !formData.value.gender ||
                !formData.value.dob ||
                !formData.value.email ||
                !formData.value.phone ||
                !formData.value.password ||
                !formData.value.confirm_password
            ) {
                alert('All fields must be filled out.');
                return false;
            }

            // Check if passwords match
            if (formData.value.password !== formData.value.confirm_password) {
                alert('Password and confirm password must match.');
                return false;
            }

            // Check if terms and conditions are accepted
            if (!formData.value.tnc) {
                alert('You must agree to the terms and conditions before proceeding.');
                return false;
            }

            return true;
        };
        const registerUser = async (): Promise<void> => {
            console.log( formData.value)
            if (!isFormValid()) {
                return;  // Stop the function if the form is not valid
            }

            const apiUrl = store.state.host_url + "user/register";  // Concatenate host_url with endpoint
            try {
        
                const response = await axios.post(apiUrl, formData.value);
                console.log(response.data);

                if (response.data.message === 'User registered successfully!') {
                    router.push('/login');  // <-- This navigates to the login route
                }
            }  catch (error) {
                const axiosError = error as AxiosError;
                if (axiosError.response && axiosError.response.status === 409) {
                    alert('User with this email is already registered.');
                } else {
                    alert('An error occurred. Please try again.');
                }
                
            }
        };

        onMounted(()=>{
            body = document.querySelector('body')!;     
            tncModal = document.querySelector('#tnc-display')!;
            store.commit('HostUrl', 'http://127.0.0.1:8000/api/');                   
        });

    
        return{
            toggleTnc,
            isTncToggle,
            updateTncStatus,
            formData,
            registerUser
        }
    },
    
});
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import '../LoginView/LoginView.styles.scss';
</style>