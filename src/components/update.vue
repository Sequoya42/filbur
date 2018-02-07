<template>
<div>
  <div v-if="verified">
    <button @click="choice='drawings'">Drawings</button>
    <updateDrawing v-if="choice == 'drawings'"></updateDrawing>
  </div>
  <div v-else
    class="form">
    <form @submit.prevent="worthy">
      <input type="password"
        v-model="password" />
    </form>
  </div>
</div>
</template>


<script>
// import { mapGetters, mapActions } from 'vuex';
import updateDrawing from './updateDrawing.vue';
import axios from 'axios';
export default {
  name: 'update',

  data: function() {
    return {
      choice: 'drawings',
      password: '',
      verified: false
    };
  },
  computed: {},
  methods: {
    worthy() {
      axios
        .post('http://localhost:4200/secretStuff/pass', {
          stuff: this.password
        })
        .then(res => {
          if (res.data == 'success') this.verified = true;
          else {
            alert(res.data);
          }
        })
        .catch(e => console.error(e));
    }
  },
  components: {
    updateDrawing,
  }
};
</script>

<style>
.upload {
  width: 200px;
  height: 200px;
}
</style>
