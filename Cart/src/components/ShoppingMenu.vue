<template>
  <div id="name-box">
    <div id="menu-id">
      {{ menuId }}
    </div> 
    <div id="menu-name">
      {{ menuName }}
    </div>

    <DeleteMenu v-if="showDel" :menuId="menuId" id="del-btn"></DeleteMenu>
  </div>
</template>

<script>
import DeleteMenu from '@/views/Buttons/DeleteMenu.vue';
export default {
    props:["menuName","menuId","showDel"],
    components:{
      DeleteMenu
    }
}
</script>

<style>
#menu-name{
  text-align: center;
}
</style>