<template>
  <div class="body-section">
    <div class="container">
        <div class="card">
            <h2>Project Title</h2>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas vulputate sem. Nam vel sapien vel nulla commodo scelerisque at tincidunt enim. Phasellus ullamcorper elit non metus euismod porttitor. Quisque dui lorem, convallis sed luctus et, tempor ut nisl. In dictum hendrerit risus in eleifend. Ut vehicula orci nec odio commodo, in sagittis velit elementum. Aenean elementum velit in varius scelerisque. Maecenas vitae arcu quam. Curabitur convallis porttitor libero, sed convallis nulla tincidunt non. Phasellus nec gravida dolor, vitae aliquam velit. Curabitur fringilla mauris velit. Integer quis mi non sapien condimentum viverra in et enim. </p>
            <div class="skill-container">
                <small class="badge">No Skill Requirement</small>
                <small class="badge">No Skill Requirement</small>
            </div>

            <hr>
            
            <h5>Full Name</h5>
            <div class="contact-info-container">
                <div class="icon-container"><i class="fas fa-mobile-alt"></i></div>
                <p>012-3456789</p>
            </div>
            <div class="contact-info-container">
                <div class="icon-container"><i class="fas fa-envelope"></i></div>
                <p>email@mail.com</p>
            </div>
            
            <div class="budget-container mt-5">
                <div class="icon-container"><i class="fas fa-comments-dollar"></i></div>
                <b>Bids: </b>
                <p class="ms-1">5</p>
            </div>
            <div class="budget-container budget mt-1">
                <div class="icon-container"><i class="fas fa-comment-dollar"></i></div>
                <b>RM </b>
                <p class="ms-1">100</p>
            </div>

        </div>     

        <div class="back-button">
            <a href="javascript:history.back()">Back</a>
        </div>           
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectView',
  props: {},
  setup() {}
});

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './ProjectView.styles.scss';
</style>
