  <template>
		<v-layout justify-center
			wrap>
			<draggable v-model='drawings'
				class="rs-flex">
				<v-flex v-for="(drawing, index) in drawings"
					:key="index"
					:class="[ 'xs'+ drawing.size]"
					pa-3>
					<v-card class="drawing" raised :id="drawing.name">
						<v-card-media :height="(drawing.size * 2.5) + 'vh'"
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
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex';

import draggable from 'vuedraggable';

export default {
  name: 'updateDrawingDraggable',

  data: function() {
    return {}
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
    ...mapActions(['updateItem', 'removeItem'])
  },
  components: {
    draggable
  },
}
</script>

<style scoped>
</style>
