<template>
  <div class="body-section">
    <div class="container">
        <div class="card" v-if="project">
            <div class="header-container">
              <h2>{{ project.title }}</h2>              
            </div>
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

            <hr>            

            <!-- bidding list -->
            <div class="bid-container" v-if="project.user_id === storeUserId">
              <h5 class="mb-2">Bidding List</h5>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col" style="">#</th>
                      <th scope="col" style="width: 100%">Name</th>
                      <th scope="col" style="min-width: 180px">Bidding Price (RM)</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td><a href="#mark">Mark</a></td>
                      <td>100.00</td>
                      <td>
                        <div class="flex gap-2 icon-container">
                          <div><i class="fas fa-check-circle accept"></i></div>
                          <div><i class="fas fa-times-circle reject"></i></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td><a href="#Jacob">Jacob</a></td>
                      <td>100.00</td>
                      <td>
                        <div class="flex gap-2 icon-container">
                          <div><i class="fas fa-check-circle accept"></i></div>
                          <div><i class="fas fa-times-circle reject"></i></div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>

            <!-- Conditional bid button -->
            <div v-if="project.user_id !== storeUserId">
              <div class="bidding-container" >
                <label class="mb-2">Your bids (RM) : </label>                                          
                <div class="input-container">
                  <input type="number" >
                  <button>Bids</button>
                </div>
              </div>
              <div class="bidding-container text-center" >
                <div class="cancel-container mb-2">
                  <button class="bg-gray-400">Cancel</button>
                </div>
                <label class="mb-2">Your bids (RM) : 100.00</label>                                          
              </div>
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
    const storeUserId = store.state.user_id; // Assuming you have user_id in your Vuex store

    onMounted(async () => {
      try {
        const response = await axios.get(`${store.state.host_url}project/${props.id}`);
        project.value = response.data.project;
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    });

    return {
      project,
      storeUserId  // Making it available in the template
    };
  }
});

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './ProjectView.styles.scss';

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bid-button {
    background-color: #007BFF;
    color: #FFF;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
