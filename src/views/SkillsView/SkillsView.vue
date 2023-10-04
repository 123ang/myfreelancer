<template>
    <div class="body-section" id="expertise-skills">
        <div class="container">
            <div class="card">
                <a class="back-button" href="javascript:history.back()"><i class="fas fa-chevron-left me-2"></i>Back</a>
                
                <h2 class="mb-5 text-center">Expertise Skills</h2>

                <div class="form-container">
                    <form>
                        <div class="input-container">
                            <div class="login-form-container">                  
                                <label for="skill_name">Add skill:</label>
                                <div class="d-flex add-skill-container">
                                    <input type="text" id="skill_name">
                                    <button type="button" class="skill-button"><i class="fas fa-plus"></i></button>
                                </div>
                            </div>
                        </div>

                        <!-- preview -->
                        <span class="preview-skill-container">
                            <!-- <div class="skill-bar" id="skill-bar-1">
                                <select id="skill_1">
                                    <option value="1" selected>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>  
                                <h5>Skill 1</h5>                          
                                <button class="remove-skill" type="button"><i class="fas fa-trash-alt"></i></button>                                                
                            </div> -->
                        </span>

                        <small>* Rate your skill level from 1 to 5</small>

                        <div class="submit-button">
                            <button class="button-main login" type="submit">
                                {{
                                    urlTitle === UrlParamTitle.edit ? 'Save Changes' : 'Save'
                                }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">

import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'SkillsView',
  setup() {
    let bodySection:HTMLElement = document.querySelector('.body-section')!;
    let skillInputContainer:HTMLInputElement = document.querySelector('.add-skill-container')!;
    let previewContainer:HTMLInputElement = document.querySelector('.preview-skill-container')!;

    const UrlParamTitle = {
        edit: 'edit',
        add: 'add'
    }
    
    // Get Page theme from url
    const urlParams = new URLSearchParams(window.location.search);    
    const urlTitle = ref<string | null>(urlParams.get('title'));

    // setup add skill input
    const setupAddSkill = () => {
        const addButton = skillInputContainer.querySelector('button');
        const input = skillInputContainer.querySelector('input');
        addButton?.addEventListener('click', ()=>{
            if (!input?.value || !input.value.trim()) return;
            const newDiv = document.createElement('div');
            newDiv.classList.add('skill-bar');
            newDiv.innerHTML = `
                <select id="${input.value}">
                    <option value="1" selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>  
                <h5>${input.value}</h5>                          
                <button type="button" class="remove-skill"><i class="fas fa-trash-alt"></i></button>      
            `
            previewContainer.appendChild(newDiv);
            input.value = '';

            // setup remove button
            const remove = newDiv.querySelector('.remove-skill');
            remove?.addEventListener('click', ()=>{
                newDiv.remove();
            })            
        })
    }
    
    
    onMounted(()=>{
        bodySection = document.querySelector('.body-section')!;
        skillInputContainer = document.querySelector('.add-skill-container')!;
        previewContainer = document.querySelector('.preview-skill-container')!;

        // add class to body-section
        urlTitle.value && bodySection.classList.add(urlTitle.value);

        setupAddSkill()

    })

    return{
        urlTitle,
        UrlParamTitle
    }
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