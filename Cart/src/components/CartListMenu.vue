<template>
  <div id="name-box">
    <div id="menu-id">
      {{ CartId }}
    </div> 
    <div id="menu-name">
      {{ CartName }}
    </div>

  </div>
</template>

<script>
export default {
  props:["CartName","CartId"]
}
</script>

<style>

</style>