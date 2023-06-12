<!--
 * @Author: wangshiyang
 * @Date: 2023-06-12 09:56:27
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-12 10:46:11
 * @Description: 请填写简介
-->
<template>
    <Modal :isOpen="isOpen" @closeModal="handleModal" />
    <button @click="showModal">弹出modal</button>
</template>
    
<script setup>
import Modal from './teleportModalChid.vue'
import { ref } from 'vue'
const isOpen = ref(false)
const handleModal = () => {
    isOpen.value = false
}

const showModal = () => {
    isOpen.value = true
}
</script>

