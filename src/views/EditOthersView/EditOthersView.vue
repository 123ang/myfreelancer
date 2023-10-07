<template>
    <div class="body-section" id="edit-others">
        <div class="container">
            <div class="card">
                <a class="back-button" href="javascript:history.back()"><i class="fas fa-chevron-left me-2"></i>{{ $t('message.back') }}</a>
                
                <h2 class="mb-5 text-center">{{ $t('message.editOtherInfo') }}</h2>

                <div class="form-container">
                    <form @submit.prevent="saveChanges">
                        <div class="row">
                            <!-- Year Experience -->
                            <div class="col-12">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="job-title">{{ $t('message.yearExperience') }}:</label>
                                        <input type="number" v-model="yearExperience">
                                    </div>
                                </div>
                            </div>

                            <!-- Expect payment -->
                            <div class="col-12">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="company-name">{{ $t('message.expectedPayment') }}: (RM / {{ $t('message.hour') }})</label>
                                        <input type="number" min="10" v-model="expectedPayment">
                                    </div>
                                </div>
                            </div>

                            <!-- Cover Notes -->
                            <div class="col-12">
                                <div class="input-container">
                                    <div class="login-form-container">                  
                                        <label for="description">{{ $t('message.coverNotesOptional') }}:</label>
                                        <textarea v-model="coverNotes" rows="5"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="submit-button">
                            <button class="button-main login" type="submit">{{ $t('message.saveChanges') }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'EditOthersView',
    setup() {
        const store = useStore();

        // Reactive references
        const yearExperience = ref<number | null>(null);
        const expectedPayment = ref<number | null>(null);
        const coverNotes = ref<string>('');

        // Fetch user's current details
        const fetchUserDetails = async () => {
            const url = `${store.state.host_url}user/profile/${store.state.user_id}`;
            try {
                const response = await axios.post(url);
                yearExperience.value = response.data.user.year_experience ?? '';
                expectedPayment.value = response.data.user.wage_per_hour ?? '';
                coverNotes.value = response.data.user.cover_note ?? "";
               
            } catch (error) {
                alert("Error fetching user details. Please try again.");
            }
        };

        onMounted(fetchUserDetails);

        const saveChanges = async () => {
            const apiUrl = store.state.host_url + 'user/update-others';
            try {
                const response = await axios.post(apiUrl, {
                    year_experience: yearExperience.value,
                    wage_per_hour: expectedPayment.value,
                    cover_note: coverNotes.value,
                    user_id: store.state.user_id
                });

                if (response.data.success) {
                    alert("Changes saved successfully!");
                } else {
                    alert(response.data.message);
                }
            } catch (error) {
                alert("Error updating information. Please try again.");
            }
        };

        return {
            yearExperience,
            expectedPayment,
            coverNotes,
            saveChanges
        };
    }
});
</script>



  

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import '../CreateProjectView/CreateProjectView.styles.scss';
  @import './EditOthersView.styles.scss';
</style>
