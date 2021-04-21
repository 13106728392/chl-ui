<template>
  <div>
   <h1>全局提示</h1>
      <c-button type="info" @click="successtoast">一般</c-button>
      <c-button type="success" @click="success">成功</c-button>
  </div>
</template>

<script>
export default {

data(){
    return{
         selectedcarousel: "2",
    }
},
methods:{
     successtoast() {
      this.$toast({
        message: "一般。",
      });
    },
    success() {
      this.$toast({
        message: "成功。",
        type: "success",
      });
    },
}
}
</script>

<style>

</style>