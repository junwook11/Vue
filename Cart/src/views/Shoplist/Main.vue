<template>
  <div id="app">
    <b-button variant="danger" @click="gotoMain" id="back-button">GoBack</b-button>
    <h3>Shopping Main</h3>
    <div id="s-box">
      <div v-for="(list,index) in lists" :key="index" id="inner-s-box">
        <div>List{{ list }}</div>
        <ShopBox></ShopBox>
      </div>
    </div>
  </div>
</template>

<script>
import ShopBox from '@/components/ShoppingBox.vue'
export default {
  data(){
    return {
      lists:[1,2,3,4,5]
    }
  },
  methods:{
    gotoMain(){
      this.$router.push('/main')
    }
  },
  components:{
    ShopBox
  }

}
</script>

<style>
#app{
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
  width: 30%;
}
</style>