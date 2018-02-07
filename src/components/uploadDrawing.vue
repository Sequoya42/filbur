<template>
	<div>
<h1>there</h1><br />
<img v-if="image != ''":src="image"  class="upload"/>
<br />
<h1>newdata above</h1>
<form>

	<input type="file" @change="uploadFile" />
	<input v-model="meta.name" placeholder="name" />
	<input v-model="meta.state" placeholder="state" />
	<div v-for="tag in meta.tags">
		<input v-model="tag.value" placeholder="tags"/>
	</div>
	<button @click="addTag">Add tag</button>
	<br />
	<br />
	<button @click="send">Submit</button>
</form>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';
export default {
  name: 'uploadDrawing',

  created() {
    this.meta.name = `untilted_${this.drawLength + 1}`;
  },
  data: function() {
    return {
      image: '',
      meta: {
        name: 'none',
        state: 'draft',
        tags: [],
        img: 'image'
      }
    };
  },
  computed: {
    ...mapGetters(['drawLength'])
  },
  methods: {
    addTag(e) {
      this.meta.tags.push({ value: '' });
    },

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
          .post('http://localhost:4200/api/drawings', this.meta)
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
