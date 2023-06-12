<!--
 * @Author: wangshiyang
 * @Date: 2023-06-09 16:10:46
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-09 16:10:49
 * @Description: 使用expose将自身暴露出去
-->
<template>
    <div>{{count}}</div>
</template>
    
<script setup >
import { ref,defineExpose } from 'vue';
const count = ref(0);

const addCount=()=>{
  count.value++
}

defineExpose({
  addCount,
  count
})
</script>