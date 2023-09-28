<template>
  <div class="navbar-container ">
    <div class="container">
      <a href="/" class="logo">
        <img src="@/assets/images/logo.png" alt="logo" loading="lazy" height="40">
      </a>
      <div :class="{'nav-link-container':true, active: isMenuToggle}">
        <div class="link close-button" @click="closeMenu"><i class="fas fa-times"></i></div>
        <a href="/my-project" class="link">PROJECT</a>          
        <a href="/my-account" class="link">ACCOUNT</a>          
        <a href="#logout" class="link">LOGOUT</a>          
        <a href="/login" class="link">LOGIN</a>          
      </div>
      <div :class="{'language-container': true, active: isLanguageActive}" @click="toggleLanguage">
        <div class="language-icon"><i class="bi bi-translate"></i></div>
        <div class="language-box">
          <div class="language-option active">English</div>
          <div class="language-option ">Bahasa Melayu</div>
        </div>
      </div>
      <div class="mobile-menu" @click="toggleMenu"><i class="fas fa-bars"></i></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Navbar',
  props: {},
  setup() {
    const isLanguageActive = ref<boolean>(false);
    const isMenuToggle = ref<boolean>(false);

    // toggle language box
    const toggleLanguage = (e:MouseEvent):void => {
      e.stopPropagation();
      isLanguageActive.value = !isLanguageActive.value;
    };

    // toggle out mobile menu
    const toggleMenu = (e:MouseEvent):void => {
      e.stopPropagation();
      isMenuToggle.value = true;
    }

    const closeMenu = (e:MouseEvent):void =>{
      e.stopPropagation();
      isMenuToggle.value = false;
    }
    
    // 

    return{ 
      isLanguageActive, 
      toggleLanguage,
      isMenuToggle,
      toggleMenu,
      closeMenu,
    }
  }
});

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './Navbar.styles.scss';
</style>
