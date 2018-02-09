  <template>
<div>
	<img class="Argh"
	:src="img" @click="$emit('close')" />
</div>
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
