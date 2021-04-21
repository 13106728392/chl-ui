<!--
 * @Author: chl
 * @Date: 2020-04-29 11:07:05
 * @LastEditTime: 2020-04-29 17:46:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\component\form\form-item.vue
 -->
<template>
  <div class="form-item">
    <div class="label">
      <div class="ico"><span v-show="required" class="required-ico">*</span></div>
      <label>{{label}}</label>
    </div>
    <div class="controls">
      <slot></slot>
    </div>
    <div class="error">
      {{error}}
    </div>
  </div>
</template>
<script>
export default {
  name:'chl-form-item',
  data() {
    return {
      error:'',
      required:false
    }
  },
  props:{
    label:{
      type: String,
      required: true
    },
    name: {
      required: true
    }
  },
  watch:{
    error(v){
    if (v) { 
      //增删样式
        this.$children[0].$el.classList.add('error')
      } else {
        this.$children[0].$el.classList.remove('error')
      }
    }
  }
};
</script>
<style scoped>
.error {
  color: lightcoral;
}

.form-item {
  display: flex;
  flex-direction: row;
}

.label {
  display: flex;
}
.label .ico {
  width: 20px;
  height: 100%;
}

.required-ico {
  display: inline-block;
  color: lightcoral;
}
.row {
  padding: 8px 0;
  display: flex;
}
label {
  margin-right: 1em;
}
</style>
