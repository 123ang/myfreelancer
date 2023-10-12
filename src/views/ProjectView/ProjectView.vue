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
                <p class="ms-1"></p>
            </div>
            <div class="budget-container budget mt-1">
                <div class="icon-container"><i class="fas fa-comment-dollar"></i></div>
                <b>RM </b>
                <p class="ms-1">{{ project.budget }}</p>
            </div>

            <hr>            

            <!-- bidding list -->
            <div class="bid-container" v-if="project.user_id === storeUserId">
              <h5 class="mb-2">{{ $t('message.biddingList') }}</h5>
              <table class="table table-striped">
                  <thead>
                      <tr>
                          <th scope="col">#</th>
                          <th scope="col">{{ $t('message.Name') }}</th>
                          <th scope="col">{{ $t('message.price') }}</th>
                          <th scope="col">{{ $t('message.action') }}</th>
                          <th scope="col">{{ $t('message.status') }}</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="(bid, index) in bidsForProject" :key="bid.ID">
                          <th scope="row">{{ index + 1 }}</th>
                          <td><a :href="'/user/' + bid.user_id">{{ bid.user.name }}</a></td>
                          <td>{{ bid.amount }}</td>
                          <td>
                              <div class="flex gap-2 icon-container">
                                  <div @click="acceptBid(bid.ID)" v-if="bid.status == 1"><i class="fas fa-check-circle accept"></i></div>
                                  <div @click="rejectBid(bid.ID)" v-if="bid.status == 1"><i class="fas fa-times-circle reject"></i></div>
                                  <div><a :href="'/freelancer/' + bid.user_id"><i class="fas fa-eye view"></i></a></div>
                              </div>
                          </td>
                          <td>
                            <div v-if="bid.status == 2" class="icon-container"><i class="fas fa-check-circle accept"></i></div>
                            <div v-if="bid.status == 3" class="icon-container"><i class="fas fa-times-circle reject"></i></div>
                          </td>
                      </tr>
                  </tbody>
              </table>
            </div>


            <!-- Conditional bid button -->
            <div v-if="project.user_id !== storeUserId">
              <div class="bidding-container">
                <label class="mb-2">{{ $t('message.yourBids') }}</label>                                          
                <div class="input-container">
                  <input v-model="bidAmount" type="number">
                  <button @click="createOrUpdateBid">{{ $t('message.bids') }}</button>
                </div>
              </div>
              <div class="bidding-container text-center" v-if="userBid">
                <div class="cancel-container mb-2">
                  <button class="bg-red-400" @click="cancelBid">{{ $t('message.cancel') }}</button>
                </div>
                <label class="mb-2">{{ $t('message.yourBids') }} {{ userBid.amount }}</label>                                        
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
import { useRouter } from 'vue-router'; 
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
interface User {
    ID: number;
    name: string;
}

interface UserProfile{
  name: string;
  phone: string;
  email: string;
  gender: string;
  dob: string;
  year_experience: number;
  wage_per_hour:number;
  cover_note:string;
}

interface Bid {
    ID: number;
    user_id: number;
    project_id: number;
    amount: string;  
    notes: string | null;
    created_at: string;
    created_by: number;
    updated_at: string;
    updated_by: number;
    status: number;
    user: User;
}

export default defineComponent({
  name: 'ProjectView',
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  setup(props) {
    const project = ref<Project | null>(null);
    const user_profile = ref<UserProfile | null>(null);
    const store = useStore();
    const storeUserId = store.state.user_id; // Assuming you have user_id in your Vuex store
    const router = useRouter();
    const bidAmount = ref<number | null>(null);
    const userBid = ref<Bid | null>(null);
    const bidsForProject = ref<Bid[]>([]); 
    const fetchBidsForProject = async () => {
            try {
                const response = await axios.get(`${store.state.host_url}projects/${props.id}/bids`);
                bidsForProject.value = response.data.bids;
            } catch (error) {
                console.error("Error fetching bids for project:", error);
            }
        };

    const acceptBid = async (bidId: number) => {
        try {
            await axios.post(`${store.state.host_url}bid/accept`, {
                bid_id: bidId,
                user_id: store.state.user_id
            });
            fetchBidsForProject();  // refresh the bids list
            alert("Bid accepted successfully!");
        } catch (error) {
            console.error("Error accepting bid:", error);
        }
    };

    const rejectBid = async (bidId: number) => {
        try {
            await axios.post(`${store.state.host_url}bid/reject`, {
                bid_id: bidId,
                user_id: store.state.user_id
            });
            fetchBidsForProject();  // refresh the bids list
            alert("Bid rejected successfully!");
        } catch (error) {
            console.error("Error rejecting bid:", error);
        }
    };
    const createOrUpdateBid = async () => {
      try {
        console.log(user_profile.value)
        if(user_profile.value?.wage_per_hour == null || user_profile.value?.year_experience == null ){
          alert("Please fill up your year of experience and wage per hour in the accout profile");
          router.push('/my-account'); 
          return;
        }
        const response = await axios.post(`${store.state.host_url}bid`, {
          user_id: store.state.user_id,
          project_id: props.id,
          amount: bidAmount.value
        });

        fetchUserBid();
      } catch (error) {
        console.error("Error creating or updating bid:", error);
      }
    };

    const cancelBid = async () => {
      try {
        await axios.post(`${store.state.host_url}bid/cancel`, {
          user_id: store.state.user_id,
          project_id: props.id
        });
        userBid.value = null;
      } catch (error) {
        console.error("Error cancelling bid:", error);
      }
    };

    const fetchUserBid = async () => {
      try {
        const response = await axios.get(`${store.state.host_url}projects/${props.id}/bids/user/${store.state.user_id}`);
        userBid.value = response.data.bid || null;
        user_profile.value = response.data.user || null;
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching user bid:", error);
      }
    };

    onMounted(async () => {
      try {
        const response = await axios.get(`${store.state.host_url}project/${props.id}`);
        project.value = response.data.project;
      } catch (error) {
        console.error("Error fetching project:", error);
      }
      if (project.value?.user_id !== store.state.user_id) {
        fetchUserBid();
        bidAmount.value = Number(project.value?.budget)
      }
      else{
        fetchBidsForProject();
      }
    });

    return {
      project,
      storeUserId,
      bidAmount,
      userBid,
      createOrUpdateBid,
      cancelBid,
      bidsForProject,
      acceptBid,
      rejectBid
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
