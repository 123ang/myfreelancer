<template>
  <div class="body-section">
    <div class="container">
        <div class="card">
            <h2>Freelancer Name</h2>
            <div class="d-flex align-items-center">
                <div class="d-flex align-items-center">
                  <i class="fas fa-mobile-alt"></i>
                  <div class="ms-2">012-3456789</div>
                </div>
                <div class="d-flex align-items-center ms-5">
                  <i class="fas fa-envelope"></i>
                  <div class="ms-2">mail@mail.com</div>
                </div>
            </div>

            <hr>

            <div class="content-container">
              <h6>Year Experience : </h6>       
              <p>5</p>    
            </div> 
            <div class="content-container">
              <h6>Expect payment (RM / hour) :</h6>       
              <p>0.00</p>    
            </div> 
            <div class="content-container split">
              <!-- <h6>Other comments :</h6> -->
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non felis sapien. Donec tincidunt, felis et ornare sagittis, ipsum lectus suscipit tellus, eu sodales nunc ligula eget magna. Sed fringilla turpis sit amet lacus laoreet feugiat. Integer vel eros non odio consequat molestie in nec augue. Nullam sit amet pellentesque.</p>    
            </div> 

            <hr>

            <h5 class="mb-4">Expertise Skills</h5>
            <div class="content-container skill-container">
              <h6 class="skill-name">Skill 1 : </h6>
              <h6 class="d-flex gap-2 ms-2">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </h6>
            </div>
            
            <hr>

            <h5 class="mb-4">Work Experience</h5>
            <div class="content-container">
              <h6>Job Position | Company Sdn Bhd</h6>
            </div>
            <div class="content-container split">
              <p>TimeFrom - TimeTo</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non felis sapien. Donec tincidunt, felis et ornare sagittis, ipsum lectus suscipit tellus, eu sodales nunc ligula eget magna. Sed fringilla turpis sit amet lacus laoreet feugiat. Integer vel eros non odio consequat molestie in nec augue. Nullam sit amet pellentesque.</p>    
            </div>

            <hr>

            <h5 class="mb-4">Eduction</h5>
            <div class="content-container">
              <h6>Major | School Name</h6>
            </div>
            <div class="content-container split">
              <p>TimeFrom - TimeTo</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non felis sapien. Donec tincidunt, felis et ornare sagittis, ipsum lectus suscipit tellus, eu sodales nunc ligula eget magna. Sed fringilla turpis sit amet lacus laoreet feugiat. Integer vel eros non odio consequat molestie in nec augue. Nullam sit amet pellentesque.</p>    
            </div>

        </div>     

        <div class="back-button">
            <a href="javascript:history.back()">{{ $t('message.back') }}</a>
        </div>           
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FreelancerView',
  setup() {}
});

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './FreelancerView.styles.scss';
</style>
