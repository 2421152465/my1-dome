<template>
  <div>
    <tab-bar>
      <tab-bar-item path='/home'>
        <img slot="item-icon" src="../assets/img/maozi1.png" alt="">
        <img slot="item-icon-active" src="../assets/img/maozi2.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
         <img slot="item-icon" src="../assets/img/daiz1.png" alt="">
         <img slot="item-icon-active" src="../assets/img/daiz2.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
         <img slot="item-icon" src="../assets/img/qiu1.png" alt="">
         <img slot="item-icon-active" src="../assets/img/qiu2.png" alt="">
        <div slot="item-text">主页</div>
      </tab-bar-item>
      <tab-bar-item path="/bat">
         <img slot="item-icon" src="../assets/img/zuis1.png" alt="">
         <img slot="item-icon-active" src="../assets/img/zuis2.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar> 
  </div>
</template>

<script>
import TabBar from './tabber/TabBar.vue'
import TabBarItem from './tabber/TabBarItem.vue'
export default {
  name:'MyTarBar',
  components: { TabBar, TabBarItem },
}
</script>

<style>

</style>