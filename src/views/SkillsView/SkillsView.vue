<template>
    <div class="body-section" id="expertise-skills">
        <div class="container">
            <div class="card">
                <a class="back-button" href="javascript:history.back()"><i class="fas fa-chevron-left me-2"></i>{{ $t('message.back') }}</a>
                
                <h2 class="mb-5 text-center">{{ $t('message.addExpertiseSkills') }}</h2>

                <div class="form-container">
                    <form @submit.prevent="saveSkills">
                        <div class="input-container">
                            <div class="login-form-container">                  
                                <label for="skill_name">{{ $t('message.addSkillLabel') }}</label>
                                <div class="d-flex add-skill-container">
        
                                    <input 
                                        type="text" 
                                        v-model="skill.skill_name" 
                                        :placeholder="$t('message.skillPlaceholder')" 
                                        @input="filterSkills"
                                    >
                                    <!-- Autocomplete suggestions -->

                                    <div class="autocomplete-suggestions" v-if="isAutocompleteVisible">
                                        <div v-for="skill in filteredSkills" @click="selectSkill(skill)">{{ skill }}</div>
                                    </div>
                        
                                    <button type="button" class="skill-button" @click="addSkill">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <span class="preview-skill-container">
                            <div 
                                class="skill-bar" 
                                v-for="s in skills" 
                                :key="s.ID">
                                <select v-model="s.skill_proficiency" @change="trackChanges(s.ID)">
                                    <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
                                </select>
                                <h5>{{ s.skill_name }}</h5>
                                <button type="button" class="remove-skill" @click="deleteSkill(s.ID)"><i class="fas fa-trash-alt"></i></button>
                            </div>
                        </span>

                        <small>{{ $t('message.rateSkill') }}</small>

                        <div class="submit-button">
                            <button class="button-main login" type="submit">
                                {{ $t('message.save') }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>



<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';
interface Skill {
    user_id: number;
    ID: number;
    skill_name: string;
    skill_proficiency: number;
    created_by: number;
    updated_by: number;
    status: number;
}

export default defineComponent({
    name: 'SkillsView',
    setup() {
        const store = useStore();
        const skill = ref({ skill_name: '' });
        const allSkills = ref<Array<{ ID: number; name_eng: string }>>([]);
        const skills = ref<Skill[]>([]);
        const changedSkills = ref<number[]>([]);
        const get_user_api = store.state.host_url + "get-user-skill?user_id="+ store.state.user_id;
        const store_user_api = store.state.host_url + "user-skill";
        const update_skill_api = store.state.host_url + "user-skill/";
        const suggestedSkills = ref<string[]>([]);
        const filteredSkills = ref<string[]>([]);
        const isAutocompleteVisible = ref(false);

        const trackChanges = (skillId: number) => {
            if (!changedSkills.value.includes(skillId)) {
                changedSkills.value.push(skillId);
            }
        };
        const fetchSkills = async () => {
            try {
                const response = await axios.get(get_user_api);
                skills.value = response.data.skills; // Assuming the endpoint returns an array of skills
            } catch (error) {
                alert('Error fetching skills.');
            }
        };

        const addSkill = async () => {
            if (!skill.value.skill_name.trim()) {
                alert('Please enter a skill name.');
                return;
            }
            try {
                const data = {
                    skill_name: skill.value.skill_name,
                    user_id: store.state.user_id,
                    skill_proficiency :1
                }
                console.log(data)
                const response =  await axios.post(store_user_api, data);
                if (response.data.message === 'Record created successfully') {
                    skills.value.push(response.data.data);
                    skill.value.skill_name = ''; // Reset skill name after successful addition
                    alert(response.data.message);
                } else {
                    alert('Error adding skill.');
                }
            } catch (error) {
                alert('Error adding skill.');
            }
        };

        const deleteSkill = async (skillId: number) => {
            try {
                const delete_user_api = store.state.host_url + "user-skill/" + skillId;
                const response = await axios.delete(delete_user_api);
                if (response.data.message === 'Record status changed to 0 successfully') {
                    const index = skills.value.findIndex(s => s.ID === skillId);
                    if (index > -1) {
                        skills.value.splice(index, 1);
                    }
                    alert(response.data.message);
                } else {
                    alert('Error deleting skill.');
                }
            } catch (error) {
                alert('Error deleting skill.');
            }
        };

       const saveSkills = async () => {
            for (const skillId of changedSkills.value) {
                const skillToUpdate = skills.value.find(s => s.ID === skillId);
                if (skillToUpdate) {
                    try {
                        console.log(update_skill_api + skillId);
                        console.log(skillToUpdate)
                        const response = await axios.post(update_skill_api + skillId, skillToUpdate);
                        if (response.data.message !== 'Record updated successfully') {
                            alert(`Error updating skill: ${skillToUpdate.skill_name}`);
                        }
                    } catch (error) {
                        alert(`Error updating skill: ${skillToUpdate.skill_name}`);
                    }
                }
            }
            alert('Skills updated successfully');
            changedSkills.value = []; // Reset after updating
        };

        onMounted(async () => {
            try {
                const skillsResponse = await axios.get(store.state.host_url + "skills");
                if (skillsResponse.data && Array.isArray(skillsResponse.data)) {
                    allSkills.value = skillsResponse.data;
                }
                fetchSkills();
            } catch (error) {
                console.error("Error fetching skills:", error);
            }
        });

        const selectSkill = (selectedSkill: string) => {
            skill.value.skill_name = selectedSkill;
            filteredSkills.value = [];
            isAutocompleteVisible.value = false;
        }

        const filterSkills = () => {
            if (!skill.value || !skill.value.skill_name) {
                filteredSkills.value = [];
                isAutocompleteVisible.value = false;
                return;
            }

            filteredSkills.value = allSkills.value
                .map(skillItem => skillItem.name_eng)
                .filter(name => name && name.toLowerCase().includes(skill.value.skill_name.toLowerCase()));

            isAutocompleteVisible.value = filteredSkills.value.length > 0;
        }


     
        // Function to set input value to selected suggestion
       
        return {
            skill,
            skills,
            addSkill,
            deleteSkill,
            saveSkills,
            trackChanges,
            filterSkills,
            suggestedSkills,
            isAutocompleteVisible,
            selectSkill,
            filteredSkills 
        };
    }
});
</script>

  

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import '../CreateProjectView/CreateProjectView.styles.scss';
  @import './SkillsView.styles.scss';
</style>

<style lang="scss" >
    @import '@/assets/styles/global.styles.scss';
    .preview-skill-container{
        .add-skill-container{
            input{
                border-radius: $radius-1 0 0 $radius-1 !important;
            }
            .skill-button{
                border-radius: 0 $radius-1 $radius-1 0  !important;
                background-color: $main-1;
                padding: .25rem 1rem;
                border: 1px solid $main-1;
                *{color: #fff;}
            }
        }

        .skill-bar{
            display: flex;
            align-items: center;
            padding-inline: 1rem;
            max-width: 500px;
            margin-block: 1rem;

            h5{width: 100%;}
            select{
                min-width: 25px;
                width: 25%;
                max-width: 75px;
                text-align: center;
                border: 1px solid $font-main;
                padding: .25rem .1rem;
                border-radius: $radius-1;
                margin-right: 1rem;
            }
            button.remove-skill{
                // background-color: $main-1;
                height: 100%;
                padding: .25rem .5rem;
                *{font-size: 16px; color: $red-1;}
            }
        }
    }
    .autocomplete-suggestions {
        border: 1px solid #ccc;
        max-height: 150px;
        overflow-y: auto;
        position: absolute;  /* Temporarily added for troubleshooting */
        background-color: white;  /* Temporarily added for troubleshooting */
        width: 200px;  /* Adjust based on your design */
        z-index: 1000;  /* Ensure it's above other elements */
    }
    .autocomplete-suggestions div {
        padding: 8px 12px;
        cursor: pointer;
        border-bottom: 1px solid #eee;
    }

    .autocomplete-suggestions div:hover {
        background-color: #f7f7f7;
    }
</style>