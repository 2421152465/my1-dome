<template>
  <div class="tab-bar-item" @click="itemClick">
   <div v-if="!isAcitve"><slot name="item-icon" ></slot></div>
   <div v-else><slot name="item-icon-active" ></slot></div>
   <div :class="{active:isAcitve}"> <slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    path:String
  },
  data(){
    return{
      // isAcitve:false
    }
  },
  computed:{
    isAcitve(){
      return this.$route.path.indexOf(this.path) !=-1
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path).catch(err=>err)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    cursor: pointer;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .active{
    color: red;
  }
</style>