<template>
<v-container fluid
  style="min-height: 0;"
  grid-list-xl
  align-center>
  <v-layout row
    align-center
    v-for="(d, index) in drawings"
    :key="d.key">
    <v-flex class="text-xs-center">
      <v-card align-center>
        <v-card-title>{{d.name}}</v-card-title>
        <img :src="d.path" />

        <!-- <v-card-media :src="d.path"
			height="200px"></v-card-media> -->
      </v-card>
    </v-flex>

  </v-layout>
</v-container>


<!-- <div class="grid-container">
		<div v-for="(d, index) in drawings" :key="d.key">
			<div class="card">
			<img :src="d.path"/>
		</div>
		</div>
	</div> -->
</template>

<script>
export default {
  name: 'Drawings',
  props: ['drawings'],

  data: function() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
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
  max-width: 90vw;
  max-height: 90vh;
  width: auto;
  height: auto;
}
</style>
