  <template>
<v-layout align-center justify-center>
<v-flex class="form">
	<form @submit.prevent="worthy">
		<input type="password"
		placeholder="demo"
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
    this.password = ''
  },
  data: function() {
    return {}
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
          this.$store.dispatch('setFilbur', res.data.filbur)
          if (res.data.filbur) {
            this.$router.push({
              name: 'BackOffice'
            });
          } else {
            this.password = ''
            alert(res.data);
          }
        })
        .catch(e => console.error('np'));
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
