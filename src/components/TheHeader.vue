<template>
<v-toolbar fixed
  app
  class="choiceBar">
  <v-btn flat
    @click="redirect('Presentation')">The Amazing Britte</v-btn>
  <v-spacer></v-spacer>

  <v-menu>
    <v-btn slot="activator">Oeuvres</v-btn>
    <v-list>
      <v-list-tile v-for="i in categories"
        v-if="i !== 'all'"
        :value="choice == i"
        :key="i"
        @click="redirectFiltered(i)">
        <v-list-tile-title> {{i}}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</v-toolbar>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex';
import mixins from '../mixins.js';

export default {
  name: 'myHeader',
  mixins: [mixins],

  data: function() {
    return {
      choice: this.$route.params.name || 'all'
    };
  },
  computed: {
    ...mapGetters(['categories'])
  },
  methods: {
    redirectFiltered(d) {
      this.choice = d;
      this.$store.dispatch('filterByCat', d);
      this.$router.push({
        name: 'Drawings',
        params: {
          category: d
        }
      })
    }
  },
  components: {}
};
</script>

<style scoped>
.choiceBar {
  justify-content: space-around;
}

.space button {}
</style>
