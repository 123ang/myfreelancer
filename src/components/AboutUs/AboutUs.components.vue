<template>
  <div id="about-us">
    <div class="container">
        <div class="content-container">
            <h2>Welcome to MyFreeLancer!</h2>
            <p>
                Founded in 2023, MyFreeLancer was conceived with a singular vision: to redefine the landscape of freelancing in the digital age. Our platform serves as a dynamic bridge, linking passionate professionals with businesses in search of exceptional talent.
            </p>
            <p>
                At the heart of our mission is the empowerment of freelancers from every corner of the globe. We're dedicated to providing them with the tools and opportunities needed to showcase their unique skills, foster meaningful connections, and elevate their professional journey. For businesses, MyFreeLancer promises not just quality but a dependable partnership, ensuring that they find the ideal match for their diverse projects.
            </p>
            <p>
                Rooted in values of trust, transparency, and ceaseless innovation, MyFreeLancer is not just a marketplace—it's a vibrant community. Here, aspirations converge with opportunities, crafting a space where dreams transition into tangible realities.
            </p>
            <p>
                Join us at MyFreeLancer, and let's collaboratively shape the future of freelancing!
            </p>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutUs',
  props: {},
  setup() {}
});

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.styles.scss';
  @import './AboutUs.styles.scss';
</style>
