<template>
    <div class="body-section" id="edit-experience">
        <div class="container">
            <div class="card">
                <a class="back-button" href="javascript:history.back()"><i class="fas fa-chevron-left me-2"></i>Back</a>

                <h2 class="mb-5 text-center">Edit Work Experience</h2>

                <div class="form-container">
                    <form>
                        <div class="row">

                            <!-- job title -->
                            <div class="col-12">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="job-title">Job Title:</label>
                                        <input type="text" value="Job Title">
                                    </div>
                                </div>
                            </div>

                            <!-- company name -->
                            <div class="col-12">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="company-name">Company Name:</label>
                                        <input type="text" value="Company Sdn Bhd">
                                    </div>
                                </div>
                            </div>

                            <!-- from period -->
                            <div class="col-6">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="from-period">From Period:</label>
                                        <input type="date" value="2023-10-04">
                                    </div>
                                </div>
                            </div>

                            <!-- to period -->
                            <div class="col-6">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="to-period">To Period:</label>
                                        <input type="date" id="to_period" value="">
                                        <label for="is_current" class="d-flex align-items-center my-2" @click="isCurrentChecked">
                                            <div>
                                                <input type="checkbox" id="is_current" checked>
                                            </div>
                                            <div class="ms-2">until current</div>
                                        </label>
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

import { defineComponent, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'EditExperienceView',
  setup() {
    let toPeriod:HTMLInputElement;
    let isCurrent:HTMLInputElement;
    
    // check is until_current checkbox checked
    const isCurrentChecked = ():void => {
        if (isCurrent?.checked) {
            toPeriod.setAttribute('type', 'text')
            toPeriod.setAttribute('disabled', 'false');
            toPeriod.value = 'current'            
        } else {
            toPeriod.setAttribute('type', 'date')
            toPeriod.removeAttribute('disabled')
            toPeriod.value = '';
        }
    }

    onMounted(()=>{
        toPeriod = document.querySelector('#to_period')!;
        isCurrent = document.querySelector('#is_current')!;
        isCurrentChecked()        
    }) 

    return {
        isCurrentChecked
    }
  }
});

</script>

  

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import '../CreateProjectView/CreateProjectView.styles.scss';
  @import './EditExperienceView.styles.scss';
</style>
