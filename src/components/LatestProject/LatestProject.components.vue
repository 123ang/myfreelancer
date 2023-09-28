<template>
    <section id="latest-project">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="title">Latest Project</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper feugiat tortor, id ornare odio blandit vel. Donec sagittis ante in lectus convallis, sit amet. </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">

                <!-- card -->
                <DisplayCard v-if="cardDatas.length > 0" :CardDatas="cardDatas" />

                <!-- If there is no latest project -->
                <div v-else class="card-container null">
                  <div class="card">
                      <div class="button">
                        <h4>No Latest Project</h4>
                        <p>Press View More to Search for more project</p>
                      </div>
                  </div>
                </div>

                <!-- VIEW MORE CARD -->
                <div class="card-container view-more">
                  <div class="card">
                    <a href="#view-more">
                      <div class="button">
                        <h4>VIEW MORE</h4>
                      </div>
                    </a>
                  </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import DisplayCard from '../DisplayCard/DisplayCard.components.vue'
import CardDetails from '../DisplayCard/types'

export default defineComponent({
  name: 'Latestproject',
  components: {
    DisplayCard,
  },
  props: {},
  setup() {
    const dummyData: CardDetails[] = [
        {id: '1',title:'Title 1', skill: ['Vuejs'], price: 100, url: '#title1'},
        {id: '2',title:'Title 2', skill: ['JS', 'PHP'], price: 100, url: '#title2'},
        {id: '3',title:'Title 3', skill: [''], price: 100, url: '#title3'},
    ];

    const cardDatas = ref<CardDetails[]>(dummyData) 

    return{
        cardDatas
    }
  },
});

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './LatestProject.styles.scss';
</style>
