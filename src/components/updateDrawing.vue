<template>
<v-container fluid>
  <v-btn fixed
    bottom
    right
    fab
    large
    color="green"
    @click="updateDrawingsAndSave">SAVE</v-btn>
  <v-snackbar :timeout="2000"
    v-model="saved"
    color="blue"
    top>
    <p>
      Succesfully Saved
    </p>
  </v-snackbar>
  <v-menu>
    <v-btn slot="activator">Categories</v-btn>
    <v-list>
      <v-list-tile v-for="i in categories"
        :value="choice == i"
        :key="i"
        @click="filterByCat(i)">
        <v-list-tile-title> {{i}}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
  <updateDrawingDraggable></updateDrawingDraggable>
</v-container>
</template>

<script>
import axios from '../services/axios';
import updateDrawingDraggable from './updateDrawingDraggable';
import {
  mapGetters,
  mapActions
} from 'vuex';
export default {
  name: 'updateDrawing',

  beforeCreate() {
    this.$store.dispatch('getDrawings');
  },
  data: function() {
    return {
      choice: 'all',
      saved: false
    };
  },
  computed: {
    ...mapGetters(['categories', 'filtered'])
  },

  methods: {
    ...mapActions(['filterByCat', 'updateDrawings']),

    updateDrawingsAndSave() {
      this.updateDrawings();
      this.saved = true;
    },
  },
  components: {
    updateDrawingDraggable
  }
};
</script>

<style>
</style>
