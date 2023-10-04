<template>
  <div class="body-section">
    <div class="search-container row">
        <div class="container">
            <div class="dropdown-container col-lg-6">
                <label for="field">Choose a field:</label>
                <select name="field" id="field">
                    <option value="all" selected >All</option>
                    <option value="option1">Field 1</option>
                    <option value="option1">Field 2</option>
                </select>
            </div>            
            <div class="dropdown-container col-lg-6">
                <label for="skill">Choose a skill:</label>
                <select name="skill" id="skill">
                    <option value="all" selected >All</option>
                    <option value="option1">skill 1</option>
                    <option value="option1">skill 2</option>
                </select>
            </div>            
        </div>
    </div>    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AllProjectsView',
  setup() {}
});
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './AllProjectsView.styles.scss';
</style>
