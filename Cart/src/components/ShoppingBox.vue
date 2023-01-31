<template>
  <div id="menubox">
    <b-card-body
        id="nav-scroller"
        ref="content"
        style="position:relative; height:300px; overflow-y:scroll;" 
      >
      <div v-for="(menu,index) in menus" :key="index">
        <shopping-menu :menuName="menu.title" :menuId="menu.id"></shopping-menu>
      </div>
      </b-card-body>
  </div>
</template>

<script>
import ShoppingMenu from './ShoppingMenu.vue'
import {api} from '../utils/axios'
export default {
  components: { ShoppingMenu },
  data(){
    return{
      menus:[]
    }
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
</style>