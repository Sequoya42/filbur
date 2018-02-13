  <template>
		<v-dialog
			 v-model="dialog"
			 transition="dialog-bottom-transition"
			 >
<v-card class="custom" flat>
	<v-card-media class='drawing' :src="img" contain height="82vh" @click="$emit('close')"></v-card-media>
</v-card>
</v-dialog>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'drawingModal',
  props: ['img', 'show'],
  created() {
    console.log("exist")
  },
  data: function() {
    return {
      dialog: this.show
    }
  },
  computed: {},
  methods: {},
  components: {},
}
</script>

<style scoped>
.custom {
  background-color: #303030 !important;
}
</style>
