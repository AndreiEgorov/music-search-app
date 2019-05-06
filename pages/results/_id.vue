<template>
<div>
  <h1>Batman from results</h1>
  <p>your search is {{$route.params.id}}</p>
  {{$store.state.albums}}
</div>
</template>

<script>
    import search from "../../middleware/search";

    export default {
      middleware: "search"
    }
</script>

<style scoped>

</style>
