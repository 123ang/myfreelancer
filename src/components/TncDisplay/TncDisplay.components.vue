<template>
    <div id="tnc-display">
        <div class="container">
            <h4 class="text-center mb-4">TNC</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ex vitae justo porttitor vulputate in eget neque. Proin dictum blandit magna, lobortis condimentum massa tincidunt nec. Aliquam cursus sit amet nunc vel pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sem massa, euismod id tincidunt sagittis, congue id augue. Ut ut velit in neque scelerisque maximus. Ut fermentum tempus pulvinar. Proin commodo mattis purus, nec consectetur nisl rhoncus ut. Vivamus pellentesque euismod turpis id rutrum. Nulla euismod ut diam ac pellentesque. Proin consequat, purus et dictum porttitor, mauris ipsum gravida diam, sed tincidunt dolor neque quis augue. 
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ex vitae justo porttitor vulputate in eget neque. Proin dictum blandit magna, lobortis condimentum massa tincidunt nec. Aliquam cursus sit amet nunc vel pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sem massa, euismod id tincidunt sagittis, congue id augue. Ut ut velit in neque scelerisque maximus. Ut fermentum tempus pulvinar. Proin commodo mattis purus, nec consectetur nisl rhoncus ut. Vivamus pellentesque euismod turpis id rutrum. Nulla euismod ut diam ac pellentesque. Proin consequat, purus et dictum porttitor, mauris ipsum gravida diam, sed tincidunt dolor neque quis augue. 
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
    name: 'TncDisplay',
    components: {},
    setup() {
        const isTncToggle = ref<boolean>(true); 
        let tncModal:HTMLElement;
        let container:HTMLElement;
        let body:HTMLElement;        

        onMounted(
            ()=>{
                tncModal = document.querySelector('#tnc-display')!;
                container = tncModal.querySelector('.container')!;
                body = document.querySelector('body')!;

                tncModal?.addEventListener('click', (e:MouseEvent)=>{
                    e.stopPropagation();
                    if (container.contains(e.target as Node)) return isTncToggle.value = true;
                    tncModal.classList.remove('active');
                    body.removeAttribute('style');
                    isTncToggle.value = false;                    
                })
            }
        )

        return{
            isTncToggle,
        }
    }, 
});

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './TncDisplay.styles.scss';
</style>