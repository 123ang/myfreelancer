<template>
  <div class="body-section">
    <!-- SEARCH BAR -->
    <div class="search-container">
        <div class="container row">
            <div class="dropdown-container col-lg-5">
                <label for="category">{{ $t('message.category') }}</label>
                <select v-model="filters.category" name="category" id="category">
                    <option value="all">{{ $t('message.all') }}</option>
                    <option v-for="category in categories" :value="category.ID">{{ category.name_eng }}</option>
                </select>
            </div>            
            <div class="dropdown-container col-lg-5">
                <label for="skill">{{ $t('message.skill') }}</label>
                <select v-model="filters.skill" name="skill" id="skill">
                    <option value="all">{{ $t('message.all') }}</option>
                    <option v-for="skill in skills" :key="skill.ID" :value="skill.name_eng">{{ skill.name_eng }}</option>
                </select>
            </div>            
            <div class="col-lg-2">
              <div class="button-container">
                <button class="search-button" @click="fetchProjects" type="button"><i class="fas fa-search"></i></button>
              </div>
            </div>
        </div>
    </div>      


    <!-- RESULTS -->
    <div class="container py-5">
        <div class="projects-container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">

            <!-- Loop through projects and display them -->
            <div v-for="project in projects" :key="project.ID" v-if="projects.length> 0" class="card-container">
                <div class="card">
                    <h4>{{ project.title }}</h4>  <!-- Assuming projects have a name attribute -->
                    <div class="skill-container">
                        <small v-for="skill in project.project_skills" :key="skill.ID" class="badge">
                            {{ skill.skill_name }}
                        </small>
                    </div>
                    <hr class="my-3 mt-auto">
                    <!-- Price -->
                    <div class="d-flex mb-3">
                        <p> Price : </p>
                        <div class="ms-2 d-flex">
                            <p>RM</p>
                            <p>{{ project.budget }}</p>  <!-- Assuming projects have a price attribute -->
                        </div>
                    </div>
                    <!-- Bids -->
                    <div class="d-flex mb-3">
                        <p> Bids : </p>
                        <div class="ms-2 d-flex">{{ project.bids.length }}</div>
                    </div>
                    
                    <div class="button-container my-3">
                        <a :href="`/project/${project.ID}`">
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

interface Project {
  ID: number;
  user_id: number;
  title: string;
  description: string;
  status: string;
  budget: string;
  pic_name: string;
  pic_phone: string;
  pic_email: string;
  created_at: string;
  created_by: number | null;
  updated_at: string;
  updated_by: number | null;
  category_id: number;
  bids: Bid[];
  project_skills: ProjectSkill[];
  category: Category;
}

interface Bid {
  // Depending on the fields in your bids data, populate accordingly
}

interface ProjectSkill {
  ID: number;
  project_id: number;
  skill_id: number | null;
  skill_name: string;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
}

interface Category {
  ID: number;
  name_eng: string;
  name_chi: string;
  name_malay: string;
}
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'AllProjectsView',
  setup() {
    const store = useStore();
    const BASE_URL = store.state.host_url;
    const projects = ref<Project[]>([]);
    const skills = ref<Array<{ ID: number; name_eng: string }>>([]);
    const categories = ref<Category[]>([]);
    const filters = ref({
      category: 'all',
      skill: 'all'
    });

    onMounted(async () => {
      try {
        const skillsResponse = await axios.get(BASE_URL + "skills");
        skills.value = skillsResponse.data;

        const categoryResponse = await axios.get(BASE_URL + "categories");
        categories.value = categoryResponse.data;

        fetchProjects();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    const fetchProjects = async () => {
      try {
        const response = await axios.get(BASE_URL + "projects", {
          params: filters.value
        });
        projects.value = response.data.data;
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    return {
      projects,
      skills,
      categories,
      filters,
      fetchProjects
    };
  }
});

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './AllProjectsView.styles.scss';
</style>
