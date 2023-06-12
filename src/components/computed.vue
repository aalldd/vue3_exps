<!--
 * @Author: wangshiyang
 * @Date: 2023-06-12 09:40:23
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-12 10:25:05
 * @Description: 请填写简介
-->
<template>
    <div>
      <button @click="add">点击增加{{ count }}</button>
      <p>计算属性：{{double}}</p>
    </div>
  </template>
  <script setup>
  import { ref,computed } from "vue";
  const count = ref(0);
  const double = computed(()=>{
      return count.value*2
  })
  const add = () => {
    count.value++;
  };
  
  </script>
  <style scoped>
  </style>