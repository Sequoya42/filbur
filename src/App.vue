<template>
<v-app dark>
  <TheHeader>
  </TheHeader>
  <!-- <img src="./assets/logo.png"> -->
  <router-view/>
</v-app>
</template>

<script>
import TheHeader from './components/TheHeader';

export default {
  name: 'app',

  components: {
    TheHeader
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*margin-top: 60px;*/
}
</style>
