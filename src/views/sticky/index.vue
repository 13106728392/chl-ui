<template>
  <div style="height:1200px">
   <c-sticky :offset-top="0">
      <div class="stickyBox">滚动下看我是不是吸顶了</div>
    </c-sticky>
  </div>
</template>

<script>
export default {

data(){
    return{
       
    }
}
}
</script>

<style lang="css" scoped>

.stickyBox {
  width: 200px;
  height: 50px;
  line-height: 50px;
  background-color: yellowgreen;
}
</style>