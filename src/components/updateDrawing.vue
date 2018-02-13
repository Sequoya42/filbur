<template>
<v-container fluid
  style="width:100vw">
  <v-btn color="green"
    fixed
    dark
    bottom
    fab
    large
    right
    @click="updateDrawingsAndSave">SAVE</v-btn>

  <h1>{{updated}}</h1>
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
  <v-layout justify-center
    wrap>
    <draggable v-model='drawings'
      class="rs-flex">
      <v-flex v-for="(drawing, index) in drawings"
        :key="index"
        :class="[ 'xs'+ drawing.size]"
        pa-3>
        <v-card>
          <v-card-media :height="(drawing.size * 6.5) + 'vh'"
            contain
            :src="drawing.fpath">
          </v-card-media>
          <v-text-field single-line
            hint="name"
            persistent-hint
            :value="drawing.name"
            clearable
            @input="updateItem({index: drawing.order, value: $event,field: 'name'})">
          </v-text-field>
          <v-text-field single-line
            hint="category"
            persistent-hint
            clearable
            :value="drawing.category"
            @input="updateItem({index: drawing.order, value: $event,field: 'category'})">
          </v-text-field>
          <v-text-field single-line
            hint="size"
            type="number"
            min="2"
            max="12"
            persistent-hint
            :value="drawing.size"
            @input="updateItem({index: drawing.order, value: $event,field: 'size'})">
          </v-text-field>
          <v-text-field multi-line
            hint="description"
            persistent-hint
            clearable
            :value="drawing.description"
            @input="updateItem({index: drawing.order, value: $event,field: 'description'})">
          </v-text-field>
          <v-btn @click="removeItem(drawing)">delete</v-btn>
        </v-card>
      </v-flex>
    </draggable>
  </v-layout>
</v-container>
</template>

<script>
import axios from '../services/axios';
import draggable from 'vuedraggable';
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
    ...mapGetters({
      categories: 'categories',
      filtered: 'filtered',
      updated: 'updated',
    }),
    drawings: {
      get() {
        return this.$store.getters.filtered;
      },
      set(value) {
        value = value.map(e => e.order)
        this.$store.dispatch('newOrder', value)
      }
    },
  },

  methods: {
    ...mapActions(['filterByCat', 'updateDrawings', 'updateItem', 'removeItem']),

    updateDrawingsAndSave() {
      this.updateDrawings();
      this.saved = true;
    },
  },
  components: {
    draggable
  }
};
</script>

<style>
</style>
