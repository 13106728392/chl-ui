<template>
  <div>
    <c-button type="primary" name="right" @click="showModal"
      >显示提示框</c-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedcarousel: "2",
    };
  },
  methods: {
    showModal() {
      let func1 = () => {
        this.$toast({
          message: "敲,敲烂他",
          duration: 1500,
          type: "success",
        });
      };
      let func2 = () => {
        this.$toast({
          message: "不了，太难了",
          duration: 1500,
          type: "default",
        });
      };
      let func3 = () => {
        this.$toast({
          message: "你就这样叉掉了？？",
          duration: 2500,
          type: "danger",
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
          cancelModalCallback: func3,
        },
      });
    },
  },
};
</script>

<style>
</style>