<template>
  <div class="body-section">
    <div class="container">
        <div class="card">
            <h2>Create Project</h2>
            <hr>
            <!-- title -->
            <div class="input-container">
              <label for="project_title">Project Title:</label>
              <input type="text" id="project_title" name="project_title">
            </div>
            <!-- description -->
            <div class="input-container">
              <label for="project_title">Project Description:</label>
              <textarea id="project_description" name="project_description" rows="5"></textarea>
            </div>
            <!-- budget -->
            <div class="input-container">
              <label for="project_budget">Project Budget ( RM ) :</label>
              <input type="number" id="project_budget" name="project_budget" min=100 value="100">
            </div>
            <!-- skills -->
            <div class="input-container">
              <label>Require Skill:</label>
              <div class="skill-container">
                <input type="text" class="add-skill-input">
                <div class="add-skill-button">Add</div>
              </div>
              <div class="ms-3 grid grid-cols-1 gap-y-4" id="added-skill">
                <!-- SKILLS -->
              </div>
            </div>   
            <input type="text" id="require_skills" name="require_skills" value="" hidden>

            <div class="submit-button">
              <button>Create</button>
            </div>        
        </div>            
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue';

  export default defineComponent({
    name: 'CreateProjectView',
    props: {},
    setup() {
      let addedSkillContainer:HTMLElement;
      let addSkillButton:HTMLElement;    
      let addSkillInput:HTMLInputElement;
      let requireSkills:NodeListOf<HTMLElement> | null;
      let mainInput:HTMLInputElement;
      const skillSet: string[] = [];

      // check skill requirement
      const checkSkills = ():void => {
        addedSkillContainer.innerHTML = '';
        if (skillSet.length) {          
          skillSet.forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.setAttribute('class', 'require-skill');
            skillDiv.innerHTML = `
              <div class="text-container">${skill}</div>
              <div class="icon-container delete-button"><i class="fas fa-trash-alt"></i></div>
            `
            addedSkillContainer?.appendChild(skillDiv);            
          });
          requireSkills = document.querySelectorAll('.require-skill');
          setupDeleteSkill();
        } else {
          const noSkill = document.createElement('div');
          noSkill.innerHTML = 'No skill requiment';
          addedSkillContainer?.appendChild(noSkill);
          requireSkills = document.querySelectorAll('.require-skill');
        }             
        mainInput.value = skillSet.join(",")                     
      }     

      // set function for add skill button
      const setupAddSkillButton = () => {
        addSkillButton.addEventListener('click', (e)=>{          
          e.stopPropagation();
          if (!addSkillInput.value) return;
          const value = document.createTextNode(addSkillInput.value)?.nodeValue ?? '';
          skillSet.push(value);
          checkSkills();          
          addSkillInput.value = '';          
        })
      }

      // delete added skill
      const setupDeleteSkill = () => {    
        if (!requireSkills?.length) return;
        requireSkills.forEach((requireSkill, num) => {
          const deleteButton = requireSkill.querySelector('.delete-button');
          
          deleteButton?.addEventListener('click', (e)=>{            
            e.stopPropagation();
            skillSet.splice(num,1);
            requireSkill.remove();
            checkSkills();
          })          
        });
      }

      onMounted(()=>{
        addedSkillContainer = document.querySelector('#added-skill')!;
        addSkillButton = document.querySelector('.add-skill-button')!;
        addSkillInput = document.querySelector('.add-skill-input')!;        
        mainInput = document.querySelector('#require_skills')!;
        
        checkSkills();
        setupAddSkillButton();        
      })
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
</style>
