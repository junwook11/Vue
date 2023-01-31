<template>
  <div>
    <b-button variant="danger" @click="gotoMain">GoBack</b-button>
    Shopping Main
    
    <div v-for="(list,index) in lists" :key="index">
      <ShopBox></ShopBox>
    </div>
  </div>
</template>

<script>
import ShopBox from '../components/ShoppingBox.vue'
export default {
  data(){
    return {
      lists:[1,2,3]
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

</style>