<template>
<v-container fluid>
  <OrderSideBar></OrderSideBar>
  <v-content>
    <v-layout align-center
      justify-center>
      <div>
        <Upload></Upload>
        <v-spacer></v-spacer>
        <hr />
        <Update></Update>
      </div>
      <div>
      </div>
    </v-layout>
  </v-content>
</v-container>
</template>

<script>
import axios from '../services/axios';
import Upload from './uploadDrawing';
import Update from './updateDrawing';
import OrderSideBar from './OrderSideBar';
export default {
  name: 'Filbur',
  computed: {},
  methods: {},
  components: {
    Upload,
    Update,
    OrderSideBar
  },
}
</script>

<style scoped>
.test {
  color: black;
  background-color: white
}
</style>
