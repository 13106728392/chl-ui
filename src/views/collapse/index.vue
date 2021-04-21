<template>
  <div>
  <c-collapse v-model="selected1" style="width: 600px">
        <c-collapse-item title="科比" name="1">
          <div>专业特点：高效的得分手、善于组织与防守、能力全面</div>
        </c-collapse-item>
        <c-collapse-item title="加内特" name="2">
          <div>专业特点：攻守兼备、善于抢篮板与跳投</div>
        </c-collapse-item>
        <c-collapse-item title="邓肯" name="3">
          <div>专业特点：强力的内线球员</div>
        </c-collapse-item>
        <c-collapse-item title="詹姆斯" name="4">
          <div>专业特点：技术全面，突破与组织进攻的能力强</div>
        </c-collapse-item>
      </c-collapse>
  </div>
</template>

<script>
export default {

data(){
    return{
         selectedcarousel: "2",
           selected1: "1",
    }
}
}
</script>

<style>

</style>