<!--
 * @Author: wangshiyang
 * @Date: 2023-06-12 09:57:55
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-12 10:50:02
 * @Description: 请填写简介
-->
<template>
    <teleport to="#modal">
      <div id="center" v-if="isOpen">
        <h2>
          <slot>This is a modal</slot>
        </h2>
        <button @click="handleClick">关闭</button>
      </div>
    </teleport>
  </template>
  <script setup lang='ts'>
  defineProps({
    isOpen: {
      type: Boolean
    }
  })
  const emit = defineEmits(["closeModal"])
  const handleClick = () => {
    emit("closeModal")
  }
  </script>

<style scoped>
    #center{
        width: 30vw;
        height: 30vh;
        background-color:rgba(0,0,0,.4);


        position: absolute;
        left: 50vw;
        top: 10vh;
        transform: translateX(-50%);
    }
</style>