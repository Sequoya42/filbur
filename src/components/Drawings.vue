<template>
<v-flex>
  <v-menu offset-y>
    <v-btn slot="activator">Categories</v-btn>
    <v-list>
      <v-list-tile v-for="i in categories"
        :value="choice == i"
        :key="i"
        @click="test(i)">
        <v-list-tile-title> {{i}}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
  <drawingList :drawings="filtered"></drawingList>
</v-flex>
</template>

<script>
import drawingList from './drawingList.vue';

import {
  mapGetters,
  mapActions
} from 'vuex';

export default {
  name: 'Drawings',
  created() {
    this.$store.dispatch('getDrawings');
  },

  data: function() {
    return {
      choice: 'all'
    };
  },
  computed: {
    ...mapGetters(['filtered', 'selected', 'categories']),
  },
  methods: {
    ...mapActions(['selectDrawing', 'filterByCat']),
    test(d) {
      this.choice = d;
      this.filterByCat(d);
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
