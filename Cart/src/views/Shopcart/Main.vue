<template>
  <div>
    <BackMain id="back-button"></BackMain>
    Shop Cart
    <CartBox></CartBox>
  </div>
</template>

<script>
import CartBox from '@/components/CartBox.vue'
import BackMain from '@/components/Buttons/BackMain.vue'
export default {
    methods:{
    gotoMain(){
      this.$router.push('/main')
    }
  },
  components:{
    BackMain,CartBox
  }
}
</script>

<style>
#cart-box{
}
#back-button{
  position: absolute;
  top: 0;
}
</style>