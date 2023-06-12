<!--
 * @Author: wangshiyang
 * @Date: 2023-06-12 09:42:32
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-12 10:36:21
 * @Description: 请填写简介
-->
<template>
    <div style="display: flex; align-items: center;">
        <button style="margin-right: 10px;" @click="changeRef1">{{ ref1 }}</button>
        <button style="margin-right: 10px;" @click="changeRef2">{{ ref2 }}</button>
        <button style="margin-right: 10px;" @click="changeReactive">监听reactive</button>
        <p style="margin-right: 10px;">reactive.count:{{ reactiveValue.count }} reactive.num:{{ reactiveValue.num }}</p>
        <button style="margin-right: 10px;" @click="changeReactive2">深度监听</button>
        <p style="margin-right: 10px;">reactive.obj.value:{{ count.obj.value }}</p>
    </div>
</template>
    
<script setup lang='ts'>
import { reactive, ref, watch } from "vue";
const ref1 = ref<string>('监听一个值');
const ref2 = ref<number>(123)
const reactiveValue = reactive({
    count: 1,
    num: 10
})
const count=ref({
    obj: {
    value: 1
  }
})
const changeRef1 = () => {
    ref1.value = '监听ref'
}
const changeRef2 = () => {
    ref2.value++
}
const changeReactive = () => {
    reactiveValue.num++
    reactiveValue.count++
}
const changeReactive2=()=>{
    count.value.obj.value++
}
//   监听一个值
watch(ref1, (newVal, oldval) => {
    console.log(newVal)
})
//   监听多个值
watch([ref1, ref2], (newVal, oldval) => {
    console.log(newVal)
})
watch([() => reactiveValue.count, () => reactiveValue.num], (newVal, oldval) => {
    console.log(newVal)
})
watch(count, (newVal) => {
  console.log(newVal.obj)
}, { deep: true })
</script>