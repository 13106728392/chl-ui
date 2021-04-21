<!--
 * @Author: chl
 * @Date: 2020-04-28 14:43:14
 * @LastEditTime: 2020-04-28 16:43:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\component\tab\tab-item.vue
 -->
<template>
    <div class="chl-tab-item" @click="changeSelect" :class="{active,disabled}" ref="item">
        <template class="icon">
            <slot name="icon"></slot>
        </template>
       <div :class="{hasIcon}">
        <slot></slot>
        </div>

    </div>
</template>
<script>
export default {
  name:'chl-tab-item',
  data(){
    return {
      active: false,
      hasIcon: false
    }
  },
  inject: ['eventBus'],
  props:{
    name:{
      type:String
    },
    disabled:{
      type:Boolean
    }
  },
  created(){
   this.eventBus.$on('update:selected', (val) => {
      // val === this.name && console.log(`item ${this.name}被选中`)
      this.active = val === this.name
    })
  },
  mounted() {
     this.$children.forEach(child => {
      this.hasIcon = child.$options.name === 'c-icon'
    })
  },
  methods:{
    changeSelect(){
      if(this.disabled) return
      this.eventBus.$emit('update:selected',this.name,this)
    }
  }
}
</script>
<style scoped>

.chl-tab-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5em 2em;
  font-weight: bold;
}
.chl-tab-item:hover {
  cursor: pointer;
}
.chl-tab-item.active {
  color: #3ba0e9;
}
.chl-tab-item.disabled {
  cursor: not-allowed;
}
.chl-tab-item .hasIcon {
  margin-left: 10px;
}
</style>
