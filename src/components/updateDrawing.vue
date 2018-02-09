<template>
<div>
  <div v-for="(drawing, index) in drawings"
    :key="index">

    <div class="flex-container">
      <img class="thumb"
        :src="drawing.fpath" /> Name <input class="test"
        v-model="drawing.name" /> Category
      <input class="test"
        v-model="drawing.category" /> Description
      <input class="test"
        v-model="drawing.description" />

      <button class="green"
        @click="update(drawing)">Update</button>
      <button class="red flat"
        @click="remove(drawing)">delete</button>
    </div>
  </div>

</div>


</div>
</template>

<script>
import axios from '../services/axios';
export default {
  name: 'updateDrawing',

  beforeCreate() {
    axios.get('/drawings').then(d => {
      d.data.forEach(e => e.fpath = `http://localhost:4200/${e.path}`)
      this.drawings = d.data;
    });
  },
  data: function() {
    return {
      drawings: {}
    };
  },
  computed: {},
  methods: {
    update(e) {
      axios
        .put('/drawings', e)
        .then(response => console.log('success?'))
        .catch(e => console.error(e));
    },
    remove(e) {
      axios
        .delete('/drawings', {
          params: {
            name: e.name,
            jpg: e.path.split('/d/')[1]
          }
        })
        .then(response => {
          this.$store.dispatch('getDrawings');
          axios.get('/drawings').then(d => {
            this.drawings = d.data;
          });
          console.log('success?');
        })
        .catch(e => console.error(e));
    }
  },
  components: {}
};
</script>

<style>
.test {
  background-color: white;
  color: black;
}

.thumb {
  width: 200px;
  height: 200px;
}

.update {
  width: 200px;
  height: 200px;
}
</style>
