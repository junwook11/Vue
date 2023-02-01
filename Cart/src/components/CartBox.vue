<template>
  <div>
    <h4>CartMenu</h4>
    <div id="cart-box" style="height:500px">
        <div v-for="(user,index) in users" :key="index" id="card">
            <CartMenu :Name="user.username" :Id="user.id" :img="Imgs[user.id].url"></CartMenu>
            <div>{{ index }}</div>
        </div>
    </div>
  </div>
</template>

<script>
import CartMenu from './CartMenu.vue'
import {api} from '../utils/axios'
export default {
  components: { CartMenu },
  data(){
    return{
      users:[],
      Imgs:[]
    }
  },
  async created(){
    const result = await api.jsonplaceholder.findUsr()
    const image = await api.jsonplaceholder.findImg()
    this.Imgs = image.data
    this.users = result.data
  }
}

</script>

<style>
#cart-box{
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    height: 600px;
}
#card{
    width: 25%;
}

</style>