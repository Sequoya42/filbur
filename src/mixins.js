export default {
  methods: {
    redirect: function(loc) {
      this.$router.push({ name: loc });
    }
  }
};
