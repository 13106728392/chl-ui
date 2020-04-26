<!--
 * @Author: your name
 * @Date: 2020-04-26 15:45:28
 * @LastEditTime: 2020-04-26 16:32:14
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\views\home.vue
 -->
<template>
  <div class="bigBOX">
    <div class="buttonBox showBox">
      <h4>按钮</h4>
      <c-button type="primary">正常</c-button>
      <c-button type="info">一般</c-button>
      <c-button type="success">成功</c-button>
      <c-button type="warning">警告</c-button>
      <c-button type="danger">失败</c-button>
      <c-button type="primary" disabled>禁用</c-button>
    </div>
    <div class="showBox">
      <h4>输入框</h4>
      <h5>
        <c-input v-model="strings"></c-input>
        <span>我是输入的value:{{strings}}</span>
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
    <div class="showBox">
      <c-collapse v-model="selected1" style="width:600px">
        <c-collapse-item title="香蕉 Banana" name="1">
          <div>香蕉是淀粉质丰富的有益水果。</div>
        </c-collapse-item>
        <c-collapse-item title="菠萝 Pineapple" name="2">
          <div>菠萝果实品质优良，营养丰富，含有大量的果糖，葡萄糖，维生素B、C，磷，柠檬酸和蛋白酶等物质。</div>
        </c-collapse-item>
        <c-collapse-item title="葡萄 Grape" name="3">
          <div>成熟的浆果中葡萄含糖量高达10%-30%，以葡萄糖为主。</div>
        </c-collapse-item>
        <c-collapse-item title="柠檬 Lemon" name="4">
          <div>柠檬富含维生素C、糖类、钙、磷、铁、维生素B1、维生素B2、烟酸、奎宁酸、柠檬酸、苹果酸、橙皮苷、柚皮苷、香豆精、高量钾元素和低量钠元素等，对人体十分有益。</div>
        </c-collapse-item>
    </c-collapse>
    </div>
     <div class="buttonBox showBox">
      <h4>全局提示</h4>
      <c-button type="info" @click="successtoast">一般</c-button>
      <c-button type="success"  @click="success">成功 </c-button>    
    </div>
  </div>
</template>
<script>
import cbutton from "./button/button";
import cinput from "./input/input";
import ccollapse from './collapse/collapse';
import ccollapseitem from  './collapse/collapse-item';


export default {
  name: "home",
  components: {
    "c-button": cbutton,
    "c-input": cinput,
    'c-collapse':ccollapse,
    'c-collapse-item':ccollapseitem
  },
  data() {
    return {
      strings: "",
      selected1:'1'
    };
  },
  methods:{
    successtoast(){
      this.$toast({
        message: "一般。" ,
      })
    },
    success(){
      this.$toast({
        message: "成功。" ,
        type:'success'
      })
    }
  }
};
</script>
<style lang="css" scoped>

.bigBOX {
  width: 1000px;
  margin: 0 auto;
}
.showBox {
  border: 1px solid deeppink;
  padding-bottom: 20px;
}
</style>
