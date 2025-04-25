<template>
<div class="mine h-100rem">
  <!-- 头部 -->
  <div
      class="minePage container h-[8rem] relative bg-[url(https://p6-novel.byteimg.com/origin/novel-static/3f7b5f33f2d161ef319057869d0fa3e9)] bg-cover bg-center"
    >
    <div class="text-center text-lg text-white font-bold pt-[2rem]">
      个人中心
    </div>
    <!-- 头像 -->
      <img 
      src="https://www.keaitupian.cn/cjpic/frombd/2/253/3315366793/2321372572.jpg" 
      alt=""
      class=" rounded-full w-20 h-20 mx-auto border-2 border-white shadow-md shadow-gray-400 absolute bottom-0 left-5 transform translate-y-[3rem]"
      />
  </div>
  <!-- 主体 -->
   <main class="mine-main">
    <!-- 登录 -->
    <div class="login container text-right px-5 pt-2">
    <van-button round type="success" color="#00BFFF" class="font-bold text-center">登录
    </van-button>
    </div>
    <!-- 会员开通 -->
     <section class="rounded-xl mt-3 mx-2 relative border bg-[#FFF8E7] p-4">
    <div class="myWelfare flex justify-between items-center">
        <!-- 左侧标题和描述 -->
        <div class="flex flex-col">
            <div class="text-xl font-bold text-[#8B4513]">开通会员</div>
            <div class="text-sm text-[#BC8F8F] mt-1">开通享有声书8折订阅优惠</div>
        </div>
        
        <!-- 右侧按钮 -->
        <div class="flex items-center">
            <van-button 
                round 
                color="#CD853F" 
                class="font-bold text-center px-6"
            >
                立即开通
                <van-icon name="arrow" class="ml-1"/>
            </van-button>
        </div>
    </div>
</section>
    <!-- 菜单栏 -->
    <section class=" rounded-xl mx-2 mt-[1rem] pb-[0.5rem] bg-gray-90 shadow-md border">
       <div class="topbar flex justify-around mt-[1.5rem]">
          <div 
      class="topbar-item flex flex-col items-center "
      v-for="item in topBarState"
      :key="item.title"
      >
             <div class="topbar-item-icon">
              <van-icon 
              class="iconfont "
              class-prefix="icon"
              :name="item.icon"
              size="2rem"
              />
             </div>
             <div class="topbar-item-text">
             {{item.title}}
             </div>
       </div>
      </div>
    </section>
<!-- 每日签到 -->
    <section
        class="rounded-xl py-2 pl-4 pt-4 shadow-md bg-gray-90 mx-2 mt-3 border relative"
      >
        <div class="font-bold">
          <van-icon
            class="iconfont text-[1rem] mr-2"
            color="black"
            class-prefix="icon"
            name="meiriqiandao"
          />
          每日签到</div>
        <div class="text-[0.8rem] text-gray-500 mt-4">签到领取月卡vip</div>
        <div class="absolute right-0 top-0 mt-5 mr-3">
          <van-button round type="success" color="#00BFFF">立即签到</van-button>
        </div>
      </section>
      <!-- 帮助与客服 -->
      <section
        class="rounded-xl py-2 pl-4 pt-4 shadow-md bg-gray-90 mx-2 mt-3 border relative"
      >
        <div class="font-bold">
          <van-icon
            class="iconfont text-[1rem] mr-2"
            color="black"
            class-prefix="icon"
            name="bangzhuyukefu"
          />
          帮助与客服
        </div>
        <div class="text-[0.8rem] text-gray-500 mt-4">
          人工客服为你答疑
        </div>
      </section>
      <!-- 设置 -->
      <section
        class="rounded-xl py-2 pl-4 pt-4 shadow-md bg-gray-90 mx-2 mt-3 border relative"
      >
        <div class="font-bold">
          <van-icon
            class="iconfont text-[1rem] mr-2"
            color="black"
            class-prefix="icon"
            name="shezhi"
          />
          设置
        </div>
        <div class="text-[0.8rem] text-gray-500 mt-4">管理你的个人信息</div>
      </section>
   </main>
</div>
</template>

<script setup lang="ts">
import { useMineStore } from "@/stores/mineStore.ts";
import { toRefs } from 'vue';
const mineStore = useMineStore();
const {topBarState} = toRefs(mineStore);
console.log(topBarState);
</script>

<style scoped>

</style>