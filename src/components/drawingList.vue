<template>
<v-container fluid
  style="min-height: 0;"
  grid-list-xl>
  <drawingModal v-if="show"
    v-on:close="show=false"
    :img="selected"></drawingModal>
  <v-layout row
    v-else
    wrap
    v-for="(d, index) in drawings"
    :key="d.key">
    <v-flex class="testWesh"
      wrap
      text-xs-center>
      <img :src="d.fpath"
        height="90%"
        width="90%"
        @click="testModal(d.fpath)" />
      <h2>{{d.name}}</h2>
      <h4>{{d.description}}</h4>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import drawingModal from './drawingModal';
export default {
  name: 'Drawings',
  props: ['drawings'],

  data: function() {
    return {
      show: false,
      selected: '',
    };
  },
  computed: {},
  methods: {
    testModal(e) {
      console.log("Should be called", e)
      this.selected = e;
      console.log('this.selected', this.selected)
      this.show = !this.show;
      console.log('this.show', this.show)
    }
  },
  components: {
    drawingModal
  }
};
</script>

<style scoped>
.card {
  /*border: 5px solid var(--cyan);*/
  box-shadow: auto red;
  padding: 5px;
  margin: 5px;
}

.card img {
  height: 30vh;
  max-height: 40vh;
  width: auto;
}

.testWesh {
  max-height: 40vh;
  width: auto;
  max-width: 60vw;
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
