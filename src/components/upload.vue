<template>
<div>
  <div v-if="verified">
    <button @click="choice='drawings'">Drawings</button>
    <uploadDrawing v-if="choice == 'drawings'"></uploadDrawing>
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
import uploadDrawing from './uploadDrawing.vue';
import axios from 'axios';
export default {
  name: 'upload',

  created() {
    this.password = '';
  },

  data: function() {
    return {
      choice: 'drawings',
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
    uploadDrawing,
  }
};
</script>

<style scoped>
.upload {
  width: 200px;
  height: 200px;
}

.form {
  color: blue;
  padding: 10%;
}
</style>
