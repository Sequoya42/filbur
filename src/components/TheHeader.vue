<template>
<v-toolbar class="choiceBar">
  <v-btn flat
    @click="redirect('Presentation')">The Amazing Britte</v-btn>
  <v-spacer></v-spacer>
  <v-btn flat
    @click="redirect('Drawings')">Oeuvres</v-btn>

</v-toolbar>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex';
import mixins from '../mixins.js';

export default {
  name: 'myHeader',
  mixins: [mixins],

  data: function() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>

<style scoped>
.choiceBar {
  justify-content: space-around;
}

.space button {}
</style>
