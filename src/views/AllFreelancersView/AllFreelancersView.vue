<template>
  <div class="body-section">
    <!-- SEARCH BAR -->
    <div class="search-container">
        <div class="container row">
            <div class="dropdown-container col-lg-5">
                <label for="field">Choose a field:</label>
                <select name="field" id="field">
                    <option value="all" selected >All</option>
                    <option value="option1">Field 1</option>
                    <option value="option1">Field 2</option>
                </select>
            </div>            
            <div class="dropdown-container col-lg-5">
                <label for="skill">Choose a skill:</label>
                <select name="skill" id="skill">
                    <option value="all" selected >All</option>
                    <option value="option1">skill 1</option>
                    <option value="option1">skill 2</option>
                </select>
            </div>            
            <div class="col-lg-2">
              <div class="button-container">
                <button class="search-button" type="button"><i class="fas fa-search"></i></button>
              </div>
            </div>
        </div>
    </div>    

    <!-- RESULTS -->
    <div class="container py-5">
      <div class="projects-container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">

        <!-- Loop through projects and display them -->
        
        <div class="card-container">
            <div class="card">
                <h4>  Freelancer </h4>

                <!-- skill -->
                <div class="skill-container">
                  <small class="badge">skill</small>
                  <small class="badge">skill</small>
                  <small class="badge">skill</small>
                  <small class="badge">skill</small>
                  <small class="badge">skill</small>
                  <small class="badge">skill</small>
                  <small class="badge">skill</small>
                  <small class="badge">skill</small>
                  <small class="badge">skill</small>
                  <small class="badge">skill</small>
                </div>

                <hr class="my-3">
                
                <div class="d-flex mb-3">
                    <p> Experience Year : </p>
                    <div class="ms-2 d-flex">5</div>
                </div>
                <div class="d-flex mb-3">
                    <p> Expected Payment (RM / hour) : </p>
                    <div class="ms-2 d-flex">5.00</div>
                </div>

                <hr class="my-3">

                <div class="language-container">
                  <p class="me-2"> Language : </p>
                  <div class="skill-container">
                    <small class="badge">Malay</small>
                    <small class="badge">English</small>
                  </div>
                </div>

                <div class="button-container my-3">
                  <a href="/project/:id">
                    <button>View</button>
                  </a>
                </div>
            </div>  
        </div>    


      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'AllFreelancersView',
  setup() {
  }
});
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './AllFreelancersView.styles.scss';
</style>
