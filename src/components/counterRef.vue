<!--
 * @Author: wangshiyang
 * @Date: 2023-06-09 15:36:19
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-09 15:49:37
 * @Description: ref计数器
-->

<template>
    <button @click="handleClick">{{ num }}</button>
</template>

<script setup>
    // setup中暴露的变量,页面可以直接使用
    // 使用ref包裹变量值之后,它会变成响应式的数据,
    //相当于vue2,data中的数据
    import {ref} from 'vue'
    const num=ref(0)

    const handleClick=()=>{
        console.log(num);
        num.value++
    }
</script>

<style>
</style>