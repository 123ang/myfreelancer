<template>
    <div class="body-section" id="expertise-skills">
        <div class="container">
            <div class="card">
                <a class="back-button" href="javascript:history.back()"><i class="fas fa-chevron-left me-2"></i>{{ $t('general.back') }}</a>
                
                <h2 class="mb-5 text-center">{{ $t('skills.addExpertiseSkills') }}</h2>

                <div class="form-container">
                    <form>
                        <div class="input-container">
                            <div class="login-form-container">                  
                                <label for="skill_name">{{ $t('skills.addSkillLabel') }}</label>
                                <div class="d-flex add-skill-container">
                                    <input type="text" v-model="skill.skill_name" :placeholder="$t('skills.skillPlaceholder')">
                                    <button type="button" class="skill-button" @click="addSkill"><i class="fas fa-plus"></i></button>
                                </div>
                            </div>
                        </div>

                        <span class="preview-skill-container">
                            <div 
                                class="skill-bar" 
                                v-for="s in skills" 
                                :key="s.ID">
                                <select v-model="s.skill_proficiency">
                                    <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
                                </select>
                                <h5>{{ s.skill_name }}</h5>
                                <button type="button" class="remove-skill" @click="deleteSkill(s.ID)"><i class="fas fa-trash-alt"></i></button>
                            </div>
                        </span>

                        <small>{{ $t('skills.rateSkill') }}</small>

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
        const skill = ref<Skill>({
            user_id: store.state.user_id,
            ID: 0,
            skill_name: '',
            skill_proficiency: 1,
            created_by: 1, // Same as user_id
            updated_by: 1, // Same as user_id
            status: 1
        });

        const skills = ref<Skill[]>([]);
        const store = useStore();
        const get_user_api = store.state.host_url + "user-skills?user_id="+ store.state.user_id;
        const store_user_api = store.state.host_url + "user-skill";
   
        const fetchSkills = async () => {
            try {
                const response = await axios.get(get_user_api);
                skills.value = response.data; // Assuming the endpoint returns an array of skills
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
                const response = await axios.post(store_user_api, skill.value);
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

        onMounted(fetchSkills);

        return {
            skill,
            skills,
            addSkill,
            deleteSkill
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
</style>