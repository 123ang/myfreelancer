<template>
    <div class="body-section" id="edit-experience">
      <div class="container">
        <div class="card">
          <a class="back-button" href="javascript:history.back()">
            <i class="fas fa-chevron-left me-2"></i>{{ $t('message.back') }}
          </a>
  
          <h2 class="mb-5 text-center">{{ $t('message.editWorkExperience') }}</h2>
  
          <div class="form-container">
            <form @submit.prevent="updateExperience"> <!-- prevent default submission -->
              <div class="row">
  
                <!-- job title -->
                <div class="col-12">
                  <div class="input-container">
                    <div class="login-form-container">
                      <label for="job-title">{{ $t('message.job_title') }}</label>
                      <input type="text" v-model="experience.title"> <!-- bind value -->
                    </div>
                  </div>
                </div>
  
                <!-- company name -->
                <div class="col-12">
                  <div class="input-container">
                    <div class="login-form-container">
                      <label for="company-name">{{ $t('message.company_name') }}</label>
                      <input type="text" v-model="experience.company"> <!-- bind value -->
                    </div>
                  </div>
                </div>
  
                <!-- from period -->
                <div class="col-6">
                  <div class="input-container">
                    <div class="login-form-container">
                      <label for="from-period">{{ $t('message.from_period') }}</label>
                      <input type="date" v-model="experience.from_period"> <!-- bind value -->
                    </div>
                  </div>
                </div>
  
                <!-- to period -->
                <div class="col-6">
                  <div class="input-container">
                    <div class="login-form-container">
                      <label for="to-period">{{ $t('message.to_period') }}</label>
                      <input type="date" v-model="experience.to_period" :disabled="isCurrentlyWorkingHere"> <!-- bind value and disable if is_current is true -->
                      <label for="is_current" class="d-flex align-items-center my-2" @click="isCurrentChecked">
                        <div>
                          <input type="checkbox" v-model="isCurrentlyWorkingHere"> <!-- bind value -->
                        </div>
                        <div class="ms-2">{{ $t('message.currently_work_here') }}</div>
                      </label>
                    </div>
                  </div>
                </div>
  
                <!-- Description -->
                <div class="col-12">
                  <div class="input-container">
                    <div class="login-form-container">
                      <label for="description">{{ $t('message.description') }} {{ $t('message.optional') }}:</label>
                      <textarea id="description" v-model="experience.description" rows="5"></textarea> <!-- bind value -->
                    </div>
                  </div>
                </div>
  
              </div>
  
              <div class="submit-button">
                <button class="button-main login" type="submit">{{ $t('message.saveChanges') }}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  

<script lang="ts">
import { defineComponent, ref, onMounted,computed  } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
name: 'EditExperienceView',
setup() {
    const route = useRoute();
    const experienceId = route.params.id; // Capture the ID from the URL
    const store = useStore();
    const experience = ref({
        title: '', 
        company: '',
        from_period: '',
        to_period: '',
        description: '',
        currently_work_here: '1'
    });
    const apiUrl = store.state.host_url + `user-experience/${experienceId}`; 
    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        
        return `${year}-${month}-${day}`;
    };

    const updateExperience = async () => {
        try {
           
            const response = await axios.post(apiUrl, experience.value);

            if (response.data.success) {
            alert('Experience updated successfully');
            } else {
            alert('Error updating experience: ' + response.data.message);
            }
        } catch (error) {
            alert('Network error. Please try again.');
        }
        };

        const isCurrentChecked = () => {
        if (experience.value.currently_work_here) {
            experience.value.to_period = getCurrentDate();
        } else {
            experience.value.to_period = '';  // Or set a default value if needed
        }
    };
    
    const isCurrentlyWorkingHere = computed({
      get: () => experience.value.currently_work_here === '1',
      set: (newValue) => {
        experience.value.currently_work_here = newValue ? '1' : '0';
      }
    });
    onMounted(async () => {
        try {

            const response = await axios.get(apiUrl);
            
            if (response.data) {
                experience.value = response.data.experience;
            } else {
                console.error('Error fetching experience data:', response.data.message);
            }
        } catch (error) {
            console.error('Network error fetching experience:', error);
        }
    });

    return {
        experience,
        isCurrentChecked,
        updateExperience,
        isCurrentlyWorkingHere
    };
}
});
</script>

  

  

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import '../CreateProjectView/CreateProjectView.styles.scss';
  @import './EditExperienceView.styles.scss';
</style>
