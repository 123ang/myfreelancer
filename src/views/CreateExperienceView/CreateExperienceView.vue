<template>
    <div class="body-section" id="create-experience">
        <div class="container">
            <div class="card">
                <a class="back-button" href="javascript:history.back()"><i class="fas fa-chevron-left me-2"></i>Back</a>
                
                <h2 class="mb-5 text-center">{{ $t('message.add_work_experience') }}</h2>

                <div class="form-container">
                    <form @submit.prevent="addExperience">

                        <div class="row">

                            <!-- job title -->
                            <div class="col-12">
                                <div class="input-container">
                                <div class="login-form-container">
                                    <label for="job-title">{{ $t('message.job_title') }}:</label>
                                    <input v-model="experience.title" type="text" :placeholder="$t('message.job_title')">
                                </div>
                                </div>
                            </div>

                            <!-- company name -->
                            <div class="col-12">
                                <div class="input-container">
                                <div class="login-form-container">
                                    <label for="company-name">{{ $t('message.company_name') }}:</label>
                                    <input v-model="experience.company" type="text" :placeholder="$t('message.company_name')">
                                </div>
                                </div>
                            </div>

                            <!-- from period -->
                            <div class="col-6">
                                <div class="input-container">
                                    <div class="login-form-container">
                                        <label for="from-period">{{ $t('message.from_period') }}:</label>
                                        <input type="date" v-model="experience.from_period">
                                    </div>
                                </div>
                            </div>

                            <!-- to period -->
                            <div class="col-6">
                                <div class="input-container">
                                    <div class="login-form-container">
                                        <label for="to-period">{{ $t('message.to_period') }}:</label>
                                        <input type="date" v-model="experience.to_period" :disabled="experience.currently_work_here">
                                        <label for="is_current" class="d-flex align-items-center my-2" @click="toggleCurrentlyWorkHere">
                                            <div><input type="checkbox" v-model="experience.currently_work_here"></div>
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
                                        <textarea v-model="experience.description" rows="5"></textarea>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div class="submit-button">
                            <button class="button-main login" type="submit">{{$t('message.add')}}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';
interface Experience {
    user_id: number | null;
    title: string;
    company: string;
    from_period: Date | null;
    to_period: Date | null;
    currently_work_here: boolean;
    description: string;
}

export default defineComponent({
    name: 'CreateExperienceView',
    setup() {
        const store = useStore();
        const experience = ref<Experience>({
            user_id: store.state.user_id,
            title: '',
            company: '',
            from_period: null,
            to_period: null,
            currently_work_here: false,
            description: ''
        });

        const addExperience = async () => {
            if (!experience.value.title || !experience.value.company || !experience.value.from_period) {
                alert('Please fill in all the required fields.');
                return;
            }

            try {
                const apiUrl = store.state.host_url + "user-experience";
                const response = await axios.post(apiUrl, experience.value);

                if (response.data.message === 'Work experience added successfully.') {
                    alert(response.data.message);
                    Object.assign(experience.value, {
                        user_id: store.state.user_id,
                        title: '',
                        company: '',
                        from_period: null,
                        to_period: null,
                        currently_work_here: false,
                        description: ''
                    });
                } else {
                    alert('Error adding work experience: ' + (response.data.message || 'Unknown error'));
                }
            } catch (error) {
                alert('Error adding work experience.');
            }
        };

        const toggleCurrentlyWorkHere = () => {
            experience.value.currently_work_here = !experience.value.currently_work_here;
            if (experience.value.currently_work_here) {
                experience.value.to_period = null;
            }
        }

        return {
            experience,
            addExperience,
            toggleCurrentlyWorkHere
        };
    }
});
</script>

  

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import '../CreateProjectView/CreateProjectView.styles.scss';
  @import './CreateExperienceView.styles.scss';
</style>
