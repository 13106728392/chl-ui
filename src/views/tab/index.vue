<template>
<div>
   <c-tab v-model="selected">
      <c-tab-head>
        <c-tab-item name="x" disabled>NBA</c-tab-item>
        <c-tab-item name="kebi">科比</c-tab-item>
        <c-tab-item name="jianeite">加内特</c-tab-item>
        <c-tab-item name="dengkeng">邓肯</c-tab-item>
        <c-tab-item name="zhanmushi">詹姆斯</c-tab-item>
        <c-tab-item name="ouwen">欧文</c-tab-item>
      </c-tab-head>
      <c-tab-body>
        <c-tab-pane name="x"></c-tab-pane>
        <c-tab-pane name="kebi"
          >专业特点：高效的得分手、善于组织与防守、能力全面</c-tab-pane
        >
        <c-tab-pane name="jianeite"
          >专业特点：攻守兼备、善于抢篮板与跳投</c-tab-pane
        >
        <c-tab-pane name="dengkeng">专业特点：强力的内线球员</c-tab-pane>
        <c-tab-pane name="zhanmushi"
          >专业特点：技术全面，突破与组织进攻的能力强</c-tab-pane
        >
        <c-tab-pane name="ouwen">重要事件：2014年男篮世界杯冠军</c-tab-pane>
      </c-tab-body>
    </c-tab>
</div>
</template>

<script>
export default {
    data(){
        return {
             selected: "flower",
        }
    }
}
</script>

<style>

</style>