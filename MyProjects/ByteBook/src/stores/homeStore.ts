import { defineStore } from "pinia";
import type { newBooks, items } from "@/types/home";

export const useHomeStore = defineStore("homeStore", () => {
    const images: Array<string> = [
        'https://p6-novel.byteimg.com/origin/novel-static/6587a6b0478882c571b9a59dd1a1420b',
        'https://p6-novel.byteimg.com/large/novel-static/ad752ad652a65e3dce4d8754b0acc43c',
        'https://p6-novel.byteimg.com/origin/novel-static/3f7b5f33f2d161ef319057869d0fa3e9',
        'https://p6-novel.byteimg.com/origin/novel-static/88c97a9199368ee97e10c776121da9a5',

    ];
    const newBooks: newBooks = [
        {
            title: '金总，太太又带小姐离家出走了！',
            cover: 'https://p3-reading-sign.fqnovelpic.com/novel-pic/p2o168b928cbf2c9cfc82fb3a14289f1eac~tplv-resize:200:260.image?lk3s=68b6d46a&x-expires=1749136886&x-signature=Zy0EjcMWCBtMJfREpXiTQE4ZBdo%3D',
            tags: ['总裁', 'HE']
        },
        {
            title: '我，圈钱主播！但大哥是真刷啊！',
            cover: 'https://p3-reading-sign.fqnovelpic.com/novel-pic/p2o932cf453621a7c9d78d932772739a0d1~tplv-resize:225:0.image?lk3s=5b7047ff&x-expires=1747149725&x-signature=w%2F7ND8q7Fad%2FDuhMas4Hrp4mW5Q%3D',
            tags: ['都市', '系统']
        },
        {
            title: '喝着啤酒撸着串，这是千亿总裁？',
            cover: 'https://p3-reading-sign.fqnovelpic.com/novel-pic/p2o5025416b3e2214113ae153c0bc029a9d~tplv-resize:225:0.image?lk3s=5b7047ff&x-expires=1747149751&x-signature=pwYDP%2FnU9GOg2lOWKjDv4pnw%2BvE%3D',
            tags: ['都市脑洞']
        },
        {
            title: '穿成大佬恶毒前妻后，被全家团宠',
            cover: 'https://p9-reading-sign.fqnovelpic.com/novel-pic/p2o42999cea76ffd499f63f379536c73c7c~tplv-resize:225:0.image?lk3s=5b7047ff&x-expires=1747149784&x-signature=vp1e0mqkgDnZbo99T1j9WihHsvk%3D',
            tags: ['年代', '甜宠']
        }
    ];
    const items: items = [
        {
            image: 'https://p9-reading-sign.fqnovelpic.com/novel-pic/p2o4c8289e238f1f696276307ec7c16e2c0~tplv-resize:225:0.image?lk3s=5b7047ff&x-expires=1747149929&x-signature=f94EuRHtAl%2BMhkFUmUOgPZanQm0%3D',
            introduce: '姜时愿追逐沈律初十年，却在十八岁生辰那日，得到四个字',
            tags: '古代 言情 古色 古香'
        },
        {
            image: 'https://p9-reading-sign.fqnovelpic.com/novel-pic/p2ob3650108869be31b54653c9eb86599a0~tplv-resize:225:0.image?lk3s=5b7047ff&x-expires=1747150026&x-signature=3Z5CV5OmrH3L9fIyrdAbFBt3WrU%3D',
            introduce: '【1v1超甜+沙雕玩梗+娱乐圈+恋综+打脸】',
            tags: '星光璀璨 现代言情'
        },

        {
            image: 'https://p9-reading-sign.fqnovelpic.com/novel-pic/p2o0e5bbd57d5aff651a077b0532e73cee5~tplv-resize:225:0.image?lk3s=5b7047ff&x-expires=1747150126&x-signature=zh2t78vPotjSVG8eusjdy9zJtEk%3D',
            introduce: '沈棠到死才知道贵为皇后的嫡姐并非爹娘所出，而是害死全家的凶手。',
            tags: '宫斗宅斗 古代言情'
        },
        {
            image: 'https://p3-reading-sign.fqnovelpic.com/novel-pic/p2o9cc0203249e3194ccfea59b1d8660180~tplv-resize:225:0.image?lk3s=5b7047ff&x-expires=1747150256&x-signature=DcmuzycU5wiwkmdD298DaMQtqiw%3D',
            introduce: '前世，孟明萱误会宠她爱她的九爷与她姐姐生死之恋，拼命逃离了九爷边，',
            tags: '豪门总裁 现代言情'
        },

    ]

    return {
        images,
        newBooks,
        items
    }
})