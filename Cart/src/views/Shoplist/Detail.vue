<template>
  <div>
    <BackMain id="back-button"></BackMain>
    Shop Detail
    <div>
      <h3>List{{ this.$store.state.list }}</h3>
      <ShopBox :showDel="true"></ShopBox>
    </div>
    <button @click="moveCompare">button</button>
    <BarcodeInput></BarcodeInput>
  </div>
</template>

<script>
import BackMain from '@/components/Buttons/BackMain.vue'
import ShopBox from '@/components/ShoppingBox.vue'
import BarcodeInput from '@/components/BarcodeInput.vue'
export default {
  components:{
    BackMain,ShopBox,BarcodeInput
  },
  methods:{
    moveCompare(){
      this.$router.push('/list/compare')
    }
  }
}
</script>

<style>
#back-button{
  position: absolute;
  top: 0;
}
</style>