<template>
    <div class="home relative">
        <van-swipe :autoplay="3000" lazy-render class="absolute inset-0 w-full h-[15rem] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
  <van-swipe-item v-for="image in images" :key="image" >
    <img :src="image"  class="h-full w-full object-cover "/>
  </van-swipe-item>
</van-swipe>
   <header class="nav absolute   w-full h-20 top-0 flex items-center">
    <van-search v-model="value"
                placeholder="请输入书名或作者名"
                show-action
                clearable
                shape="round"
                class="w-full bg-transparent opacity-90 "
                :background="'transparent'">
                <!-- 插槽 -->
                <template #action>
                    <div class="flex flex-col items-center justify-center px-3">
                        <van-icon 
                            name="apps-o" 
                            size="24"
                            class="mb-1"
                        />
                        <span class="text-sm">分类</span>
                    </div>
                </template>
            </van-search>
   </header>
 
        <main class="mt-4">
            <div class="mx-4 p-3  rounded-lg rounded-xl   bg-gray-90 shadow-md border">
                <!-- 新书上架标题栏 -->
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">新书上架</h2>
                    <div class="more px-4 py-2 rounded-full border border-gray-200 flex items-center">
                        <span class="text-gray-600 text-sm">更多</span>
                        <van-icon name="arrow" class="ml-1"/>
                    </div>
                </div>
                <!-- 书籍列表 -->
                <div class="flex space-x-3">
                    <div v-for="(book, index) in newBooks" :key="index" class="book-item flex-1">
                        <div class="relative">
                            <!-- 书籍封面 -->
                            <img :src="book.cover" class="w-full aspect-[3/4] object-cover rounded-lg shadow-md"/>
                        </div>
                        <!-- 书籍信息 -->
                        <div class="mt-2">
                            <h3 class="font-bold text-sm line-clamp-1">{{ book.title }}</h3>
                            <div class="flex flex-wrap text-xs text-gray-500 mt-1">
                                <span v-for="tag in book.tags" :key="tag" class="mr-2">{{ tag }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 瀑布流 -->
             <div class="container px-6 h-full mt-4">
                <wc-waterfall :gap="20" :colos="2">
                    <div 
                class="border rounded-lg shadow-lg bg-white overflow-hidden"
                v-for="(item, index) in items" 
                :key="index"
            >
                <img v-lazy="item.image" alt="" class="w-full rounded-t-lg">
                <div class="p-3">
                    <p class="text-sm line-clamp-2">{{item.introduce}}</p>
                    <div class="flex flex-wrap gap-2 mt-2">
                        <span class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                            {{item.tags}}
                        </span>
                    </div>
                </div>
            </div>
            <van-cell v-for="item in items" :key="item" title=" " />
            <van-back-top right="5vw" bottom="10vh"/>
        </wc-waterfall>
             </div>
            

        </main>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
import { useHomeStore } from '@/stores/homeStore';
const homeStore =  useHomeStore();
const { images,newBooks,items } = homeStore;

</script>

<style scoped>

</style>
