<template>
  <div>
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
export default {
  data() {
      // 自定义校验规则
      let checkName = (val) => {
      if (val === "test") {
        throw new Error("自定义校验规则~");
      } else {
        return true;
      }
    };
    return {
      user: {
        strings: "",
        strings2: "",
      },
       rules: {
          strings: [
            { required: true, message: "请输入名字", trigger: "blur" },
            {
              lengthControl: [3, 5],
              message: "长度在 3 到 5 个字符",
              trigger: "blur",
            },
            { pattern: /^(D)+$/, message: "内容不能有数字", trigger: "blur" },
            { validator: checkName, trigger: "blur" },
          ],
          strings2: [
            { required: true, message: "请输入年龄", trigger: "blur" },
            {
              lengthControl: [null, 2],
              message: "长度不能超过2",
              trigger: "blur",
            },
            { pattern: /d/, message: "必须是数字", trigger: "blur" },
            // { validator: checkAge, trigger: 'blur' }
          ],
          count: [
            {
              lengthControl: [null, 4],
              message: "长度不能超过4",
              trigger: "blur",
            },
          ],
        },
    };
  },
};
</script>

<style>
</style>