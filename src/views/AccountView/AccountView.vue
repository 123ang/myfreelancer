<template>
  <div class="body-section">
    <div class="container">
      <div v-if="userProfile">
        <div class="my-5">
          <h2>{{ $t('message.account') }}</h2>
        </div>
        <hr>
        <!-- personal info -->
        <div class="row">
          <div class="col-md-12">
            <h4>{{ $t('message.Name') }}</h4>
            <input type="text" name="name" id="name" :placeholder="$t('message.Name')" :value="userProfile.name">
          </div>

          <div class="col-md-12">
            <h4>{{ $t('message.phone') }}</h4>
            <input type="tel" name="phone" id="phone" :placeholder="$t('message.phone')" :value="userProfile.phone">
          </div>

          <div class="col-md-6">
            <h4>{{ $t('message.Email') }}</h4>
            <p>{{ userProfile.email }}</p>
          </div>
          
          <div class="col-md-6">
            <h4>Password:</h4>
            <p>
              <a class="change-password" href="/change-password">Change Password</a>
            </p>
          </div>
         
          <div class="col-md-6">
            <h4>{{ $t('message.Gender') }}</h4>
            <p>
              <select name="gender" v-model="userProfile.gender">
                <option value="male">{{ $t('message.male') }}</option>
                <option value="female">{{ $t('message.female') }}</option>
              </select>
            
            </p>
          </div>

          <div class="col-md-6">
            <h4>{{ $t('message.Date of Birth') }}</h4>
            <p>
              <input type="date" name="dob" v-model="userProfile.dob">
            
            </p>
          </div>
        </div>

        <div class="my-5 button-container">
          <button>{{ $t('message.saveChanges') }}</button>
        </div>

        <!-- Skills -->
        <hr>

        <div class="row" id="expertise-skills">
          <div class="col-9 col-md-10">
            <h4>Expertise Skills</h4>
              
            <div class="optional-container mb-1 mt-4 ms-2" v-if="isAddedSkills">
              <div class="mb-2 d-flex align-items-center">
                <h5 class="skill-name">Skill 1 : </h5>
                <h5 class="d-flex gap-2 ms-2">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </h5>
              </div>
              <div class="mb-2 d-flex align-items-center">
                <h5 class="skill-name">Skill 2 : </h5>
                <h5 class="d-flex gap-2 ms-2">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </h5>
              </div>
            </div>

            <p class="mb-0" v-else>No skills added yet</p>

          </div>
          <div class="col-3 col-md-2 add-button-container">
            <a  class="add-button" href="/expertise-skills?title=edit" v-if="isAddedSkills">
              <button type="button">Edit</button>
            </a>         
            <a  class="add-button" href="/expertise-skills?title=add"  v-else>
              <button type="button">Add</button>
            </a>         
          </div>
        </div>

        <!-- portfolio -->
        <!-- <hr>

        <div class="row">
          <div class="col-8">
            <h4>Portfolio</h4>
            <div class="optional-container row my-1">
              <p class="mb-0 col-12">Add your portfolio. (Optional)</p>
              <div class="button-container col-12">
                <div class="button"><i class="far fa-edit"></i> Edit</div>
                <div class="button"><i class="fas fa-times"></i> Remove</div>
              </div>
            </div>
          </div>
          <div class="col-4 add-button-container">
            <button type="button" class="add-button">Add</button>
          </div>
        </div> -->

        <!-- Work Experience -->
        <hr>

        <div class="row">
          <div class="col-9 col-md-10">
            <h4>Work Experience</h4>
            
            <div class="optional-container mb-1 mt-4 ms-2">
              <h5>Job Position | Company Sdn Bhd</h5>
              <p>TimeFrom - TimeTo</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non felis sapien. Donec tincidunt, felis et ornare sagittis, ipsum lectus suscipit tellus, eu sodales nunc ligula eget magna. Sed fringilla turpis sit amet lacus laoreet feugiat. Integer vel eros non odio consequat molestie in nec augue. Nullam sit amet pellentesque. </p>
              <div class="button-container col-12">
                <a href="/edit-experience" class="button"><i class="far fa-edit"></i> Edit</a>
                <div class="button"><i class="fas fa-times"></i> Remove</div>
              </div>
            </div>
          </div>

          <div class="col-3 col-md-2 add-button-container">
            <a  class="add-button" href="/create-experience">
              <button type="button">Add</button>
            </a>         
          </div>

        </div>

        <!-- Certification -->
        <!-- <hr>

        <div class="row">
          <div class="col-8">
            <h4>Certification</h4>
            <div class="optional-container row my-1">
              <p class="mb-0 col-12">Add your Certification. (Optional)</p>
              <div class="button-container col-12">
                <div class="button"><i class="far fa-edit"></i> Edit</div>
                <div class="button"><i class="fas fa-times"></i> Remove</div>
              </div>
            </div>
          </div>
          <div class="col-4 add-button-container">
            <button type="button" class="add-button">Add</button>
          </div>
        </div> -->

        <!-- Eduction -->
        <hr>

        <div class="row">
          <div class="col-9 col-md-10">
            <h4>Eduction</h4>

            <div class="optional-container mb-1 mt-4 ms-2">
              <h5>Major | School Name</h5>
              <p>TimeFrom - TimeTo</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non felis sapien. Donec tincidunt, felis et ornare sagittis, ipsum lectus suscipit tellus, eu sodales nunc ligula eget magna. Sed fringilla turpis sit amet lacus laoreet feugiat. Integer vel eros non odio consequat molestie in nec augue. Nullam sit amet pellentesque. </p>
              <div class="button-container col-12">
                <a href="/edit-education" class="button"><i class="far fa-edit"></i> Edit</a>
                <div class="button"><i class="fas fa-times"></i> Remove</div>
              </div>
            </div>
          </div>
          <div class="col-3 col-md-2 add-button-container">
            <a  class="add-button" href="/create-education">
              <button type="button">Add</button>
            </a>         
          </div>
        </div>

        <!-- Others -->
        <hr>

        <div class="row">
          <div class="col-9 col-md-10">
            <h4>Others</h4>

            <div class="optional-container mb-1 mt-4 ms-2">
              <div class="mb-4">
                <h5>Year Experience : </h5>
                <p>5 years</p>
              </div>
              <div class="mb-4">
                <h5>Expect payment (RM / hour) : </h5>
                <p>0.00</p>
              </div>
            </div>
            <div class="mb-4">
              <h5>Other comments : </h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non felis sapien. Donec tincidunt, felis et ornare sagittis, ipsum lectus suscipit tellus, eu sodales nunc ligula eget magna. Sed fringilla turpis sit amet lacus laoreet feugiat. Integer vel eros non odio consequat molestie in nec augue. Nullam sit amet pellentesque. </p>
            </div>
          </div>
          <div class="col-3 col-md-2 add-button-container">
            <a  class="add-button" href="/edit-others" v-if="isAddedOthers">
              <button type="button">Edit</button>
            </a>         
            <a  class="add-button" href="/create-others"  v-else>
              <button type="button">Add</button>
            </a>         
          </div>
        </div>

      </div>

      <div v-else>
        <p>{{ $t('message.loadingProfile') }}</p>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';

interface UserProfile {
  name: string;
  phone: string;
  email: string;
  gender: string;
  dob: string; // Adjust if the returned format is different
  // Add other fields if needed
}

export default defineComponent({
  name: 'AccountView',
  components: {
  },
  setup() {
    const store = useStore();
    const userProfile = ref<UserProfile | null>(null);    
    const isAddedOthers = ref<boolean>(true);
    const isAddedSkills = ref<boolean>(true);
    
    onMounted(async () => {
      try {
        const url = `${store.state.host_url}user/profile/${store.state.user_id}`;
        console.log(url)
        const response = await axios.post(url);
        userProfile.value = response.data.user;
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    });

    return {
      userProfile, 
      isAddedOthers,
      isAddedSkills
    };
  }
});
</script>


<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './AccountView.styles.scss';
</style>
