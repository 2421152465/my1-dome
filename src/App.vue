<template>
  <div id="app">
    <router-view/>
    <my-tar-bar></my-tar-bar>
  </div>
</template>
<script>
import MyTarBar from './components/MyTarBar.vue'
export default {
  name:'app',
  components: {
    MyTarBar 
  },
 
}
</script>
<style scoped>
  @import url('./assets/css/bast.css');

</style>