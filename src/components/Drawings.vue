<template>
<v-container fluid>
  <v-layout>
    <v-flex>
      <h1>{{$route.params.name}}</h1>
    </v-flex>
  </v-layout>
  <drawingList :drawings="filtered"></drawingList>
</v-container>
</template>

<script>
import drawingList from './drawingList.vue';

import {
  mapGetters,
  mapActions
} from 'vuex';

export default {
  name: 'Drawings',

  data: function() {
    return {};
  },
  computed: {
    filtered() {
      return this.$store.getters.filtered
    }
  },
  methods: {
    filterByCat() {
      this.$store.dispatch('filterByCat')
    }
  },
  components: {
    drawingList,
  }
};
</script>

<style>
.selectedStuff {
  /*max-width: 90vw;*/
  max-height: 80vh;
  width: auto;
  height: auto;
}

.fade-enter-active {
  transition: opacity .5s;
}

.fade-leave-active {
  transition: opacity .2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>
