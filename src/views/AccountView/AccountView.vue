<template>
  <div class="body-section">
    <div class="container">
      <div class="my-5"><h2>My Account</h2></div>
      <hr>
      <div class="row">
        
        <div class="col-md-12">
          <h4>First Name:</h4>
          <input type="text" name="first_name" id="first_name" placeholder="First Name" value="John">
        </div>        
        <div class="col-md-12">
          <h4>Last Name:</h4>
          <input type="text" name="last_name" id="last_name" placeholder="Last Name" value="Doe">
        </div>        
        <div class="col-md-12">
          <h4>Mobile Number:</h4>
          <input type="tel" name="phone" id="phone" placeholder="Mobile Number" value="012-3456789">
        </div> 
        <div class="col-md-12">
          <h4>Email:</h4>
          <p>mail@mail.com</p>
        </div>     
        <div class="col-md-12">
          <h4>Gender:</h4>
          <p>Male</p>
        </div>        
        <div class="col-md-12">
          <h4>Date of Birth:</h4>
          <p>01 / 01 / 2000</p>
        </div>                

      </div>
      
      <div class="my-5 button-container">
        <button>Save Changes</button>
      </div>             

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AccountView',
  props: {},
  setup() {}
});

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './AccountView.styles.scss';
</style>
