<template>
  <div class="body-section">
    <div class="container">
        <div class="card" v-if="project">
            <h2>{{ project.title }}</h2>
            <p>{{ $t('message.description') }}: {{ project.description }}</p>
            <div class="skill-container">
              <small class="badge" v-if="!project.project_skills">{{ $t('message.noSkillRequirement') }}</small>
              <small class="badge" v-for="skill in project.project_skills" :key="skill.ID">{{ skill.skill_name }}</small>
            </div>

            <hr>
            
            <h5>{{ project.pic_name }}</h5>
            <div class="contact-info-container">
                <div class="icon-container"><i class="fas fa-mobile-alt"></i></div>
                <p>{{ project.pic_phone }}</p>
            </div>
            <div class="contact-info-container">
                <div class="icon-container"><i class="fas fa-envelope"></i></div>
                <p>{{ project.pic_email }}</p>
            </div>
            
            <div class="budget-container mt-5" hidden>
                <!-- You may need a way to get the actual bids, placeholder for now -->
                <div class="icon-container"><i class="fas fa-comments-dollar"></i></div>
                <b>{{ $t('message.bids') }}: </b>
                <p class="ms-1">5</p>
            </div>
            <div class="budget-container budget mt-1">
                <div class="icon-container"><i class="fas fa-comment-dollar"></i></div>
                <b>RM </b>
                <p class="ms-1">{{ project.budget }}</p>
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
  created_by: number;
  updated_at: string;
  updated_by: number;
  category_id: number;
  project_skills: ProjectSkill[];
}

export default defineComponent({
  name: 'ProjectView',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const project = ref<Project | null>(null);
    const store = useStore();
    onMounted(async () => {
      try {
        const response = await axios.get(`${store.state.host_url}project/${props.id}`);
        console.log(response.data)
        project.value = response.data.project;
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    });

    return {
      project
    };
  }
});

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './ProjectView.styles.scss';
</style>
