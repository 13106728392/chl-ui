<!--
 * @Author: chl
 * @Date: 2020-05-07 11:00:37
 * @LastEditTime: 2020-05-07 17:08:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\views\carousel\carousel.vue
 -->
<template>
  <div class="chl-carousel">
    <div class="chl-window" @mouseenter="pause" @mouseleave="start">
      <slot></slot>
      <chl-icon name="left" @click="onClickPrev" class="ico prev"></chl-icon>
      <chl-icon name="right" @click="onClickNext" class="ico next"></chl-icon>

      <div class="chl-dot">
        <span
          v-for="(n, index) in carouselItemLength"
          :key="index"
          @click="changeSelect(index)"
          :class="{'index-active':selectedIndex=== index}"
        ></span>
      </div>
    </div>
  </div>
</template>
<script>
import icon from "../icon/icon";
export default {
  name: "chl-carousel",
  components: {
    "chl-icon": icon
  },
  props: {
    // 当前选中的name
    value: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 2000
    },
    height:{
      type:String,
      default:'150px'
    }
    
  },
  //触发更新  在父组件修改了select被执行 关键
  updated() {
    this.updateChildren();
  },
  computed: {
    selectedIndex() {
      //获取在当前数组的下标
      return this.namesList.indexOf(this.value);
    },
    namesList() {
      let arr = [];
      this.$children.forEach(vm => {
        if (vm.$options.name === "chl-carousel-item") {
          arr.push(vm.name);
        }
      });
      return arr;
    }
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      isReverse: false,
      carouselItemLength: 0,
      timerId: undefined,
      lastIndex: 0
    };
  },
  methods: {
    init() {
      this.checkSelectedValue();
      this.updateChildren();
      this.carouselItemLength = this.getcarouselItemCount();
      if (this.autoPlay) {
        this.playAutomatically();
      }
    },
    // 进入暂停
    pause() {
      window.clearTimeout(this.timerId);
    },
    // 出来滚动
    start() {
      // console.log('触发了这个')
      // debugger
      window.clearTimeout(this.timerId);
      this.timerId = undefined;
      this.playAutomatically();
    },
    //上一张
    onClickPrev() {
      //获取当前下标
      this.isReverse = true;
      let prevIndex = this.selectedIndex - 1;
      this.setNewSelected(prevIndex);
    },
    //下一张
    onClickNext() {
      //获取当前下标
      this.isReverse = false;
      let prevIndex = this.selectedIndex + 1;
      this.setNewSelected(prevIndex);
    },
    changeSelect(idnex) {
      this.setNewSelected(idnex);
      this.isReverse = this.selectedIndex > idnex;
    },
    //使用默认第一张
    checkSelectedValue() {
      if (!this.value) {
        this.$emit("update:selected", this.$children[0].name);
      }
    },
    //自动播放
    playAutomatically() {
      // debugger
      if (this.timerId) {
        return;
      }

      let run = () => {
        let idx = this.selectedIndex === -1 ? 0 : this.selectedIndex;
        idx += 1;
        this.isReverse = false;
        this.setNewSelected(idx);
        this.timerId = setTimeout(run, this.duration);
      };

      //这样就不用定时器
      this.timerId = setTimeout(run, this.duration);
    },
    //计算长度
    getcarouselItemCount() {
      let count = 0;
      this.$children.forEach(vm => {
        if (vm.$options.name === "chl-carousel-item") {
          count++;
        }
      });
      return count;
    },
    //设置新的下标 通知父组件去修改select
    setNewSelected(nowIndex) {
      this.lastIndex = this.selectedIndex;
      if (nowIndex === this.namesList.length) {
        nowIndex = 0;
      }
      if (nowIndex === -1) {
        nowIndex = this.namesList.length - 1;
      }

      //这样就是改变 父组件传进来的value 的值
      this.$emit("input", this.namesList[nowIndex]);
    },
    //更新
    updateChildren() {
      this.$children.forEach(item => {
        if (item.$options.name === "chl-carousel-item") {
          item["selected"] = this.value;
          item["reverse"] = this.isReverse;
          item["height"]=this.height
        }
      });
    }
  }
};
</script>
<style scoped>
.chl-carousel {
  display: inline-block;
  position: relative;
  /* background-color: red; */
}
.chl-carousel .chl-window {
  position: relative;
  overflow: hidden;
}
.chl-carousel .chl-window:hover .ico {
  display:inline;
}
.chl-carousel .chl-window .ico {
  position: absolute;
  display:none;
  color: #909399;
  width: 30px;
  font-size: 16px;
  line-height: 30px;
  height: 30px;
  /* background-color: red; */
  border-radius: 50%;
}
.chl-carousel .chl-window .ico:hover {
  color: #606266;
  
}

.chl-carousel .chl-window .ico.prev {
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
}
.chl-carousel .chl-window .ico.next {
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
}
.chl-carousel .chl-dot {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.chl-carousel .chl-dot .index-active {
  background: lightblue;
  color: #000;
}
.chl-carousel .chl-dot > span {
  display: inline-block;
  width: 24px;
  height: 4px;
  font-size: 12px;
  line-height: 40px;
  margin-right: 0.4em;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
