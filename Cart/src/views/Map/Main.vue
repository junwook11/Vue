<template>
  <div>
    Map
    <div id="map-container">
      <div id="mart-map">
        <MartMap id="mart-map"></MartMap>
      </div>
      <div>
        <div id="buttons">
          <GoCart style="width:50%"></GoCart>
          <MapToBack style="width:50%"></MapToBack>
        </div>
        <div>
          List{{ $store.state.list }}
          <ShoppingBox></ShoppingBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MartMap from "@/components/MartMap.vue"
import ShoppingBox from '@/components/ShoppingBox.vue'
import GoCart from '@/components/Buttons/GoCart.vue'
import MapToBack from '@/components/Buttons/MapToBack.vue'
export default {
  components:{
    MartMap,MapToBack,
    ShoppingBox,GoCart
  }
}
</script>

<style>
#map-container{
  display: flex;
  justify-content: space-between;
}
#mart-map{
  width: 100%;
  height: 100%;
}
#buttons{
  display: flex;

}
</style>