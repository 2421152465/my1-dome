<template>
  <div class="home">
    {{$store.state.mage}}
    <button @click="incre">+1</button>
    <p>{{$store.getters.greater}}</p>
    <p>{{$store.state.a.name}}</p>
  </div>
</template>

<script>
export default {
  methods:{
    incre(){
      this.$store.commit('increment')
    },
    // incre(){
    //   const num = 666;
    //   this.$store.commit({
    //     type:"addStudent",
    //     num:num
    //   })
    // }
  }
}
</script>

<style>

</style>