<!--
 * @Author: your name
 * @Date: 2020-04-26 15:45:28
 * @LastEditTime: 2020-08-26 14:50:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\views\home.vue
 -->
<template>
  <div class="bigBOX">
    <sider/>


    <c-button type="primary" name="right" @click="showModal">显示提示框</c-button>
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

    <c-carousel v-model="selectedcarousel" class="carousel-wrapper" height="600px">
      <c-carousel-item name="1">
        <div class="box">1</div>
      </c-carousel-item>
      <c-carousel-item name="2">
        <div class="box">2</div>
      </c-carousel-item>
      <c-carousel-item name="3">
        <div class="box">3</div>
      </c-carousel-item>
      <c-carousel-item name="4">
        <div class="box">4</div>
      </c-carousel-item>
      <c-carousel-item name="5">
        <div class="box">5</div>
      </c-carousel-item>
    </c-carousel>
    <canvas id="canvas" width="100%" height="100%"></canvas>
  </div>
</template>
<script>
import Vue from "vue";
import button from "./button/button";
import input from "./input/input";
import collapse from "./collapse/collapse";
import collapseitem from "./collapse/collapse-item";
import sticky from "./sticky/sticky";
import tab from "./tab/tab";
import tabitem from "./tab/tab-item";
import tabhead from "./tab/tab-head";
import tabpane from "./tab/tab-pane";
import tabbody from "./tab/tab-body";
import form from "./form/form";
import formitem from "./form/form-item";
import carousel from "./carousel/carousel";
import carouselitem from "./carousel/carousel-item";
import { runStarrySky } from "./start/start";

// 侧边栏
import sider from '../component/sider'

export default {
  name: "home",
  components: {
    sider,
    "c-button": button,
    "c-input": input,
    "c-collapse": collapse,
    "c-collapse-item": collapseitem,
    "c-sticky": sticky,
    "c-tab": tab,
    "c-tab-head": tabhead,
    "c-tab-item": tabitem,
    "c-tab-pane": tabpane,
    "c-tab-body": tabbody,
    "c-form-item": formitem,
    "c-form": form,
    "c-carousel": carousel,
    "c-carousel-item": carouselitem
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
      selectedcarousel: "2",
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
  mounted() {
    runStarrySky();
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
    },
    showModal() {
      let func1 = () => {
        this.$toast({
          message: "敲,敲烂他",
          duration: 1500,
          type: "success"
        });
      };
      let func2 = () => {
        this.$toast({
          message: "不了，太难了",
          duration: 1500,
          type: "default"
        });
      };
      let func3 = () => {
        this.$toast({
          message: "你就这样叉掉了？？",
          duration: 2500,
          type: "danger"
        });
      };
      this.$modal({
        title: "你生成了一个modal",
        content: "今晚敲代码吗?",
        btnConfig: {
          confirmText: "确认",
          confirmCallback: func1,
          cancelText: "取消",
          cancelCallback: func2,
          cancelModalCallback: func3
        }
      });
    }
  }
};
</script>
<style lang="css" scoped>
.bigBOX {
  width: 1000px;
  height: 2000px;
  background-color: #fff;
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
#canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -99;
  top: 0;
  left: 0;
}
</style>
