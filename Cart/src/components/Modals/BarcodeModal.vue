<template>
  <b-modal ref="my-modal" hide-footer hide-title size="lg">
      
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
      <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Toggle Me</b-button>
    </b-modal>
</template>

<script>
export default {

}
</script>

<style>

</style>