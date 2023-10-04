<template>
    <div id="account-modal">
        <div class="container">
            <h4 class="text-center mb-4">Edit {{title}}</h4>
            
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
    name: 'AccountModal',
    props: {
        title: {
            required: true,
            type: String
        }
    },
    setup() {
        const isModalToggle = ref<boolean>(true); 
        let modalBody:HTMLElement;
        let container:HTMLElement;
        let body:HTMLElement;        

        onMounted(
            ()=>{
                modalBody = document.querySelector('#account-modal')!;
                container = modalBody.querySelector('.container')!;
                body = document.querySelector('body')!;

                modalBody?.addEventListener('click', (e:MouseEvent)=>{
                    e.stopPropagation();
                    if (container.contains(e.target as Node)) return isModalToggle.value = true;
                    modalBody.classList.remove('active');
                    body.removeAttribute('style');
                    isModalToggle.value = false;                    
                })
            }
        )

        return{
            isModalToggle,
        }
    }, 
});
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './AccountModal.styles.scss';
</style>