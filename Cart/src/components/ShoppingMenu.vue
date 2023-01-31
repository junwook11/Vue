<template>
  <div id="name-box">
    <div>
      {{ menuId }}
    </div> 
    <div>
      {{ menuName }}
    </div>
  </div>
</template>

<script>
export default {
    props:["menuName","menuId"]
}
</script>

<style>
#name-box{
  display: flex;
  justify-content: space-around;
}
</style>