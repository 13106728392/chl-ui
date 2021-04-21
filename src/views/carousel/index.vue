<template>
  <div>
  <c-carousel
      v-model="selectedcarousel"
      class="carousel-wrapper"
      height="600px"
    >
      <c-carousel-item name="1">
        <div class="box">1</div>
      </c-carousel-item>
      <c-carousel-item name="2">
        <div class="box">2</div>
      </c-carousel-item>
      <c-carousel-item name="3">
        <div class="box">3</div>
      </c-carousel-item>
      <c-carousel-item name="4">
        <div class="box">4</div>
      </c-carousel-item>
      <c-carousel-item name="5">
        <div class="box">5</div>
      </c-carousel-item>
    </c-carousel>
      
  </div>
</template>

<script>
export default {

data(){
    return{
         selectedcarousel: "2",
    }
}
}
</script>

<style>

</style>