<template>
    <div class="body-section" id="create-other">
        <div class="container">
            <div class="card">
                <a class="back-button" href="javascript:history.back()"><i class="fas fa-chevron-left me-2"></i>Back</a>
                
                <h2 class="mb-5 text-center">Add Other Information</h2>

                <div class="form-container">
                    <form>
                        <div class="row">

                            <!-- Year Experience -->
                            <div class="col-12">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="job-title">Year Experience:</label>
                                        <input type="number" >
                                    </div>
                                </div>
                            </div>

                            <!-- Expect payment -->
                            <div class="col-12">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="company-name">Expect payment: (RM / hour)</label>
                                        <input type="number" min="10" value="10">
                                    </div>
                                </div>
                            </div>

                            <!-- Portfolio -->
                            <div class="col-12">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="portfolio">Portfolio (optional) :</label>
                                        <input type="text" id="portfolio">
                                    </div>
                                </div>
                            </div>

                            <!-- Description -->
                            <div class="col-12">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="description">Other Comments (optional) :</label>
                                        <textarea id="description" name="description" rows="5"></textarea>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="submit-button">
                            <button class="button-main login" type="submit">Add</button>
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
  name: 'CreateOthersView',
  setup() {}
});

</script>

  

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import '../CreateProjectView/CreateProjectView.styles.scss';
  @import './CreateOthersView.styles.scss';
</style>
