import type {
    ShopTopBarItem,
    recommendItem
} from "@/types/shop";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useShopStore = defineStore('shop', () => {
    const topBarItems: Array<ShopTopBarItem> = [
        {
            title: 'VIP专区',
            icon: 'Vipzhuanqu'
        },
        {
            title: '话题广场',
            icon: 'huatiguangchangluntan',
        },
        {
            title: '游戏中心',
            icon: 'youxizhongxin'
        },
        {
            title: '活动中心',
            icon: 'huodongzhongxin'
        }

    ]
    const recommendItemState = ref<recommendItem[]>([
        {
            title: "本周最热",
            items: [
                {
                    type: '2',
                    title: '十日终焉',
                    writer: '杀虫队队员',
                    image_url: 'https://p9-reading-sign.fqnovelpic.com/novel-pic/4900f950c7af7f82fdc14cf528e0e288~tplv-resize:225:0.image?lk3s=5b7047ff&x-expires=1746984094&x-signature=BNWNBjFtWhzdtPvcksNkzGJ%2BisY%3D',
                    state: '已完结 · 249.6万字',
                    introduce: '（不后宫，不套路，不无敌，不系统，不无脑，不爽文，介意者慎入。）',
                    pubication_time: '2025-03-22 17:00'
                },
                {
                    type: '3',
                    title: '天渊',
                    image_url: 'https://p9-reading-sign.fqnovelpic.com/novel-pic/p2o944c0f337d9889760dd9e77f32997cbb~tplv-resize:225:0.image?lk3s=5b7047ff&x-expires=1746263496&x-signature=yNirs5wvrbjeE3zpz36G2uj2FXA%3D',
                    writer: '沐满三生',
                    state: '连载中 · 400.4万字',
                    introduce: '（音西搜天渊动画，有百支pv，与陈青源共赴九世红尘约）百年前，陈青源...',
                    pubication_time: '19小时前'
                },
                {
                    type: '2',
                    title: '诡舍',
                    image_url: 'https://p3-reading-sign.fqnovelpic.com/novel-pic/p2ob67b9e86ddf3a2d6293a37e7895331a6~tplv-resize:225:0.image?lk3s=5b7047ff&x-expires=1746262815&x-signature=Y%2FY9sKGZ6dVf%2FZ6T6d0E53fxx7E%3D',
                    writer: '夜来风雨声',
                    state: '已完结 · 209.3万字',
                    introduce: '【无限流+微惊悚+求生+单女主】 一辆没有司机的大巴，载着一群被诅咒的人，去往了一间黑色的诡舍……',
                    pubication_time: '2025-02-18 16:39'
                },
                {
                    type: '2',
                    title: '第九特区',
                    image_url: 'https://p9-reading-sign.fqnovelpic.com/novel-images/07c23d5d14e05a1a8855fe69000294ae~tplv-resize:225:0.image?lk3s=5b7047ff&x-expires=1746263244&x-signature=QpFmtVd6Dh1OKoNaQBO7GVRMarQ%3D',
                    writer: '伤成',
                    state: '已完结 · 607.3万字',
                    introduce: '史变对后，大地满目疮痍，资源枯竭，局势混乱......位从规划...',
                    pubication_time: '2025-02-01 08:27'
                },
                {
                    type: '3',
                    title: '我不是戏神',
                    image_url: 'https://p3-reading-sign.fqnovelpic.com/novel-pic/p2o99ffbfd13492eb9953715959db26ed9b~tplv-resize:225:0.image?lk3s=5b7047ff&x-expires=1746263360&x-signature=jN1lUIsFJQa3piy1Qsxi1ZGf52g%3D',
                    writer: '三九音域',
                    state: '连载中 · 263.3万字',
                    introduce: '赤色流星划过天天际后，人类文明陷入停滞，从那天起，人们再也无法制造......',
                    pubication_time: '22小时前'
                },

                {
                    type: '3',
                    title: '凡骨',
                    image_url: 'https://p3-reading-sign.fqnovelpic.com/novel-pic/p2oab63dc9453b797dc4e499ad254f803fc~tplv-resize:225:0.image?lk3s=5b7047ff&x-expires=1746263562&x-signature=Scestchw7E%2B6dzz7sj7HoEzUnfY%3D',
                    writer: '雪更大师',
                    state: '连载中 · 592.1万字',
                    introduce: '世间灵骨，共分四品。一品，天灵骨；二品，金灵骨；三品，玄灵骨；四品...',
                    pubication_time: '18小时前'
                }

            ]
        },
        {
            title: "科幻末世",
            items: [
            ]
        },
        {
            title: "都市日常",
            items: []
        },
        {
            title: "奇幻仙侠",
            items: []
        },
        {
            title: "历史古代",
            items: []
        }
    ])
    return {
        topBarItems,
        recommendItemState
    }
})