  <template>
<v-layout align-center justify-center>
<div v-if="verified">
	<Upload></Upload>
	<v-spacer></v-spacer>
	<hr />
	<Update></Update>
	Stuff upload and update
</div>
<v-flex v-else
	class="form">
	<form @submit.prevent="worthy">
		<input type="password"
		placeholder="Toto"
		class="test"
		v-model="password" />
	</form>
</v-flex>
</v-layout>
</template>

<script>
import axios from '../services/axios';
import Upload from './uploadDrawing';
import Update from './updateDrawing';

export default {
  name: 'Filbur',
  created() {
    console.log('filbur')
    this.password = '';
  },

  data: function() {
    return {
      verified: false
    }
  },
  computed: {},
  methods: {
    worthy() {
      console.log('should be called')
      axios
        .post('/secretStuff/pass', {
          stuff: this.password
        })
        .then(res => {
          console.log('WESH')
          console.log(res.data.filbur)
          this.$store.dispatch('setFilbur', res.data.filbur)
          if (res.data.filbur) this.verified = true;
          else {
            this.password = ''
            alert(res.data);
          }
        })
        .catch(e => console.error(e));
    }
  },
  components: {
    Upload,
    Update,
  },
}
</script>

<style scoped>
.test {
  color: black;
  background-color: white
}
</style>
