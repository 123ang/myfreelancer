<template>
  <div class="body-section">
  <!-- SEARCH BAR -->
  <div class="search-container">
        <div class="container row">
            <!-- Filter by Name -->
            <div class="input-container col-lg-4">
                <label for="name">{{ $t('message.Name') }}</label>
                <input v-model="filters.name" type="text" id="name" :placeholder="$t('message.type_freelancer_name')">
            </div>

            <!-- Filter by Skill -->
            <div class="dropdown-container col-lg-4">
                <label for="skill">{{ $t('message.skill') }}</label>
                <select v-model="filters.skill" name="skill" id="skill">
                    <option value="all">{{ $t('message.all') }}</option>
                    <option v-for="skill in skills" :key="skill.ID" :value="skill.name_eng">{{ skill.name_eng }}</option>
                </select>
            </div>

            <!-- Filter by Hourly Rate -->
            <div class="dropdown-container col-lg-4">
                <label for="hourlyRate">{{ $t('message.hourlyRate') }}</label>
                <select v-model="filters.hourlyRate" name="hourlyRate" id="hourlyRate">
                    <option value="all">{{ $t('message.all') }}</option>
                    <option value="0-50">0 - 50</option>
                    <option value="51-100">51 - 100</option>
                    <option value="101-150">101 - 150</option>
                    <option value="151-200">151 - 200</option>
                    <option value=">200"> {{ $t('message.200above') }}</option>
                </select>
            </div>

            <!-- Search Button -->
            <div class="col-lg-12 mt-2">
              <div class="button-container">
                <button @click="fetchFreelancers" class="search-button" type="button">
                  <i class="fas fa-search"></i> {{ $t('message.search') }}
                </button>
              </div>
            </div>
        </div>
    </div>   

    <!-- RESULTS -->
    <div class="container py-5">
      <div class="projects-container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
        <!-- Loop through freelancers and display them -->
        <div class="card-container" v-for="profile in profiles" :key="profile.user.ID">
            <div class="card">
                <h4>{{ profile.user.name }}</h4>

                <!-- skill -->
                <div class="skill-container">
                    <small class="badge" v-for="skill in profile.skills" :key="skill.ID">{{ skill.skill_name }}</small>
                </div>

                <hr class="my-3">

                <div class="d-flex mb-3">
                    <p> Experience Year : </p>
                    <div class="ms-2 d-flex">{{ profile.user.year_experience }}</div>
                </div>
                <div class="d-flex mb-3">
                    <p> Expected Payment (RM / hour) : </p>
                    <div class="ms-2 d-flex">{{ profile.user.wage_per_hour }}</div>
                </div>

                <hr class="my-3">

                <div class="language-container" hidden>
                    <p class="me-2"> Language : </p>
                    <div class="skill-container">
                        <small class="badge" v-for="language in profile.languages" :key="language.id">{{ language.name }}</small>
                    </div>
                </div>

                <div class="button-container my-3">
                    <a :href="`/freelancer/${profile.user.ID}`">
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
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';

interface User {
  ID: number;
  name: string;
  email: string;
  password: string;
  gender: string;
  dob: string;
  phone: string;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
  year_experience: number;
  wage_per_hour: number;
  cover_note: string;
}

interface Language {
  id: number;
  name: string;
  proficiency: string;
}

interface Skill {
    user_id: number;
    ID: number;
    name_eng: string;
    name_chi: string;
    name_malay: string;
}

interface Profile {
  user: User;
  languages: Language[];
  skills: SkillName[];
}

interface SkillName {
  ID: number;
  user_id: number;
  skill_name: string;
  skill_proficiency: string;
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;
  status: number;
}

export default defineComponent({
  name: 'AllFreelancersView',
  setup() {
    const skills = ref<Skill[]>([]);
    const store = useStore();
    const BASE_URL = store.state.host_url;
    const profiles = ref<Profile[]>([]); // Note the type here
    const filters = ref({
      name: '',
      skill: 'all',
      hourlyRate: 'all'
    });

    onMounted(async () => {
      try {
        const skillsResponse = await axios.get(BASE_URL + "skills");
        skills.value = skillsResponse.data;
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
      fetchFreelancers();
    });

    const fetchFreelancers = async () => {
      try {
        const response = await axios.get(BASE_URL + "freelancers", {
          params: filters.value
        });
        profiles.value = response.data.profiles;  // Accessing profiles from the response
      } catch (error) {
        console.error("Error fetching freelancers:", error);
      }
    };

    return {
      profiles,  // Updated this as well
      filters,
      skills,
      fetchFreelancers
    };
  }
});
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './AllFreelancersView.styles.scss';
</style>
