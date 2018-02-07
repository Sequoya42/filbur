<template>
<div>
  <div v-for="(drawing, index) in drawings"
    :key="index">

    <div class="flex-container">
      <img class="thumb"
        :src="drawing.path" />
      <input v-model="drawing.name" />

      <button @click="update(drawing)">Update</button>
      <button @click="remove(drawing)">delete</button>
    </div>
  </div>

</div>


</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'updateDrawing',

  beforeCreate() {
    axios.get('http://localhost:4200/api/drawings').then(d => {
      d.data.forEach(e => e.path = `http://localhost:4200/${e.path}`)

      this.drawings = d.data;
    });
  },
  data: function() {
    return {
      drawings: {
        name: 'tryout'
      }
    };
  },
  computed: {},
  methods: {
    update(e) {
      axios
        .put('http://localhost:4200/api/drawings', {
          name: e.name,
          path: e.path,
          state: e.state,
          tags: e.tags
        })
        .then(response => console.log('success?'))
        .catch(e => console.error(e));
    },
    remove(e) {
      axios
        .delete('http://localhost:4200/api/drawings', {
          params: {
            name: e.name,
            jpg: e.path.split('/d/')[1]
          }
        })
        .then(response => {
          this.$store.dispatch('getDrawings');
          axios.get('http://localhost:4200/api/drawings').then(d => {
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
.thumb {
  width: 200px;
  height: 200px;
}

.update {
  width: 200px;
  height: 200px;
}
</style>
