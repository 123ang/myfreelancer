<template>
  <div class="body-section">
    <div class="container">
        <div class="card">
            <h2>{{ profile.user.name }}</h2>
            <div class="d-flex align-items-center">
                <div class="d-flex align-items-center">
                  <i class="fas fa-mobile-alt"></i>
                  <div class="ms-2">{{ profile.user.phone }}</div>
                </div>
                <div class="d-flex align-items-center ms-5">
                  <i class="fas fa-envelope"></i>
                  <div class="ms-2">{{ profile.user.email }}</div>
                </div>
            </div>

            <hr>

            <div class="content-container">
              <h6>{{ $t('message.yearExperience') }} : </h6>
              <p>{{ profile.user.year_experience }}</p>
            </div>
            <div class="content-container">
              <h6>{{ $t('message.expectedPayment') }} : </h6>
              <p>{{ profile.user.wage_per_hour }}</p>
            </div>
            <div class="content-container split">
              <p>{{ profile.user.cover_note }}</p>
            </div>

            <hr>

            <h5 class="mb-4">{{ $t('message.expertiseSkills') }}</h5>
            <div class="content-container skill-container" v-for="skill in profile.skills" :key="skill.ID">
                <h6 class="skill-name">{{ skill.skill_name }} : </h6>
                <h6 class="d-flex gap-2 ms-2">
                    <i 
                        v-for="n in 5" 
                        :key="n" 
                        :class="[n <= skill.skill_proficiency ? 'fas' : 'far', 'fa-star']">
                    </i>
                </h6>
            </div>


            <hr>

            <h5 class="mb-4">{{ $t('message.workExperience') }}</h5>
            <div v-for="experience in profile.experiences" :key="experience.ID" class="content-container split">
              <h6>{{ experience.title }} | {{ experience.company }}</h6>
              <p>{{ experience.from_period }}  <b class="mx-2">-</b>  {{ experience.to_period }}</p>
              <p>{{ experience.description }}</p>
            </div>

            <hr>

            <h5 class="mb-4">{{ $t('message.education_level') }}</h5>
            <div v-for="education in profile.educations" :key="education.ID" class="content-container split">
              <h6>{{ getEducationLevel(education.education_level) }} | {{ education.venue_of_education }}</h6>
              <p>Major: {{ education.major }}</p>
              <p>{{ education.from_period }} <b class="mx-2">-</b> {{ education.to_period }}</p>
              <p>{{ education.description }}</p>
            </div>
        </div>

        <div class="back-button">
            <a href="javascript:history.back()">{{ $t('message.back') }}</a>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';

interface UserProfile {
  name: string;
  phone: string;
  email: string;
  gender: string;
  dob: string;
  year_experience: number;
  wage_per_hour:number;
  cover_note:string;
  skills: Skill[];
  educations: Education[];
  experiences: Experience[];
}

interface Skill {
  ID: number;
  skill_name: string;
  skill_proficiency: number;
}

interface Experience {
  ID: number;
  title: string;
  company: string;
  from_period: string;
  to_period: string;
  description: string;
  currently_work_here: string | number; 
  status: string | number; 
}

interface Education {
  ID: number;
  education_level: string;
  year_of_education: number | null;
  venue_of_education: string;
  major: string;
  from_period: string;
  to_period: string;
  description: string;
  status: string | number; 
}

export default defineComponent({
  name: 'FreelancerView',
  props: {
    freelancer_id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore();
    const { t } = useI18n();
    const profile = ref<{ 
      user: UserProfile, 
      skills: Skill[], 
      educations: Education[], 
      experiences: Experience[] 
    }>({
      user: {} as UserProfile, 
      skills: [], 
      educations: [], 
      experiences: []
    });

    onMounted(async () => {
      const url = `${store.state.host_url}user/profile/${props.freelancer_id}`;
      console.log(url)
      try {
        const response = await axios.post(url);
        profile.value = {
          user: response.data.user,
          skills: response.data.skills,
          educations: response.data.education, // Modified to match the backend's structure
          experiences: response.data.experience // Modified to match the backend's structure
        };
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    });

    function getEducationLevel(level: string): string {
      const educationLevels: { [key: string]: string } = {
        'primary_school': t('message.primarySchool'),
        'middle_school': t('message.middleSchool'),
        'high_school': t('message.highSchool'),
        'vocational': t('message.vocational'),
        'diploma': t('message.diploma'),
        'associate': t('message.associateDegree'),
        'bachelor': t('message.bachelorsDegree'),
        'postgraduate': t('message.postgraduateDiploma'),
        'masters': t('message.mastersDegree'),
        'phd': t('message.doctorate'),
        'professional': t('message.professionalQualification')
      };
      
      return educationLevels[level] || level;
    }

    return {
      profile,
      getEducationLevel
    };
  }
});
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './FreelancerView.styles.scss';
</style>
