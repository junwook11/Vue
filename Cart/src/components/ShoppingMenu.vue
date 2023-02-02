<template>
  <b-list-group-item id="menu-box">
    <div id="menu-id" :class="{'in-cart':list === true && compMenu === true}">
      {{ menuId }}
    </div> 
    <div id="menu-name" :class="{'in-cart':list === true && compMenu === true}">
      {{ menuName }}
    </div>
    <DeleteMenu v-if="showDel" :menuId="menuId" id="del-btn"></DeleteMenu>
  </b-list-group-item>
</template>

<script>
import DeleteMenu from '@/components/Buttons/DeleteMenu.vue';
export default {
  data(){
    return{
       list:false
    }
  },
    props:["menuName","menuId","showDel","compMenu"],
    components:{
      DeleteMenu
    },    
    created(){
        var arr = this.$store.state.carts
        console.log(arr[2].title)
        for(var i in arr){
          if(arr[i].title === this.menuName)
            this.list =  true
        
       }
       console.log(this.list)
    }
}

</script>

<style>
#menu-box{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
#menu-name{
  text-align: center;
}
.in-cart{
  background-color: blueviolet;
}
</style>