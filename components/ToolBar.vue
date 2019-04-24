<template>
  <v-toolbar dark color="blue">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-tooblar-title class="white--text">
      <nuxt-link class="title" to="/"> iTunes Search</nuxt-link>
    </v-tooblar-title>
    <v-spacer></v-spacer>
    <v-btn to="/">
      <v-icon> refresh</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  export default {
    name: "ToolBar"
  }
</script>

<style scoped>
  .title{
    text-decoration: none !important;
  }

  .title:visited{
    color: white;
  }

</style>
