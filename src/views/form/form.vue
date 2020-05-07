<!--
 * @Author: your name
 * @Date: 2020-04-29 14:37:45
 * @LastEditTime: 2020-05-06 10:27:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\views\form\form.vue
 -->
<template>
  <form action="" @submit.prevent="$emit('sumbit',$event)">
    <slot></slot>
  </form>
</template>

<script>
import Validate from './validate'
export default {
  name:'chl-form',
  data() {
    return {
      error:{},
      eventTriggerModel: {}, //触发方式
      requiredFieldsList: [], //错误列
      validator:new Validate
    }
  },
  props:{
    model:{ //绑定数据源
      type:Object
    },
    rules:{  //校验规则
      type:Object
    }
  },
  mounted(){
    this.bindEvent()
    this.setRequiredLabel()
  },
  methods:{
    //绑定数据 
    bindEvent(){  
      this.$children.forEach(vm => {
        // console.log(vm)
        let name = vm.$props.name
          vm.$children.forEach(input => {
            input.$on('blur',()=>{
              let obj = {[name]: this.model[name]}
              this.eventTriggerModel=Object.assign(this.eventTriggerModel,obj)
              console.log(this.eventTriggerModel)
              this.validate(this.eventTriggerModel)
            })
          })
        
        })
    },
    //校验
    validate(formData){
      const rules = this.rules
      const vm = this.validator
      this.error = vm.validate(formData,rules)
      console.log(this.error,'错误信息返回')
      this.boardcast()

    },
    //错误信息广播
    boardcast () {
      let totalErrors = {...this.error}
      this.$children.forEach(item=>{
        item.error= totalErrors[item.$props.name]
      })
    },
    //校验是否必须
    setRequiredLabel () {
      this.findReqiredFields()
      console.log( this.requiredFieldsList)
      this.$children.forEach(item=>{
        if(this.requiredFieldsList.includes(item.name)){
          item.required=true
        }
      })
    },
  
    findReqiredFields () {
      for (let item of Object.entries(this.rules)) {
          for (const iterator of item[1]) {
          let keys = Object.keys(iterator)
          if (keys.includes('required') && iterator['required']) {
                this.requiredFieldsList.push(item[0]) 
                break
              }
          }
       }         
    }
  }
}
</script>

<style>

</style>
