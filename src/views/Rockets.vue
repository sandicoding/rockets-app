<template>
    <section class="container">
        <NewRocketForm/>
    </section>
</template>
<script>
import NewRocketForm from '@/components/NewRocketForm.vue';
import API from '@/lib/API';

export default {
  name: 'rockets',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    NewRocketForm,
  },
  data: () => ({
    rockets: [],
  }),
  async mounted() {
    const rockets = await API.getRockets();
    console.log(rockets);
  },
};
</script>
