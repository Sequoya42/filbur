<template>
<v-layout>
  <drawingList :drawings="getAll"></drawingList>
</v-layout>
</template>

<script>
import drawingKeep from './drawingKeep.vue';
import drawingList from './drawingList.vue';

import {
  mapGetters,
  mapMutations
} from 'vuex';

export default {
  name: 'Drawings',
  created() {
    this.$store.dispatch('getDrawings');
  },

  data: function() {
    return {
      choice: 'keep'
    };
  },
  computed: {
    ...mapGetters(['getAll', 'selected'])
  },
  methods: {
    ...mapMutations(['selectDrawing'])
  },
  components: {
    drawingList,
    drawingKeep
  }
};
</script>

<style>
.choiceBar {
  justify-content: center;
}

.selectedContainer {
  margin-bottom: 2vh;
  margin-left: 5vw;
  margin-right: 5vw;
  background-color: black;
}

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
