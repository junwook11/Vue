<template>
  <div>
    <b-button variant="danger" @click="gotoMain" id="back-button">GoBack</b-button>
  </div>
</template>

<script>
export default {
    methods:{
    gotoMain(){
      this.$router.push('/main')
    }
  },
}
</script>

<style>

</style>