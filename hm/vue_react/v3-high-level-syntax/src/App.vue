<script setup>
import {ref, watch, watchEffect} from 'vue'
import DeepWatchExample from './components/DeepWatchExample.vue'
import BaseCard from './components/BaseCard.vue'

const count = ref(0)
const increment = () => {
  count.value++
}
watch(count, (newCount,oldvalue) => {
  // 状态的改变
  console.log('Count changed:', newCount)
})
// 监听 订阅发布者模式 观察者模式
// x               
watchEffect(() => {
  console.log(`当前count的值是:${count.value}`)
  
})
</script>

<template>
  <DeepWatchExample />
 {{count}}
  <button @click="increment">
    Count is: {{ count }}
  </button>

  <BaseCard>
    <p>这里是默认插槽的内容，父组件传入，提升组件的定制性</p>
    <template #header>
      <p>这里是header的插槽</p>
    </template>
  </BaseCard> 

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
