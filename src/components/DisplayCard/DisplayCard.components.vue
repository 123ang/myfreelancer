<template>
    <div class="card-container" v-for="data in CardDatas" :key="data.id">
        <div class="card">
            <h4>{{ data.title }}</h4>
            <div class="skill-container">
                <small class="badge" v-for="skill in data.skill" :key="skill">{{ skill || 'No Skill Requirement' }}</small>
            </div>
            <hr class="my-3">
            <div class="d-flex mb-3">
                <p>Price: </p>
                <div class="ms-2 d-flex">
                    <p>RM</p>
                    <p>{{ data.price }}</p>
                </div>
            </div>
            <div class="button-container my-3">
                <a :href="data.url" class="button">VIEW DETAILS</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CardDetails from './types';

export default defineComponent({
  name: 'DisplayCard',
  components: {},
  props: {
    CardDatas: {
        required: true,
        type: Object as PropType<CardDetails[]>
    }
    
  },
});
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './DisplayCard.styles.scss';
</style>
