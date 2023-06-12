<!--
 * @Author: wangshiyang
 * @Date: 2023-06-09 16:07:46
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-12 10:18:15
 * @Description: 请填写简介
-->
<template>
    <div>
        {{num}}
        <button @click="handleChange">给父组件传值</button>
    </div>
</template>
    
<script setup >
const props=defineProps({
    num:{
        type:Number
    }
})

const emit = defineEmits(["change"])
const handleChange=()=>{
     emit("change",props.num+100)
}
</script>
