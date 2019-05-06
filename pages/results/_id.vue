<template>
  <div>
    <h1>Results for {{$route.params.id}}</h1>
    <div v-if="$store.state.albums.length > 0">
      <div v-for="(album, index) in $store.state.albums">

        <Card
        :title="album.collectionCensoredName"
        :image="album.artworkUrl100"
        :artistName="album.artistName"
        :url="album.artistViewUrl"
        :color="picker(index)"
        />
      </div>

    </div>
  </div>
</template>

<script>
  import search from "../../middleware/search";
  import Card from "~/components/Card.vue"

  export default {
    middleware: "search",
    layout: 'dark',
    components: {
      Card
    },
    methods:{
      picker(index){
        return index % 2 == 0 ? "red" : "blue"
      }
    }
  }
</script>

<style scoped>

</style>
