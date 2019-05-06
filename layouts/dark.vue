<template>
  <div class="dark">
    <ToolBar/>
    <Nuxt/>
  </div>
</template>
<script>
  import ToolBar from "../components/ToolBar";

  export default {
    components: {
      ToolBar
    }
  }
</script>
<style>
  body {
    overflow: hidden;
  }

  .dark {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background: black;
    color: white;
    padding: 10px;
  }

  .dark a {
    color: white;
  }
</style>
