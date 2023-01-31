<template>
  <div>
    <b-button variant="danger" @click="gotoMain">GoBack</b-button>
    Shop Cart
  </div>
</template>

<script>
export default {
    methods:{
    gotoMain(){
      this.$router.push('/main')
    }
  }
}
</script>

<style>

</style>