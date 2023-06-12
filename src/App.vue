<template>
  <div class="part">
    <span>ref使用:</span>
    <counterRef />
  </div>
  <div class="part">
    <span>ref arr使用:</span>
    <countArrRef />
  </div>
  <div class="part">
    <span>reactive使用:</span>
    <reactive />
  </div>
  <div class="part">
    <span>自定义hooks:</span>
    <useHooks />
  </div>
  <div class="part">
    <span>父子组件传值:</span>
    <Father />
  </div>
  <div class="part">
    <span>computed使用:</span>
    <computed />
  </div>
  <div class="part">
    <span>computed get set使用:</span>
    <computedGetSet />
  </div>
  <div class="part">
    <span>watch使用:</span>
    <watch />
  </div>
  <div class="part">
    <span>teleportModal:</span>
    <teleportModal />
  </div>
</template>

<script setup>
import counterRef from './components/counterRef.vue';
import countArrRef from './components/countArrRef.vue';
import reactive from './components/reactive.vue';
import useHooks from './components/useHooks.vue';
import Father from './components/Father.vue';
import computed from './components/computed.vue';
import computedGetSet from './components/computedGetSet.vue';
import watch from './components/watch.vue';
import teleportModal from './components/teleportModal.vue';
</script>

<style scoped>
.part{
  width: 100%;
  border-bottom: 1px solid #ccc;
  display: flex;
  padding: 10px;
}
.part >span{
  display: inline-block;
  width: 200px;
  text-align: left;
}
</style>
