<!--
 * @Author: your name
 * @Date: 2020-04-26 15:45:28
 * @LastEditTime: 2020-04-30 10:28:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\views\home.vue
 -->
<template>
  <div class="bigBOX">
    <div class="buttonBox showBox">
      <h4>按钮</h4>
      <c-button type="primary" name="right">正常</c-button>
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
          <div>菠萝果实品质优良，营养丰富，含有大量的果糖，。</div>
        </c-collapse-item>
        <c-collapse-item title="葡萄 Grape" name="3">
          <div>成熟的浆果中葡萄含糖量高达10%-30%，以葡萄糖为主。</div>
        </c-collapse-item>
        <c-collapse-item title="柠檬 Lemon" name="4">
          <div>柠檬富含维生素C、糖类、钙、磷、铁、维生素B1</div>
        </c-collapse-item>
      </c-collapse>
    </div>
    <div class="buttonBox showBox">
      <h4>全局提示</h4>
      <c-button type="info" @click="successtoast">一般</c-button>
      <c-button type="success" @click="success">成功</c-button>
    </div>
    <c-sticky :offset-top="0">
      <div class="stickyBox">滚动下看我是不是吸顶了</div>
    </c-sticky>
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
        <c-tab-pane name="kebi">专业特点：高效的得分手、善于组织与防守、能力全面</c-tab-pane>
        <c-tab-pane name="jianeite">专业特点：攻守兼备、善于抢篮板与跳投</c-tab-pane>
        <c-tab-pane name="dengkeng">专业特点：强力的内线球员</c-tab-pane>
        <c-tab-pane name="zhanmushi">专业特点：技术全面，突破与组织进攻的能力强</c-tab-pane>
        <c-tab-pane name="ouwen">重要事件：2014年男篮世界杯冠军</c-tab-pane>
      </c-tab-body>
    </c-tab>
    <c-form :model.sync="user" class="form" ref="form" :rules="rules">
      <c-form-item label="strings" name="strings">
        <c-input v-model="user.strings"></c-input>
      </c-form-item>
      <c-form-item label="strings2" name="strings2">
        <c-input v-model="user.strings2"></c-input>
      </c-form-item>
    </c-form>
  </div>
</template>
<script>
import cbutton from "./button/button";
import cinput from "./input/input";
import ccollapse from "./collapse/collapse";
import ccollapseitem from "./collapse/collapse-item";
import sticky from "./sticky/sticky";
import tab from "./tab/tab";
import tabitem from "./tab/tab-item";
import tabhead from "./tab/tab-head";
import tabpane from "./tab/tab-pane";
import tabbody from "./tab/tab-body";
import form from "./form/form";
import formitem from "./form/form-item";

export default {
  name: "home",
  components: {
    "c-button": cbutton,
    "c-input": cinput,
    "c-collapse": ccollapse,
    "c-collapse-item": ccollapseitem,
    "c-sticky": sticky,
    "c-tab": tab,
    "c-tab-head": tabhead,
    "c-tab-item": tabitem,
    "c-tab-pane": tabpane,
    "c-tab-body": tabbody,
    "c-form-item": formitem,
    "c-form": form
  },
  data() {
    var checkName = val => {
      if (val === "test") {
        throw new Error("自定义校验规则~");
      } else {
        return true;
      }
    };
    return {
      strings: "",
      selected1: "1",
      selected: "flower",
      user: {
        strings: "",
        strings2: ""
      },
      rules: {
        strings: [
          { required: true, message: "请输入名字", trigger: "blur" },
          {
            lengthControl: [3, 5],
            message: "长度在 3 到 5 个字符",
            trigger: "blur"
          },
          { pattern: /^(D)+$/, message: "内容不能有数字", trigger: "blur" },
          { validator: checkName, trigger: "blur" }
        ],
        strings2: [
          { required: true, message: "请输入年龄", trigger: "blur" },
          {
            lengthControl: [null, 2],
            message: "长度不能超过2",
            trigger: "blur"
          },
          { pattern: /d/, message: "必须是数字", trigger: "blur" }
          // { validator: checkAge, trigger: 'blur' }
        ],
        count: [
          {
            lengthControl: [null, 4],
            message: "长度不能超过4",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    successtoast() {
      this.$toast({
        message: "一般。"
      });
    },
    success() {
      this.$toast({
        message: "成功。",
        type: "success"
      });
    }
  }
};
</script>
<style lang="css" scoped>
.bigBOX {
  width: 1000px;
  height: 10000px;
  margin: 0 auto;
}
.showBox {
  border: 1px solid rosybrown;
  padding-bottom: 20px;
  margin: 10px 0;
}

.stickyBox {
  width: 200px;
  height: 50px;
  line-height: 50px;
  background-color: yellowgreen;
}
</style>
