<template>
  <div id="app">
    <div class="container">
      <b-button variant="outline-secondary" id="bb">AD</b-button>
      <b-button variant="outline-secondary" id="bb">Parking</b-button>
      <div class="inner-container">
        <div id="bb-2" class="b-b-b">
          <b-button variant="outline-secondary" id="bb-3" @click="gotocart">Cart</b-button>
        </div>
        <div id="bb-2" class="b-b-b">
          <b-button variant="outline-secondary" id="bb-3" @click="logout">Logout</b-button>
        </div>
      </div>
    </div>
    <div class="container">
      <Clock></Clock>
      <b-button variant="outline-secondary" @click="gotoMap" class="wide-bb">Map</b-button>
      <b-button variant="outline-secondary" @click="gotoList" id="bb">List</b-button>
    </div>
    <BarcodeInput></BarcodeInput>
  </div>
</template>

<script>
import Clock from '@/components/Clock.vue'
import BarcodeInput from '@/components/BarcodeInput.vue'
export default {
  components: { Clock,BarcodeInput },
  methods: {
    gotoMap() {
      this.$router.push("/map")
    },
    gotoList() {
      this.$router.push('/list')
    },
    logout() {
      this.$router.push('/')
    },
    gotocart() {
      this.$router.push('/shopcart')
    }

  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: space-between;
}

.inner-container {
  display: flex;
  flex-direction: column;
}

#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#bb {
  flex-grow: 1;
}

#bb-2 {
  height: 50%;
}

.wide-bb {
  flex-grow: 2;
}

#bb-3 {
  height: 100%;
  width: 100%;
}
</style>