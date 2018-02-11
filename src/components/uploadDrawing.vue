<template>
<v-container mt-5
  pt-5>
  <v-layout row
    xs6
    wrap
    justify-center>
    <v-flex>
      <v-card>
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
          v-model="meta.description"></v-text-field>
        <v-btn @click="send">Submit</v-btn>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
<!--
<div>
  <h1>there</h1><br />
  <img v-if="image != ''"
    :src="image"
    class="upload" />
  <br />
  <h1>newdata above</h1>
  <form>
    <input type="file"
      @change="uploadFile" />
    <input v-model="meta.name"
      placeholder="name" />
    <input v-model="meta.category"
      placeholder="category" />
    <input v-model="meta.description"
      placeholder="description" />
    <button @click="send">Submit</button>
  </form>
</div> -->
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex';
import axios from '../services/axios';
export default {
  name: 'uploadDrawing',

  created() {},
  //TODO do this with the updated fields
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
        axios
          .post('/drawings', this.meta)
          .then(response => console.log('success?'))
          .catch(e => console.error(e));
      }
    }
  },
  components: {}
};
</script>

<style>
.upload {
  width: 200px;
  height: 200px;
}
</style>
