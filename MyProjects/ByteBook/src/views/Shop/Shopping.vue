<template>
    <div class="shopping">
        <!-- 背景图片 -->
        <div class="bg-image fixed w-full h-[35rem] 
        -z-10  bg-center bg-cover  top-0 left-0
        bg-[url('https://lf-fe.fqnovelstatic.com/obj/novel-fanqie-fe/toutiao/muye/0d26bffe926e49c844284c9370eb85f0.png')]
        " >
        </div>
        <!-- 头部 -->
         <header class="search flex items-center mt-4 mx-4 rounded-full bg-gray-200 text-sm shadow-md">
            <div class="types font-bold  font-serif 
                        flex items-center justify-center w-24"
                 @click="showPicker = true"
                 >            
                 <span class="type ">{{fieldValue}}</span>
                 <van-icon name="arrow-down"/>
            </div>
            <van-popup v-model:show="showPicker" round position="bottom">
                <van-picker
                    :columns="columns"
                    @cancel="showPicker = false"
                    @confirm="onConfirm"
                 />
            </van-popup>
            <van-search
            v-model="searchField"
            placeholder="请输入书名或作者名"
            clearable
            shape="round"
            class="w-full rounded-full bg-opacity-50"
            >
            </van-search>  
         </header>
    <!-- 主体 -->
     <main class="menu">
     <div
        class="min-h-18 rounded-2xl p-2 shadow-md mx-4 my-4 border bg-white bg-opacity-80"
      >
        <section class="topbar flex justify-around my-[0.5rem]">
          <div
            class="topbar-item flex flex-col items-center"
            v-for="item in topBarItems"
            :key="item.title"
          >
            <div class="topbar-item__icon">
              <van-icon 
              class="iconfont "
              class-prefix="icon" 
              :name="item.icon" 
              size="2rem"
              color="#FFA500" />
              
            </div>
            <div class="topbar-item__text text-xs font-bold">
              {{ item.title }}
            </div>
          </div>
        </section>
     </div>
    <!-- 专属推荐 -->
     <section class="recommend mx-4 p-2 text-sm text-black bg-white bg-opacity-80 rounded-2xl shadow-md">
      <div class="flex justify-between items-center p-2 ">
        <h1>专属推荐</h1>
        <van-tag color="#FFEFD5" text-color="#ad0000">{{fieldValue}}</van-tag>
      </div>
      <van-tabs v-model:active="active" swipeable>
        <van-tab v-for="items in recommendItemState " :title=items.title>
            <div v-for="item in items.items" class="item" :class="item.type">
                <div v-if="showRec(item.type)" class="text my-2 py-1 flex bg-gray-100 rounded-lg">
                   <div class="item-img w-[8rem] h-[10rem] rounded overflow-hidden">
                     <van-image :src="item.image_url" class="w-full h-full object-cover"></van-image>
                   </div> 
                   <div class="introduction flex flex-col justify-between ml-4 flex-1">
                        <p class="title text-base font-bold">{{item.title}}</p>
                        <p class="writer text-xs text-gray-400">作者:{{item.writer}}</p>
                        <p class="state text-xs text-gray-400">{{item.state}}</p>
                        <p class="introduce text-xs text-gray-400 line-clamp-2">{{item.introduce}}</p>
                        <p class="time text-xs text-gray-400">{{item.pubication_time}}</p>
                    </div>

                </div>
            </div>
            
        </van-tab>
      </van-tabs>

     </section>
       
    </main>
··</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useShopStore } from '@/stores/shopStore';

const columns = [
      { text: '全部', value: '1' },
      { text: '已完结', value: '2' },
      { text: '连载中', value: '3' },
    ];
const searchField = ref('')  
const fieldValue = ref(columns[0].text);
const showPicker = ref(false);
const action = ref('1');

const onConfirm = ({ selectedOptions }: { selectedOptions: Array<{ text: string; value: string }> }) => {
      showPicker.value = false;
      fieldValue.value = selectedOptions[0].text;
      action.value = selectedOptions[0].value;
    };
const showRec = (type: string)=>  type === action.value|| action.value === '1';
    
    



const shopStore = useShopStore();
const { topBarItems,recommendItemState } = shopStore;

</script>

<style scoped>

</style>