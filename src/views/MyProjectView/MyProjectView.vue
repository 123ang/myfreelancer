<template>
  <div class="body-section">
    <div class="container">
        <div class="my-5"><h2>{{ $t('message.myProjects') }}</h2></div>
        <hr>
        <div class="pb-4 pt-5">
            <div class="projects-container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">

                <!-- Loop through projects and display them -->
                <div v-for="project in projects" :key="project.ID" class="card-container">
                    <div class="card">
                        <h4> {{ project.title }} </h4>
                        <div class="skill-container">
                            <!-- Loop through skills for each project -->
                            <small v-for="skill in project.project_skills" :key="skill.ID" class="badge">
                                {{ skill.skill_name }}
                            </small>
                        </div>
                        <hr class="my-3">
                        <!-- Price -->
                        <div class="d-flex mb-3">
                            <p>{{ $t('message.price') }}: </p>
                            <div class="ms-2 d-flex">
                                <p>RM</p>
                                <p>{{ project.budget }}</p>
                            </div>
                        </div>
                        <!-- Bids (you may need to adjust according to your data structure) -->
                        <div class="d-flex mb-3" hidden>
                            <p>{{ $t('message.bids') }}: </p>
                            <div class="ms-2 d-flex">0</div>
                        </div>
                        <!-- Buttons (adjust href as needed) -->
                        <div class="button-container my-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <a :href="'/project/' + project.ID" class="button view">{{ $t('message.view') }}</a>
                            <!-- Add the actual links or methods for update, close, and delete -->
                            <a :href="'/edit-project/' + project.ID"  class="button update">{{ $t('message.update') }}</a>
                            <a @click="closeProject(project.ID)" class="button close">{{ $t('message.close') }}</a>
                            <a @click="deleteProject(project.ID)" class="button delete">{{ $t('message.delete') }}</a>
                        </div>
                    </div>  
                </div>    

                <!-- Create Project Card -->
                <div class="card-container create">
                    <a href="/create-project" class="card">
                        <div class="button">
                            <div><i class="fas fa-plus"></i></div>
                            <h4>{{ $t('message.addProject') }}</h4>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>    
  </div>

  <!-- closed project -->
  <div v-if="closedProjects.length > 0" id="closed-project" class="body-section" >
    <div class="container" >
      <div class="my-5"><h2>Closed Projects</h2></div>
        <hr>
        <div class="pb-4 pt-5">
            <div class="projects-container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">

                <!-- Loop through projects and display them -->
                <div v-for="close_project in closedProjects" :key="close_project.ID" class="card-container">
                    <div class="card">
                        <h4> {{ close_project.title }} </h4>
                        <div class="skill-container">
                            <!-- Loop through skills for each project -->
                            <small v-for="skill in close_project.project_skills" :key="skill.ID" class="badge">
                                {{ skill.skill_name }}
                            </small>
                        </div>
                        <hr class="my-3">
                        <!-- Price -->
                        <div class="d-flex mb-3">
                            <p>{{ $t('message.price') }}: </p>
                            <div class="ms-2 d-flex">
                                <p>RM</p>
                                <p>{{ close_project.budget }}</p>
                            </div>
                        </div>
                        <!-- Bids (you may need to adjust according to your data structure) -->
                        <div class="d-flex mb-3" hidden>
                            <p>{{ $t('message.bids') }}: </p>
                            <div class="ms-2 d-flex">0</div>
                        </div>
                        <!-- Buttons (adjust href as needed) -->
                        <div class="button-container my-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <a :href="'/project/' + close_project.ID" class="button view">{{ $t('message.view') }}</a>                       
                        </div>
                    </div>  
                </div>    
                
            </div>
        </div>
    </div>
  </div>  
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios'; // Ensure you have axios installed and imported
import { useStore } from 'vuex';
import Swal from 'sweetalert2';
import { useI18n } from 'vue-i18n';

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

interface Project {
  ID: number;
  user_id: number;
  title: string;
  description: string;
  status: string;
  budget: string; // It's a string here because the provided data has it in quotes. If it's actually a number, change to `number`.
  pic_name: string;
  pic_phone: string;
  pic_email: string;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  category_id: number;
  project_skills: ProjectSkill[];
  category: Category;
}

export default defineComponent({
  name: 'MyProject',
  setup() {
    const projects = ref<Project[]>([]);
    const closedProjects = ref<Project[]>([]);
    const store = useStore();
    const apiUrl = store.state.host_url + "my_project";
    const { t } = useI18n();
    const fetchProjects = async () => {
      try {
        const response = await axios.post(apiUrl, {
          user_id: store.state.user_id
        });
        
        // Assuming your API returns a list of projects
        projects.value = response.data;
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    
    const fetchClosedProjects = async () => {

      try {
        const response = await axios.post(store.state.host_url + "my_closed_projects", {
          user_id: store.state.user_id
        });

        closedProjects.value = response.data;

      } catch (error) {
        console.error("Error fetching closed projects:", error);
      }
    };

    const closeProject = async (projectId: number) => {
      try {
        const result = await Swal.fire({
          title: t('message.closeProject'),
          text: t('message.wontRevert'),
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: t('message.yesClose'),
          cancelButtonText: t('message.noCancel')
        });
        
        if (result.isConfirmed) {
          await axios.post(`${store.state.host_url}project/${projectId}/close`);
          Swal.fire('Closed!', t('message.project_closed'), 'success');
          fetchProjects(); 
        }
      } catch (error) {
        Swal.fire('Error!', t('message.closeProjectError'), 'error');
      }
    };

    const deleteProject = async (projectId: number) => {
      try {
        const result = await Swal.fire({
          title: t('message.deleteProject'),
          text: t('message.wontRevert'),
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: t('message.yesDelete'),
          cancelButtonText: t('message.noCancel')
        });
        
        if (result.isConfirmed) {
          await axios.post(`${store.state.host_url}project/${projectId}/delete`);
          Swal.fire('Deleted!', t('message.project_deleted'), 'success');
          fetchProjects(); 
        }
      } catch (error) {
        Swal.fire('Error!', t('message.deleteProjectError'), 'error');
      }
    };

    onMounted(() => {
      fetchProjects();
      fetchClosedProjects();  
    });

    return {
      projects,
      closeProject,
      closedProjects, 
      deleteProject
    }
  }
});
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './MyProjectView.styles.scss';
</style>
