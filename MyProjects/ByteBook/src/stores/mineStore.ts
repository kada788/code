import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { MineTopBarItem } from '../types/mine'


export const useMineStore = defineStore('mine', () => {
    const topBarState = ref<MineTopBarItem[]>([
        {
            title: '已购',
            icon: 'yigou'
        },
        {
            title: '浏览记录',
            icon: 'liulanjilu'
        },
        {
            title: '收藏',
            icon: 'shoucang'
        },
        {
            title: '成为作家',
            icon: 'yongyan'
        },

    ])
    return { topBarState }
})
