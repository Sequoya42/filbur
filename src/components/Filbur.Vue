  <template>
<div>
	<h1>Filbur!</h1>
	<h6>{{verified}}</h6>
<div v-if="verified">
	Stuff upload and update
</div>
<div v-else
	class="form">
	<form @submit.prevent="worthy">
		<input type="password"
		placeholder="Toto"
		class="test"
			v-model="password" />
	</form>
</div>
</div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';
export default {
  name: 'Filbur',
  created() {
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
      axios
        .post('http://localhost:4200/secretStuff/pass', {
          stuff: this.password
        })
        .then(res => {
          console.log(res.data)
          if (res.data == 'success') this.verified = true;
          else {
            alert(res.data);
          }
        })
        .catch(e => console.error(e));
    }
  },
  components: {},
}
</script>

<style scoped>
.test {
  color: black;
  background-color: white
}
</style>
