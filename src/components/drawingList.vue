<template>
<v-container fluid
  style="padding-top:100px"
  class="debug3"
  grid-list-xl>
  <drawingModal v-if="show"
    v-on:close="show=false"
    :img="selected"></drawingModal>
  <v-layout v-else
    class="debug2"
    style="justify-content: space-between;"
    wrap>
    <transition-group name="list"
      class="debug">
      <v-flex xs6
        class="test"
        style="padding: 100px"
        v-for="(d, index) in drawings"
        :key="d.name">
        <v-card ripple
          raised>
          <v-card-media :src="d.fpath"
            height="80vh"
            contain>
          </v-card-media>
          <v-card-title primary-title>
            <h2>{{d.name}}</h2>
          </v-card-title>
          <v-card-text>
            <h4>{{d.description}}</h4>
          </v-card-text>
        </v-card>
      </v-flex>
    </transition-group>
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
.thumb {
  width: inherit !important;
  /* max-width: 50vw;
  max-height: 80vh; */
}


/* from : http://taha-sh.com/blog/the-ridiculously-easy-way-to-animate-your-applications-with-vuejs */

.list {
  backface-visibility: hidden;
  z-index: 1;
}

/* moving */

.list-move {
  transition: all 800ms ease-in-out 50ms;
}

/* appearing */

.list-enter-active {
  transition: all 800ms ease-out;
}

/* disappearing */

.list-leave-active {
  transition: all 800ms ease-in;
  /* position: absolute; */
  /* z-index: 0; */
}

/* appear at / disappear to */

.list-enter,
.list-leave-to {
  opacity: 0;
}
</style>
