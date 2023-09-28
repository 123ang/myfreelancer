<template>
  <div class="body-section">
    <div class="container">
        <div class="my-5"><h2>My Projects</h2></div>
        <hr>
        <div class="pb-4 pt-5">
            <div class="projects-container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">

                <!-- Project Card -->
                <div class="card-container">
                    <div class="card">
                        <h4> Project Title 1 </h4>
                        <div class="skill-container">
                            <small class="badge"> skill 1 </small>
                        </div>
                        <hr class="my-3">
                        <!-- Price -->
                        <div class="d-flex mb-3">
                            <p>Price: </p>
                            <div class="ms-2 d-flex">
                                <p>RM</p>
                                <p>100</p>
                            </div>
                        </div>
                        <!-- Bids -->
                        <div class="d-flex mb-3">
                            <p>Bids: </p>
                            <div class="ms-2 d-flex">3</div>
                        </div>
                        <div class="button-container my-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <a href="/project-view-1" class="button view">View</a>
                            <a href="#update" class="button update">Update</a>
                            <a href="#close" class="button close">Close</a>
                            <a href="#delete" class="button delete">Delete</a>
                        </div>
                    </div>  
                </div>    
                
                <!-- Create Project Card -->
                <div class="card-container create">
                  <a href="/create-project" class="card">
                    <div class="button">
                        <div><i class="fas fa-plus"></i></div>
                        <h4>Add Project</h4>
                    </div>
                  </a>
                </div>

            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyProject',
  props: {},
  setup() {}
});

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './MyProjectView.styles.scss';
</style>
