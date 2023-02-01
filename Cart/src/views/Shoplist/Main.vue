<template>
  <div id="app">
    <BackMain id="back-button"></BackMain>
    <h3>Shopping Main</h3>
    <div id="container">
      <div id="s-box">
        <div v-for="(list,index) in lists" :key="index" id="inner-s-box">
          <div @click="gotoDetail(index)">List{{ list }}</div>
          <ShopBox :showDel="false"></ShopBox>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ShopBox from '@/components/ShoppingBox.vue'
import BackMain from '../Buttons/BackMain.vue'
export default {
  data(){
    return {
      lists:[1,2,3,4,5,6,7]
    }
  },
  components:{
    ShopBox,BackMain
  },
  methods:{
    gotoDetail(data){
      this.$router.push(`/list/${data+1}`)
      this.$store.commit("SET_LIST_NUM", data+1)
    }
  }

}
</script>

<style>
#app{
  width: 100vw;
  display: flex;
  text-align: center;
  justify-content: center;
  
}
#s-box{
  display: flex;
}
#back-button{
  position: absolute;
  top: 0;
}
#inner-s-box{
  min-width: 40%;
}
#container{
  overflow-x: scroll;
}
</style>