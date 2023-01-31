<template>
  <div id="menubox">
    <b-card-body
        id="nav-scroller"
        ref="content"
        style="position:relative; height:300px; overflow-y:scroll;" 
      >
      <div v-for="(menu,index) in menus" :key="index">
        <shopping-menu :menuName="menu.name" :menuId="menu.id"></shopping-menu>
      </div>
      </b-card-body>
  </div>
</template>

<script>
import ShoppingMenu from './ShoppingMenu.vue'
export default {
  components: { ShoppingMenu },
  data(){
    return{
      menus:[
        {id:1, name:"a"},
        {id:2, name:"b"},
        {id:3, name:"c"},
        {id:4, name:"d"},
        {id:5, name:"e"},
        
      ]
    }
  }
}
</script>

<style>
#menubox{
  display: flex;
  flex-direction: column;
}
</style>