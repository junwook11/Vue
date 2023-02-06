<template>
    <b-button @click="gotoMain">GoBack</b-button>
</template>

<script>
export default {
    methods:{
    gotoMain(){
      this.$router.go(-1)
    }
  },
}
</script>

<style>

</style>