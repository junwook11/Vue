<template>
  <div>
    <b-button variant="danger">X</b-button>
    <div v-if="modal"></div>
  </div>
</template>

<script>
import {api} from '@/utils/axios'
export default {
  data() {
      return {
        modalShow: false
      }
    },
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