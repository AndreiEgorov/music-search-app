<template>
  <div>
    <h1> Search iTunes</h1>
    <form action="" @submit.prevent="submit">
      <input placeholder="Enter Artist Name" v-model="search" autofocus/>
    </form>
  </div>
</template>

<script>

  export default {
    components: {},
    data() {
      return {
        search: ""
      }
    },
    methods:{
      submit(e){
        console.log("THIS", this)

        //will redirect to the "results/id" route
        this.$router.push(`results/${this.search}`)
      }
    }
  }
</script>
<style scoped>
* {
  text-align: center;
}
  h1{
    padding: 20px
  }
</style>
