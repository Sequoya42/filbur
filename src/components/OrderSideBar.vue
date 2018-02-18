  <template>
		<v-navigation-drawer app clipped
		fixed right
		permanent
		hide-overlay
		mini-variant.sync width="200">
			<draggable v-model="drawings">
				<v-layout v-for="(drawing, index) in drawings"
					:key="index"
					:class="[ 'xs'+ drawing.size]"
					pa-3>
					<v-card append :to="{hash: drawing.name.replace(' ', '_')}">
						<v-card-media :src="drawing.fpath" height="20px" contain></v-card-media>
						{{drawing.name}}
					</v-card>
				</v-layout>

			</draggable>
		</v-navigation-drawer>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'OrderSideBar',

  data: function() {
    return {}
  },
  computed: {
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
  methods: {},
  components: {
    draggable
  },
}
</script>

<style scoped>

</style>
