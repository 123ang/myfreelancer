<template>
  <section id="latest-project">
      <div class="container">
          <div class="text-center mb-5">
              <h2 class="title">{{$t('message.latestProject')}}</h2>
              <p>{{ $t('message.latestProjectDescription', { email: 'myfreelancermy@gmail.com' }) }}
</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">

              <!-- Display Cards -->
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
                <a href="/all-projects">
                  <div class="card">
                    <div class="button">
                      <h4>{{$t('message.viewMore')}}</h4>
                    </div>
                  </div>
                </a>
              </div>

          </div>
      </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import DisplayCard from '../DisplayCard/DisplayCard.components.vue';
import CardDetails from '../DisplayCard/types';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'Latestproject',
  components: {
    DisplayCard,
  },
  setup() {
    const cardDatas = ref<CardDetails[]>([]);
    const store = useStore();
    const fetchLatestProjects = async () => {
      try {
        const apiUrl = store.state.host_url + 'latest-projects';
        const response = await axios.get(apiUrl); // Modify to the correct endpoint
        if (response.data && response.data.projects) {
          cardDatas.value = response.data.projects;
        }
      } catch (error) {
        console.error('Error fetching latest projects:', error);
      }
    };

    onMounted(fetchLatestProjects);

    return {
      cardDatas
    }
  },
});
</script>


<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './LatestProject.styles.scss';
</style>
