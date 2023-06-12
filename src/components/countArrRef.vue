<!--
 * @Author: wangshiyang
 * @Date: 2023-06-09 15:36:19
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-12 10:13:34
 * @Description: refArr计数器
-->

<template>
    <div v-for="item of list"  :key="item" class="item">
        <button @click="handleDelete(item)">删除：{{item}}</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const list = ref(["html", "css", "js"])

const handleDelete = (val) => {
    let index = list.value.indexOf(val);
    list.value.splice(index, 1)
}
</script>

<style>
    .item{
        margin: 10px;
    }
</style>