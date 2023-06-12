<!--
 * @Author: wangshiyang
 * @Date: 2023-06-09 15:50:00
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-12 10:16:00
 * @Description: reactive用法 reactive可以定义多个响应式的值
-->

<template>
    <div class="wrapper">
        <div style="margin-right: 10px;">{{ data.age }}</div>
        <div style="margin-right: 10px;">{{ data.name }}</div>
        <button style="margin-right: 10px;" @click="add">年龄增加</button>
        <button @click="changeName">改变年龄</button>
    </div>
</template>

<script setup>
import { reactive,toRefs } from "vue";
const data = reactive({
    age: 10,
    name: "Vue",
});
// 使用toRefs解构
const {age,name} = toRefs(data);
console.log(age);
console.log(name);
const add = () => {
    data.age++;
};
const changeName=()=>{
    data.name='react'
}
</script>

<style>
    .wrapper{
        display: flex;
        align-items: center;
    }
</style>
