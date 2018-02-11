  <template>
<v-card>
	<v-card-media class='drawing' :src="img" contain height="90vh" @click="$emit('close')"></v-card-media>
</v-card>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'drawingModal',
  props: ['img'],
  data: function() {
    return {}
  },
  computed: {},
  methods: {},
  components: {},
}
</script>

<style scoped>
.Argh {
  width: 80vw;
  max-height: 80vh;
  height: auto;
}
</style>
