/*
 * @Author: wangshiyang
 * @Date: 2023-06-09 15:20:05
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-09 15:27:28
 * @Description: 请填写简介app
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app=createApp(App)
app.config.globalProperties={
    name:'hello'
}

app.mount('#app')
