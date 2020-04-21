<template>
  <div id="app">
    <NavBar/>
    <Rockets/>
  </div>
</template>

<script>
import Rockets from '@/views/Rockets.vue';
import NavBar from '@/components/NavBar.vue';


export default {
  name: 'App',
  components: {
    Rockets,
    // eslint-disable-next-line vue/no-unused-components
    NavBar,
  },
};
</script>

<style>

</style>
