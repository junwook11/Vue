<template>
  <div>
    <b-button variant="danger" @click="modalShow = !modalShow">X</b-button>
    <DeleteModal v-model="modalShow"></DeleteModal>
  </div>
</template>

<script>
import {api} from '@/utils/axios'
import DeleteModal from '../Modals/DeleteModal.vue'
export default {
  data() {
      return {
        modalShow: false
      }
    },
  components: { DeleteModal },
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