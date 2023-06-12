<!--
 * @Author: wangshiyang
 * @Date: 2023-06-09 16:04:22
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-12 10:05:25
 * @Description: 使用自定义hook
-->

<template>
    <div>
     <button @click="add">{{count}}</button>
   </div>
</template>

<script setup>
import {useCounter} from '../CountHook'
const {add,count}=useCounter()
</script>

<style>
</style>

