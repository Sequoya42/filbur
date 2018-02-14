<template>
<v-container mt-5
  pt-5>
  <v-layout row
    xs6
    wrap
    justify-center>
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <h1>Upload new file</h1></v-card-title>
        <v-card-media v-if="image != ''"
          :src="image"
          contain
          height="20vh"></v-card-media>
        <input type='file'
          @change="uploadFile" />
        <v-text-field label="name"
          v-model="meta.name"></v-text-field>
        <v-text-field label="category"
          v-model="meta.category"></v-text-field>
        <v-text-field label="description"
          multi-line
          v-model="meta.description"></v-text-field>
        <v-btn @click="send">Submit</v-btn>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex';
import axios from '../services/axios';
export default {
  name: 'uploadDrawing',

  data: function() {
    return {
      image: '',
      meta: {
        name: '',
        category: '',
        description: '',
        img: 'image'
      }
    };
  },
  computed: {
    ...mapGetters(['drawLength'])
  },
  methods: {
    uploadFile(e) {
      let files = e.target.files;
      let reader = new FileReader();
      reader.onload = e => {
        this.image = e.target.result;
        this.meta.img = e.target.result;
      };
      reader.readAsDataURL(files[0]);
    },
    send() {
      if (this.image == '') alert('Please add an image first');
      else {
        this.meta.filename = this.meta.name + '.json';
        this.meta.path = this.meta.name + '.jpg';
        this.meta.size = 4;
        axios
          .post('/drawings', this.meta)
          .then(response => console.log(response))
          .catch(e => console.error(e));
      }
    }
  },
  components: {}
};
</script>

<style scoped>
.upload {
  width: 200px;
  height: 200px;
}
</style>
