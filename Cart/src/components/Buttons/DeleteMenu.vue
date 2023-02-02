<template>
  <div>
    <b-button variant="danger" >X</b-button>
  </div>
</template>

<script>
import {api} from '@/utils/axios'
export default {
    props:["menuId"],
    methods:{
        deleteMenu(menuId){
            api.jsonplaceholder.delMenu(menuId)
        }
    }
}
</script>

<style>

</style>