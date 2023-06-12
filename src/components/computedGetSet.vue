<!--
 * @Author: wangshiyang
 * @Date: 2023-06-12 09:41:05
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-12 09:42:17
 * @Description: 请填写简介
-->
<template>
    <div>
        <div><input type="checkbox" v-model="allState" />全选</div>
        <div v-for="item of state" :key="item">
            <input type="checkbox" v-model="item.checked" />{{ item.name }}
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from "vue";
const state = ref([
    { name: "html", checked: true },
    { name: "css", checked: true },
    { name: "js", checked: true },
]);
const allState = computed({
    get: () => state.value.every((item) => item.checked),
    set: (val) => {
        state.value.forEach(item => item.checked = val)
    },
});
</script>
<style scoped></style>