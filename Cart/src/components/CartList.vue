<template>
  <div id="menubox">
    <b-card-body
        id="nav-scroller"
        ref="content"
        style="position:relative; height:500px; margin: 20px; overflow-y:scroll;" 
      >
      <div v-for="(menu,index) in menus" :key="index" id="shop-box">
        <shopping-menu :CartName="menu.title" :CartId="menu.id" id="shop-menu"></shopping-menu>
      </div>
    </b-card-body>
  </div>
</template>

<script>
import CartListMenu from './CartListMenu.vue';
import {api} from '../utils/axios'
export default {
    data(){
        return{
            menus:[]
        }
    },
    components:{
        CartListMenu,
    },
    async created(){
    const result = await api.jsonplaceholder.findAll()
    this.menus = result.data
  }

}
</script>

<style>
#menubox{
  display: flex;
  flex-direction: column;
}
#shop-box{
  width: 100%;
}
#shop-menu{
  margin:10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>