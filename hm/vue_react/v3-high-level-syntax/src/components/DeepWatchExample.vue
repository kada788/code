<template>
    <div>
   <p>姓名：</p>
   <input type="text" v-model="user.name" placeholder="Name" />
   <p>年龄：</p>
   <input type="number" v-model.number="user.age" placeholder="Age" />
    </div>
</template>

<script setup>
import { ref,reactive, watch, watchEffect } from 'vue'

const user = reactive({
  name: 'John',
  age: 30,
  hometown: {
    city: '南城',
    country: 'China'
  }
})

// watch(user, (newUser, oldUser) => {
//   console.log('user 发生了改变')


// },
// {
//     deep: true
// }
// )
// 默认执行一次
watchEffect(() => {
  console.log(`user 发生了变化 ${JSON.stringify(user)}`)
})

</script>

<style  scoped>

</style>