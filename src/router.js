/*
 * @Author: chl
 * @Date: 2020-04-26 15:45:28
 * @LastEditTime: 2020-08-26 14:55:45
 * @LastEditors: chl
 * @Description: In User Settings Edit
 * @FilePath: \chl-ui\src\router.js
 */
import Vue from "vue"
import Router from "vue-router";
import Home from "./views/Home.vue";
import Button from './views/Button'
import Input from './views/Input'
import Collapse from './views/Collapse'
import Toast from './views/Toast'
import Tab from './views/Tab'
import From from './views/From'
import Carousel from './views/Carousel'
import Sticky from './views/Sticky'
import Table from './views/Table'
import Dialog from './views/Dialog'
import Modal from './views/Modal'
import StarrySky from './views/StarrySky'




Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
      path: "/",
      name: "Home",
      component: Home,
      children: [
        {
          path: "/Button",
          name: "Button",
          component: Button
        },
        {
          path: "/Input",
          name: "Input",
          component: Input
        },
        {
          path: "/Collapse",
          name: "Collapse",
          component: Collapse
        },
        {
          path: "/Toast",
          name: "Toast",
          component: Toast
        },
        {
          path: "/Tab",
          name: "Tab",
          component: Tab
        },
        {
          path: "/From",
          name: "From",
          component: From
        },
        {
          path: "/Carousel",
          name: "Carousel",
          component: Carousel
        },

        {
          path: "/Sticky",
          name: "Sticky",
          component: Sticky
        },
        {
          path: "/Table",
          name: "Table",
          component: Table
        },
        {
          path: "/Dialog",
          name: "Dialog",
          component: Dialog
        },
        {
          path: "/Modal",
          name: "Modal",
          component: Modal
        },   
        {
          path: "/StarrySky",
          name: "StarrySky",
          component: StarrySky
        },       
        
      ]
    },

  ]
});