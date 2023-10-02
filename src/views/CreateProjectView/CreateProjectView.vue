<template>
  <div class="body-section">
    <div class="container">
        <div class="card">
            <h2>{{ $t('message.Create Project') }}</h2>
            <hr>
            <!-- title -->
            <div class="input-container">
              <label for="project_title">{{ $t('message.projectTitle') }} :</label>
              <input type="text" id="project_title" name="project_title" v-model="projectTitle">
            </div>
            <!-- description -->
            <div class="input-container">
              <label for="project_title">{{ $t('message.projectDescription') }} :</label>
              <textarea id="project_description" name="project_description" rows="5" v-model="projectDescription"></textarea>
            </div>
            <!-- budget -->
            <div class="input-container">
              <label for="project_budget">{{ $t('message.projectBudget') }} ( RM ) :</label>
              <input type="number" id="project_budget" name="project_budget" min=1 v-model="projectBudget">
            </div>
            <!-- category -->
            <div class="input-container">
              <label>{{ $t('message.category') }}:</label>
              <select v-model="selectedCategory">
                <option v-for="category in categories" :value="category.ID">{{ category.name_eng }}</option>
              </select>
            </div>
            <!-- skills -->
            <div class="input-container">
              <label>{{ $t('message.requireSkill') }}:</label>
              <div class="skill-container">
                <input type="text" class="add-skill-input" v-model="skillInput" @input="filterSkills">
                <div class="autocomplete-suggestions" v-if="isAutocompleteVisible">
                  <div v-for="skill in filteredSkills" @click="selectSkill(skill)">{{ skill }}</div>
                </div>
                <div class="add-skill-button" @click="addSelectedSkill">{{ $t('message.add') }}</div>
              </div>
              <div class="ms-3 grid grid-cols-1 gap-y-4" id="added-skill">
                <div v-if="!skillSet.length">{{ $t('message.noSkillRequirement') }}</div>
                <div v-for="(skill, index) in skillSet" class="require-skill">
                  <div class="text-container">{{ skill }}</div>
                  <div class="icon-container delete-button" @click="deleteSkill(index)">
                    <i class="fas fa-trash-alt"></i>
                  </div>
                </div>
              </div>
            </div>  

            <input type="text" id="require_skills" name="require_skills" :value="skillSet.join(',')" hidden>
            
            <div>
              {{ $t('message.personInCharge') }}
              <div class="input-container">
                <label for="person_in_charge_name">{{ $t('message.Name') }}:</label>
                <input type="text" id="person_in_charge_name" name="person_in_charge_name" v-model="personInChargeName">
              </div>
              <div class="input-container">
                <label for="person_in_charge_phone">{{ $t('message.phone') }}:</label>
                <input type="text" id="person_in_charge_phone" name="person_in_charge_phone" v-model="personInChargePhone">
              </div>
              <div class="input-container">
                <label for="person_in_charge_email">{{ $t('message.Email') }}:</label>
                <input type="text" id="person_in_charge_email" name="person_in_charge_email" v-model="personInChargeEmail">
              </div>
            </div>
            <div class="submit-button">
              <button @click="submitProject">{{ $t('message.Create') }}</button>
            </div>        
        </div>            
    </div>
  </div>
</template>


<script lang="ts">

import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'CreateProjectView',
  setup() {
    const store = useStore();
    const router = useRouter();

    const BASE_URL = store.state.host_url;
    
    const allSkills = ref<Array<{ ID: number; name_eng: string }>>([]);
    const categories = ref<Array<{ ID: number; name_eng: string }>>([]);

    const skillInput = ref('');
    const filteredSkills = ref<string[]>([]);
    const isAutocompleteVisible = ref(false);
    const skillSet = ref<string[]>([]);
    
    const projectTitle = ref('');
    const projectDescription = ref('');
    const projectBudget = ref<number>(1); // default value set to 100, assuming it's a number
    const selectedCategory = ref<number | null>(null);
    const personInChargeName = ref('');
    const personInChargePhone = ref('');
    const personInChargeEmail = ref('');

    onMounted(async () => {
      try {
        const skillsResponse = await axios.get(BASE_URL + "skills");
        if (skillsResponse.data && Array.isArray(skillsResponse.data)) {
          allSkills.value = skillsResponse.data;
        }

        const categoryResponse = await axios.get(BASE_URL + "categories");
        if (categoryResponse.data && Array.isArray(categoryResponse.data)) {
          categories.value = categoryResponse.data;
        }

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    const filterSkills = () => {
      if (!skillInput.value) {
        filteredSkills.value = [];
        isAutocompleteVisible.value = false;
        return;
      }

      filteredSkills.value = allSkills.value
        .map(skill => skill.name_eng)
        .filter(name => name.toLowerCase().includes(skillInput.value.toLowerCase()));

      isAutocompleteVisible.value = filteredSkills.value.length > 0;
    }

    const selectSkill = (skill: string) => {
      skillInput.value = skill;
      filteredSkills.value = [];
    }

    const addSelectedSkill = () => {
      if (skillInput.value && !skillSet.value.includes(skillInput.value)) {
        skillSet.value.push(skillInput.value);
        skillInput.value = '';
      }
    }

    const deleteSkill = (index: number) => {
      skillSet.value.splice(index, 1);
    }

    const submitProject = async () => {
      try {
        const mappedSkills = skillSet.value.map(skillName => {
            const foundSkill = allSkills.value.find(skill => skill.name_eng === skillName);
            return {
                id: foundSkill ? foundSkill.ID : null,
                name: skillName
            };
        });

        var data = {
          title: projectTitle.value,
          description: projectDescription.value,
          budget: projectBudget.value,
          category_id: selectedCategory.value,
          skills: mappedSkills,
          user_id: store.state.user_id,
          person_in_charge: {
            name: personInChargeName.value,
            phone: personInChargePhone.value,
            email: personInChargeEmail.value
          }
        }

        const response = await axios.post(BASE_URL + 'project', data);

        if (response.status === 200 || response.status === 201) {
          alert("Project created successfully");
          router.push("/my-project");
        }
        else {
          alert("An error occurred while creating the project.");
        }

      } catch (error) {
        console.error("Error:", error);
        alert("Failed to create the project. Please try again.");
      }
    };

    return {
      skillSet,
      skillInput,
      filteredSkills,
      filterSkills,
      selectSkill,
      addSelectedSkill,
      deleteSkill,
      isAutocompleteVisible,
      projectTitle,
      projectDescription,
      projectBudget,
      selectedCategory,
      personInChargeName,
      personInChargePhone,
      personInChargeEmail,
      submitProject,
      categories
    }
  }
});

</script>

  

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './CreateProjectView.styles.scss';
</style>

<style lang="scss" >
  #added-skill{
      .text-container{ width: 100%; font-weight: 600;}
      .require-skill {display: flex; max-width: 500px; align-items: center;}
      .icon-container{
          margin-left: auto; 
          background-color: #eb605c;
          padding: .15rem 1rem;
          border-radius: 500px;
          cursor: pointer;
          user-select: none;
          i{color: #fff;}
      }
  }
  .skill-container {
    position: relative; // This makes it the anchor point for absolutely positioned children

    .autocomplete-suggestions {
      border: 1px solid #ccc;
      max-height: 150px;
      overflow-y: auto;
      position: absolute;
      top: 100%; // This positions the dropdown right below the input
      left: 0; // This aligns the dropdown to the left of the input
      width: 100%; // This ensures the dropdown takes the full width of the input
      background: white;
      z-index: 10;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Optional: Adds a little shadow for better visual separation

      div {
        padding: 8px 12px;
        cursor: pointer;

        &:hover {
          background: #e9e9e9;
        }
      }
    }
  }
</style>
