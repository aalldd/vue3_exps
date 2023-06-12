<!--
 * @Author: wangshiyang
 * @Date: 2023-06-09 15:20:05
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-09 15:30:48
 * @Description: 全局数据appContext
-->
<template>
  <div>hello world</div>
</template>

<script setup>
import { onMounted,getCurrentInstance } from "vue";
const  {appContext} =getCurrentInstance();
onMounted(()=>{
    console.log(appContext.config.globalProperties)
})
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
