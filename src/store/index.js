import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const modulesA ={
  state:{
    name:999
  }
}
const store = new Vuex.Store({
  state:{
    mage:888
  },
  mutations:{
    increment(state){
        state.mage++

    },
  },
  getters:{
    greater(state){
      return state.mage * state.mage
    },
  },
  modules:{
    a:modulesA
  }
})

export default store
