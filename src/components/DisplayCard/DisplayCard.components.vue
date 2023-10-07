<template>
    <div class="card-container" v-for="data in CardDatas" :key="data.ID">
        <div class="card">
            <h4>{{ data.title }}</h4>
            <div class="skill-container">
                <small class="badge" v-for="skill in data.project_skills" :key="skill.ID">{{ skill.skill_name || $t('message.noSkill') }}</small>
            </div>
            <hr class="my-3">
            <div class="d-flex mb-3">
                <p>{{$t('message.price')}}: </p>
                <div class="ms-2 d-flex">
                    <p>RM</p>
                    <p>{{ data.budget }}</p>
                </div>
            </div>
            <div class="button-container my-3">
                <a :href="'/project/' + data.ID" class="button">{{$t('message.viewDetails')}}</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CardDetails from './types';

export default defineComponent({
  name: 'DisplayCard',
  props: {
    CardDatas: {
        required: true,
        type: Array as PropType<CardDetails[]>
    }
  },
});
</script>


<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './DisplayCard.styles.scss';
</style>
