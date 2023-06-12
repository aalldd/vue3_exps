<!--
 * @Author: wangshiyang
 * @Date: 2023-06-09 16:07:18
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-12 10:53:27
 * @Description: vue3父子组件传值
-->

<template>
    <div class="wrapper">
      <CountItem :num="num" @change="getData"/>
      <button style="margin: 10px;" @click="add">操作子组件将num增加</button>
      <ExposeItem ref="refCount"/>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import CountItem from './CountItem.vue'
import ExposeItem from './ExposeItem.vue'
const num = ref(0);
// 子组件exposeItem的ref实例
const refCount = ref(HTMLElement);

const add = () => {
  refCount.value.addCount();
  console.log(refCount.value.count)
}

// 获取从子组件拿到的值
const getData=(newNum)=>{
    console.log(newNum);
    num.value=newNum
}
</script>

<style scoped>
.wrapper{
  display: flex;
  align-items: center;
}
</style>
