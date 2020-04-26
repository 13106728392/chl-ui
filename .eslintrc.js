/*
 * @Author: your name
 * @Date: 2020-04-26 15:44:06
 * @LastEditTime: 2020-04-26 15:50:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-unused-vars":0
  }
}
