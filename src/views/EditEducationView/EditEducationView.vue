<template>
    <div class="body-section" id="edit-education">
        <div class="container">
            <div class="card">
                <a class="back-button" href="javascript:history.back()"><i class="fas fa-chevron-left me-2"></i>Back</a>
                
                <h2 class="mb-5 text-center">Edit Education</h2>

                <div class="form-container">
                    <form>
                        <div class="row">

                            <!-- Major -->
                            <div class="col-12">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="job-title">Major:</label>
                                        <input type="text" value="Major name">
                                    </div>
                                </div>
                            </div>

                            <!-- School -->
                            <div class="col-12">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="company-name">School:</label>
                                        <input type="text" value="Just A School">
                                    </div>
                                </div>
                            </div>

                            <!-- from period -->
                            <div class="col-6">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="from-period">From Period:</label>
                                        <input type="date" value="2023-10-02">
                                    </div>
                                </div>
                            </div>

                            <!-- to period -->
                            <div class="col-6">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="to-period">To Period:</label>
                                        <input type="date" id="to_period" value="2023-10-03">
                                    </div>
                                </div>
                            </div>

                            <!-- Description -->
                            <div class="col-12">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="description">Description (optional) :</label>
                                        <textarea id="description" name="description" rows="5"></textarea>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="submit-button">
                            <button class="button-main login" type="submit">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">

import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'EditEducationView',
  setup() {}
});

</script>

  

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import '../CreateProjectView/CreateProjectView.styles.scss';
  @import './EditEducationView.styles.scss';
</style>
