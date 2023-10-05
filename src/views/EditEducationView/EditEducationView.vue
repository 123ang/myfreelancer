<template>
    <div class="body-section" id="edit-education">
        <div class="container">
            <div class="card">
                <a class="back-button" href="javascript:history.back()"><i class="fas fa-chevron-left me-2"></i>{{ $t('message.back') }}</a>
                
                <h2 class="mb-5 text-center">{{ $t('message.editEducation') }}</h2>

                <div class="form-container">
                    <form @submit.prevent="updateEducation">
                        <div class="row">

                            <!-- Major -->
                            <div class="col-12">
                                <div class="input-container">
                                    <div class="login-form-container">
                                        <label for="major">{{ $t('message.major') }}:</label>
                                        <input id="major" type="text" v-model="education.major">
                                    </div>
                                </div>
                            </div>
                            <!-- education level -->
                            <div class="col-12">
                                    <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="education_level">{{ $t('message.education_level') }}:</label>
                                        <select id="education_level" v-model="education.education_level">
                                            <option value="primary_school">{{ $t('message.primarySchool') }}</option>
                                            <option value="middle_school">{{ $t('message.middleSchool') }}</option>
                                            <option value="high_school">{{ $t('message.highSchool') }}</option>
                                            <option value="vocational">{{ $t('message.vocational') }}</option>
                                            <option value="diploma">{{ $t('message.diploma') }}</option>
                                            <option value="associate">{{ $t('message.associateDegree') }}</option>
                                            <option value="bachelor">{{ $t('message.bachelorsDegree') }}</option>
                                            <option value="postgraduate">{{ $t('message.postgraduateDiploma') }}</option>
                                            <option value="masters">{{ $t('message.mastersDegree') }}</option>
                                            <option value="phd">{{ $t('message.doctorate') }}</option>
                                            <option value="professional">{{ $t('message.professionalQualification') }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!-- School -->
                            <div class="col-12">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="school">{{ $t('message.venue_of_education') }}:</label>
                                        <input id="school" type="text" v-model="education.venue_of_education">
                                    </div>
                                </div>
                            </div>

                            <!-- from period -->
                            <div class="col-6">
                                <div class="input-container">
                                    <div class="login-form-container">
                                        <label for="from-period">{{ $t('message.from_period') }}:</label>
                                        <input id="from-period" type="date" v-model="education.from_period">
                                    </div>
                                </div>
                            </div>

                            <!-- to period -->
                            <div class="col-6">
                                <div class="input-container">
                                    <div class="login-form-container">
                                        <label for="to-period">{{ $t('message.to_period') }}:</label>
                                        <input id="to-period" type="date" v-model="education.to_period">
                                    </div>
                                </div>
                            </div>

                            <!-- Description -->
                            <div class="col-12">
                                <div class="input-container">
                                    <div class="login-form-container">
                                        <label for="description">{{ $t('message.description') }} {{ $t('message.optional') }}:</label>
                                        <textarea id="description" v-model="education.description" rows="5"></textarea>
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
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import axios from 'axios';  // Assuming you are using axios for HTTP requests

export default defineComponent({
  name: 'EditEducationView',
  
  setup() {
    const route = useRoute();
    const store = useStore();
    const education = ref({
      major: '',
      venue_of_education: '',
      from_period: '',
      to_period: '',
      description: '',
      education_level: ''
    });
    const apiUrl = store.state.host_url +  `user-education/${route.params.id}`;

    onMounted(async () => {
      try {
        const response = await axios.get(apiUrl);
        if (response.data) {
          education.value = response.data.education;
        } else {
          console.error('Error fetching education data:', response.data.message);
        }
      } catch (error) {
        console.error('Network error fetching education:', error);
      }
    });

    const updateEducation = async () => {
      try {
        const response = await axios.post(apiUrl, education.value);
        if (response.data.success) {
          alert('Education updated successfully');
        } else {
          alert('Error updating education: ' + response.data.message);
        }
      } catch (error) {
        alert('Network error. Please try again.');
      }
    };

    return {
      education,
      updateEducation
    };
  }
});
</script>


  

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import '../CreateProjectView/CreateProjectView.styles.scss';
  @import './EditEducationView.styles.scss';
</style>
