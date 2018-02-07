<template>
	<div>
	{{selected}}
	<h1 @click="show = !show">Les dessins en mode Keep</h1>
	<div class="flex-container custom">
		<div v-for="(d, index) in drawings" :key="d.key">
			<div class="card">
			<img @click="selectDrawing(d.path)" :src="d.path"/>
			{{d.name}} 
		</div>
		</div>
	</div>
</div>

</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Drawings',
  props: ['drawings'],

  data: function() {
    return {
      show: false,
      selected: 'bleurg'
    };
  },
  computed: {},
  methods: {
    ...mapMutations(['selectDrawing'])
  },
  components: {}
};
</script>

<style scoped>
.custom {
	justify-content: center;
}

.card {
	display: flex;
	flex-direction: column;
	padding: 5px;
	margin: 5px;
}
.card img{
	max-width:36vh;
	width: auto;
	height: auto;
}
</style>
