/*
 * @Author: your name
 * @Date: 2020-04-29 15:23:34
 * @LastEditTime: 2020-04-30 10:41:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\views\form\Validator.js
 */
export default class Validator {
  /**
   * @description: 校验数据
   * @param {obj} formData表单数据 
   * @param {obj} formData校验规则
   * @return: 错误信息
   */
  //扩展方法
  static add(name, fn) {
    Validator.prototype[name] = fn
  }

  validate(formData, rules) {
    // console.log(formData, rules)
    let err = {}
    for (const item of Object.entries(rules)) {
      // Object.entries方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。
      // array like object
      // const obj = { 0: 'a', 1: 'b', 2: 'c' };
      // console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]
      let checkName = item[0]
      if (formData[checkName] == undefined) continue //为空就跳过
      for (const rule of item[1]) {
        // console.log(rule)
        //拿到校验条件的名字
        let validatorKey = Object.keys(rule).filter(x => ['lengthControl', 'pattern', 'validator', 'required'].includes(x))[0]
        // console.log(validatorKey)
        let res = this[validatorKey](formData[checkName], rule)

        if (!res) {
          err[checkName] = rule.message
          break
        }
        // console.log(validatorKey, res, '校验返回结果')
      }
    }
    return err
  }
  //是否必须
  required(val) {
    // console.log(val)
    return !(val === undefined || val === '')
  }

  //长度校验
  lengthControl(val, rule) {
    let flag = true
    let dataLength = val.toString().length
    let [min, max] = rule.lengthControl
    if (min && dataLength < min) {
      flag = false
    }
    if (max && dataLength > min) {
      flag = false
    }
    return flag
  }

  //正则校验
  pattern(val, rule) {
    let res = rule.pattern.test(val)
    return res
  }

  //自定义校验规则
  validator(val, rule) {
    try {
      return rule.validator.call(this, val)
    } catch (e) {
      return e.message
    }
  }

  // 0: {required: true, message: "请输入名字", trigger: "blur"}
  // 1: {lengthControl: Array(2), message: "长度在 3 到 5 个字符", trigger: "blur"}
  // 2: {pattern: /^(D)+$/, message: "内容不能有数字", trigger: "blur"}
}
