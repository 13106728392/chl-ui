<template>
<div>
    <c-button type="primary" name="right" @click="()=>{isVisible= true}">
      打开弹窗</c-button>

    <c-dialog
      :config="dialogConfig"
      :visible="isVisible"
      @close="()=>{isVisible= false}"
    >
       自定义内容
    </c-dialog>
   
</div>
</template>

<script>
export default {
    data(){
        return {
            dialogConfig:{
        title:'自定义标题'
      },
      isVisible: false,
        }
    }
}
</script>

<style>

</style>