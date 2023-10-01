<template>
  <div class="navbar-container ">
    <div class="container">
      <a href="/" class="logo">
        <img src="@/assets/images/logo.png" alt="logo" loading="lazy" height="40">
      </a>
      <div :class="{'nav-link-container':true, active: isMenuToggle}">
        <div class="link close-button" @click="closeMenu"><i class="fas fa-times"></i></div>
          <div v-if="isLogin">
            <a href="/my-project" class="link">{{ $t('message.project') }}</a>
            <a href="/my-account" class="link">{{ $t('message.account') }}</a>
            <a @click="logout" class="link">{{ $t('message.logout') }}</a>
          </div>
          <div v-else>
            <a href="/register" class="link">{{ $t('message.register') }}</a>         
            <a href="/login" class="link">{{ $t('message.login') }}</a>         
          </div>
      </div>
      <div :class="{'language-container': true, active: isLanguageActive}" @click="toggleLanguage">
        <div class="language-icon"><i class="bi bi-translate"></i></div>
        <div class="language-box">
          <div class="language-option active" @click="changeLanguage('en')">English</div>
          <div class="language-option" @click="changeLanguage('bm')">Bahasa Melayu</div>
          <div class="language-option" @click="changeLanguage('cn')">中文</div>
        </div>
      </div>
      <div class="mobile-menu" @click="toggleMenu"><i class="fas fa-bars"></i></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref,computed  } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Navbar',
  props: {},
  setup() {
    const isLanguageActive = ref<boolean>(false);
    const isMenuToggle = ref<boolean>(false);
    const store = useStore();
    const isLogin = computed(() => store.state.is_login);
    const router = useRouter();
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

    const logout = (e: MouseEvent): void => {
        e.preventDefault();
        store.commit('IsLogin', false); // Setting is_login to false
        router.push('/login'); // Redirecting to the login page
    };
    
    const changeLanguage = (lang: string): void => {
      store.commit('Language', lang);
    };

    return{ 
      isLanguageActive, 
      toggleLanguage,
      isMenuToggle,
      toggleMenu,
      closeMenu,
      logout,
      isLogin,
      changeLanguage
    }
  }
});

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './Navbar.styles.scss';
</style>
