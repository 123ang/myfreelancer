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
            <h4>{{ $t('message.Name') }}:</h4>
            <input type="text" name="name" id="name" :placeholder="$t('message.Name')" v-model="updatedName">
          </div>

          <div class="col-md-12">
            <h4>{{ $t('message.phone') }}:</h4>
            <input type="tel" name="phone" id="phone" :placeholder="$t('message.phone')" v-model="updatedPhone">
          </div>

          <div class="col-md-6">
            <h4>{{ $t('message.Email') }}:</h4>
            <p>{{ userProfile.email }}</p>
          </div>
          
          <div class="col-md-6">
            <h4>{{ $t('message.Password') }}:</h4>
            <p>
              <a class="change-password" href="/change-password">Change Password</a>
            </p>
          </div>
         
          <div class="col-md-6">
            <h4>{{ $t('message.Gender') }}:</h4>
            <p>{{ userProfile.gender === 'M' ? $t('message.male') : userProfile.gender === 'F' ? $t('message.female') : userProfile.gender }}</p>
          </div>


          <div class="col-md-6">
            <h4>{{ $t('message.Date of Birth') }}:</h4>
            <p>{{ userProfile.dob }}</p>
          </div>
        </div>

        <div class="my-5 button-container">
          <button @click.prevent="handleSaveChanges">{{ $t('message.saveChanges') }}</button>
        </div>

        <!-- Skills -->
        <hr>

        <div class="row" id="expertise-skills">
          <div class="col-9 col-md-10">
            <h4>{{ $t('message.expertiseSkills') }}</h4>

            <div class="optional-container mb-1 mt-4 ms-2" v-if="userSkills && userSkills.length > 0">
              <div 
                class="mb-2 d-flex align-items-center" 
                v-for="skill in userSkills" 
                :key="skill.ID">
                <h5 class="skill-name">{{ skill.skill_name }} :</h5>
                <h5 class="d-flex gap-2 ms-2">
                  <i 
                    v-for="n in 5" 
                    :key="n" 
                    :class="[n <= skill.skill_proficiency ? 'fas' : 'far', 'fa-star']">
                  </i>
                </h5>
              </div>
            </div>

            <p class="mb-0" v-else>{{ $t('message.noSkillsInfo') }}</p>

          </div>
          <div class="col-3 col-md-2 add-button-container">
            <a class="add-button" href="/expertise-skills?title=edit">
              <button type="button">{{ $t('message.edit') }}</button>
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
              <h4>{{ $t('message.workExperience') }}</h4>

              <div v-if="userExperience.length > 0">
                  <div class="optional-container mb-1 mt-4 ms-2" v-for="experience in userExperience" :key="experience.ID">
                      <h5>{{ experience.title }} | {{ experience.company }}</h5>
                      <p>{{ experience.from_period }} - {{ experience.to_period }}</p>
                      <p>{{ experience.description }}</p>
                      <div class="button-container col-12">
                        <a :href="`/edit-experience/${experience.ID}`" class="button"><i class="far fa-edit"></i> {{ $t('message.edit') }}</a>
                        <a @click="removeExperience(experience.ID)" class="button"><i class="fas fa-times"></i> {{ $t('message.remove') }}</a>
                      </div>
                  </div>
              </div>

              <p v-else>{{ $t('message.noExperienceInfo') }}</p>
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
            <h4>{{ $t('message.Education') }}</h4>

            <div v-if="userEducation.length > 0">
                <div class="optional-container mb-1 mt-4 ms-2" v-for="education in userEducation" :key="education.ID">
                    <h5>{{ education.major }} | {{ education.venue_of_education }}</h5>
                    <p>{{ education.from_period }} - {{ education.to_period }}</p>
                    <p>{{ $t('message.education_level') }}: {{ getEducationLevel(education.education_level) }}</p>
                    <div class="button-container col-12">
             
                      <a :href="`/edit-education/${education.ID}`"  class="button"><i class="far fa-edit"></i> {{ $t('message.Edit') }}</a>
                      <a class="button" @click="removeEducation(education.ID)"><i class="fas fa-times"></i> {{ $t('message.Remove') }}</a>
                    </div>
                </div>
            </div>

            <p v-else>{{ $t('message.NoEducationInfo') }}</p>
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
            <h4>{{ $t('message.others') }}</h4>

            <div class="optional-container mb-1 mt-4 ms-2">
              <div class="mb-4">
                  <h5>{{ $t('message.yearExperience') }}:</h5>
                  <p>
                      {{ userProfile.year_experience ?? ""}} 
                    
                  </p>
              </div>
        
              <div class="mb-4">
                <h5>{{ $t('message.expectedPayment') }}: (RM / {{ $t('message.hour') }}) </h5>
                <p>  {{ userProfile.wage_per_hour ?? ""}} </p>
              </div>
              
              <div class="mb-4">
                <h5>Portfolio:</h5>
                <p></p>
              </div>

              <div class="mb-4">
                <h5>{{ $t('message.coverNotesOptional') }}:</h5>
                <p> {{ userProfile.cover_note ?? ""}} </p>
              </div>

            </div>
          </div>
          
          <div class="col-3 col-md-2 add-button-container">
            <a  class="add-button" href="/edit-others" v-if="isAddedOthers">
              <button type="button">{{ $t('message.edit') }}</button>
            </a>         
            <a  class="add-button" href="/create-others"  v-else>
              <button type="button">{{ $t('message.add') }}</button>
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
}

interface Education {
  ID: number;
  education_level: string;
  year_of_education: number | null;
  venue_of_education: string;
  major: string;
  from_period: string;
  to_period: string;
}

export default defineComponent({
  name: 'AccountView',
  setup() {
    const store = useStore();
    const { t } = useI18n();
    const userProfile = ref<UserProfile | null>(null);
    const updatedName = ref<string>('');
    const updatedPhone = ref<string>('');
    const userSkills = ref<Skill[]>([]);
    const isAddedSkills = ref<boolean>(true); // Temporary - Update based on your logic.
    const isAddedOthers = ref<boolean>(true); // Temporary - Update based on your logic.
    const userExperience = ref<Experience[]>([]);
    const userEducation = ref<Education[]>([]);
    const handleSaveChanges = async () => {
        try {
          const apiUrl = store.state.host_url + "user/update-profile";  // Concatenate host_url with endpoint
         
            const response = await axios.post(apiUrl, {
              name: updatedName.value,
              phone: updatedPhone.value,
              user_id: store.state.user_id
            });



            if (response.data.success) {
              alert('Profile updated successfully');
            } else {
              alert('Error updating profile: ' + response.data.message);
            }
        } catch (error) {
            alert('Network error. Please try again.');
        }
    };
    const removeExperience = async (id: number) => {
      try {
          const url = `${store.state.host_url}user-experience/${id}`;
          console.log(url)
          const response = await axios.delete(url);
          console.log(response.data)
          console.log(response.data.success)
          if (response.data.success) {
              // Refresh data or remove locally
              userExperience.value = userExperience.value.filter(exp => exp.ID !== id);
              alert(t('message.experienceRemovedSuccessfully'));
          } else {
              alert(t('message.errorRemovingExperience'));
          }
      } catch (error) {
          alert(t('message.networkError'));
      }
    };

    const removeEducation = async (id: number) => {
        try {
            const url = `${store.state.host_url}user-education/${id}`;
            const response = await axios.delete(url);

            if (response.data.success) {
                // Remove the education entry from the list
                userEducation.value = userEducation.value.filter(edu => edu.ID !== id);
                alert(t('message.EducationRemovedSuccessfully'));
            } else {
                alert(t('message.ErrorRemovingEducation'));
            }
        } catch (error) {
            console.error("Error removing education:", error);
            alert(t('message.NetworkError'));
        }
    };

    type EducationKey = 'primary_school' | 'middle_school' 
      |'high_school' |'vocational' 
      |'diploma' |'associate'
      |'bachelor' | 'postgraduate'
      |'masters' |'phd'
      |'professional';

   
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

    onMounted(async () => {
      try {
        const url = `${store.state.host_url}user/profile/${store.state.user_id}`;
        const response = await axios.post(url);
        userProfile.value = response.data.user;
        userSkills.value = response.data.skills; 
        userExperience.value = response.data.experience;
        userEducation.value = response.data.education;
        updatedName.value = userProfile.value?.name || '';
        updatedPhone.value = userProfile.value?.phone || '';
        console.log(userProfile.value)
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    });

    return {
      userProfile,
      userSkills,
      userExperience,
      userEducation,
      updatedName,
      updatedPhone,
      isAddedSkills,
      isAddedOthers,
      handleSaveChanges,
      getEducationLevel,
      removeExperience,
      removeEducation
    };
  },
  
});
</script>



<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './AccountView.styles.scss';
</style>
