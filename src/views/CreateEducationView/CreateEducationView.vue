<template>
    <div class="body-section" id="create-education">
        <div class="container">
            <div class="card">
                <a class="back-button" href="javascript:history.back()"><i class="fas fa-chevron-left me-2"></i>{{ $t('message.back') }}</a>
                
                <h2 class="mb-5 text-center">{{ $t('message.add_education') }}</h2>

                <div class="form-container">
                    <form @submit.prevent="addEducation">
                        <div class="row">
                             <!-- education level -->
                            <div class="col-12">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="education_level">{{ $t('message.education_level') }}:</label>
                                        <select v-model="education.education_level" id="education-level">
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
                            <!-- venue_of_education -->
                            <div class="col-12">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="venue_of_education">{{ $t('message.venue_of_education') }}:</label>
                                        <input id="venue_of_education" v-model="education.venue_of_education" type="text" :placeholder="$t('message.venue_of_education')">
                                    </div>
                                </div>
                            </div>

                            <!-- from period -->
                            <div class="col-6">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="from-period">{{ $t('message.from_period') }}:</label>
                                        <input id="from-period" type="date" v-model="education.from_period" >
                                    </div>
                                </div>
                            </div>

                            <!-- to period -->
                            <div class="col-6">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="to-period">{{ $t('message.to_period') }}:</label>
                                        <input id="to-period" type="date" v-model="education.to_period" >
                                    </div>
                                </div>
                            </div>

                            <!-- Major -->
                            <div class="col-12">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="major">{{ $t('message.major') }} {{ $t('message.optional') }}:</label>
                                        <input id="major" v-model="education.major" type="text" :placeholder="$t('message.major')">
                                    </div>
                                </div>
                            </div>

                            <!-- Description -->
                            <div class="col-12">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="description">{{ $t('message.description') }} {{ $t('message.optional') }}:</label>
                                        <textarea v-model="education.description" id="description" name="description" rows="5"></textarea>
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
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';  // Assuming you're using Vuex for state management

interface Education {
    user_id: number;
    venue_of_education: string; 
    from_period: Date | null;
    to_period: Date | null;
    major: string;
    description: string;
    education_level: string;

}

export default defineComponent({
    name: 'CreateEducationView',
    setup() {
        const store = useStore();
        const education = ref<Education>({
            user_id: store.state.user_id,  // Assuming user_id is stored in Vuex
            venue_of_education: '',
            from_period: null,
            to_period: null,
            major: '',
            description: '',
            education_level: '',
        });
        const apiUrl = store.state.host_url + "user-education";
        const addEducation = async () => {
            try {
                console.log(education.value)
                const response = await axios.post(apiUrl, education.value);

                if (response.status === 201) {
                    alert("Education added successfully");
                    education.value = {
                        user_id: store.state.user_id,  
                        venue_of_education: '',
                        from_period: null,
                        to_period: null,
                        major: '',
                        description: '',
                        education_level: '',
                    };

                } else {
                    alert("Error adding education");
                }
            } catch (error) {
                alert((error as Error).message);
            }
        }

        return {
            education,
            addEducation
        };
    }
});
</script>


  

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import '../CreateProjectView/CreateProjectView.styles.scss';
  @import './CreateEducationView.styles.scss';
</style>
