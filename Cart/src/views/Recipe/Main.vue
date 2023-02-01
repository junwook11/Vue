<template>
  <div>
    <BackMain id="back-button"></BackMain>
    Recipe Main
  </div>
</template>

<script>
import BackMain from '../Buttons/BackMain.vue'
export default {
    methods:{
    gotoMain(){
      this.$router.push('/main')
    }
  },
  components:{
    BackMain
  }
}
</script>

<style>
#back-button{
  position: absolute;
  top: 0;
}
</style>