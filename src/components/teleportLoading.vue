<!--
 * @Author: wangshiyang
 * @Date: 2023-06-12 09:53:48
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-12 09:55:34
 * @Description: 请填写简介
-->
<template>
    <teleport to="#loading">
      <div id="center">
        <h2>Loading</h2>
      </div>
    </teleport>
  </template>
  <script setup lang="ts">
  </script>
  <style>
  #center {
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-items: center;
    align-items: center;
    background-color: #eee;
  }
  </style>