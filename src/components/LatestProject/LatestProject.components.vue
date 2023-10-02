<template>
  <section id="latest-project">
      <div class="container">
          <div class="text-center mb-5">
              <h2 class="title">{{$t('message.latestProject')}}</h2>
              <p>{{$t('message.latestProjectDescription')}}</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">

              <!-- card -->
              <DisplayCard v-if="cardDatas.length > 0" :CardDatas="cardDatas" />

              <!-- If there is no latest project -->
              <div v-else class="card-container null">
                <div class="card">
                    <div class="button">
                      <h4>{{$t('message.noProjectTitle')}}</h4>
                      <p>{{$t('message.noProjectDescription')}}</p>
                    </div>
                </div>
              </div>

              <!-- VIEW MORE CARD -->
              <div class="card-container view-more">
                <div class="card">
                  <a href="#view-more">
                    <div class="button">
                      <h4>{{$t('message.viewMore')}}</h4>
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
