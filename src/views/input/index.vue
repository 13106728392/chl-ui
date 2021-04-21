<template>
  <div>
      <h1>输入框</h1>
      <h5>
        <c-input v-model="strings"></c-input>
        <span>我是输入的value:{{ strings }}</span>
      </h5>
      <h5>
        <c-input v-model="strings" :disabled="true"></c-input>
        <span>不能输入</span>
      </h5>
      <h5>
        <c-input v-model="strings" icon="edit"></c-input>
        <span>带图标</span>
      </h5>
  </div>
</template>

<script>
export default {
    name:' input-view',
    data(){
        return {
              strings: "",
        }
    }
    

}
</script>

<style>

</style>