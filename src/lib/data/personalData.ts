import type { Person, Thing } from "@lib/types/personalData";


export const favoritePersons: Person[] = [
    {
        id: 'fp001',
        name: '鈴木絢音',
        category: 'person',
        description: '元乃木坂46のメンバーで、現在は女優として活躍中。',
        jobTitle: 'actor',
        url: 'https://ament.co.jp/talent/ayane-suzuki-%e9%88%b4%e6%9c%a8%e7%b5%a2%e9%9f%b3',
        socialLinks: {
            twitter: "https://twitter.com/ayane_staff",
            instagram: "https://www.instagram.com/ayane.suzuki_official/"
        },
        default: 1
    },
    {
        id: 'fp002',
        name: '山田杏奈',
        category: 'person',
        description: '若手女優で、映画やドラマで活躍中。',
        jobTitle: 'actor',
        url: 'https://www.amuse.co.jp/artist/A8357/',
        socialLinks: {
            twitter: "https://twitter.com/anna0108yamada/",
            instagram: "https://www.instagram.com/anna_yamada_/"
        },
        default: 1
    },
    {
        id: 'fp003',
        name: 'RIN (会田凜)',
        category: 'person',
        description: 'IS:SUEのメンバーで、歌手として活動中。現在は活動休止中。',
        jobTitle: 'idol',
        url: 'https://is-sue.jp/feature/profile_rin',
        default: 1,
    },
    {
        id: 'fp004',
        name: "辻野かなみ",
        category: 'person',
        description: '超ときめき❤︎宣伝部のリーダーで、元気で明るいパフォーマンスが特徴。',
        jobTitle: 'idol',
        url: 'https://toki-sen.com/profiles#kanami',
        socialLinks: {
            instagram: "https://instagram.com/kanami_tsujino_official",
            youtube: "https://youtube.com/channel/UCTzXzFlpQ499MjVT4zqaqJQ"
        },
        default: 1
    },
    {
        id: 'fp005',
        name: '安藤汐音',
        category: 'person',
        description: '元アイドルで、現在は芸能活動をしていないが、SNSでの発信を続けている。',
        jobTitle: 'influencer',
        socialLinks: {
            twitter: "https://x.com/oyasumi_shion",
            instagram: "https://www.instagram.com/oyasumi_shion"
        },
        default: 0
    },
    {
        id: 'fp006',
        name: '浅井七海',
        category: 'person',
        description: '元AKB48のメンバーで、現在は声優や女優として活動中。',
        jobTitle: 'actor',
        url: 'https://starrise.info/artists/asai_nanami/',
        socialLinks: {
            twitter: "https://x.com/_asainanami",
            instagram: "https://www.instagram.com/naamin48_/"
        },
        default: 1
    },
    {
        id: 'fp007',
        name: 'キム・ミンジュ',
        category: 'person',
        description: '元IZ*ONEのメンバーで、現在は女優として活動中。',
        jobTitle: 'idol',
        socialLinks: {
            instagram: "https://www.instagram.com/minn.__.ju/"
        },
        default: 0
    }
];

/*
    {
        id: '',
        name: '',
        category: 'person',
        description: '',
        jobTitle: '',
        url: '',
        socialLinks: {
            twitter: "",
            instagram: ""
        },
        default: 1
    }
*/

export const favoriteGroups: Person[] = [
    {
        id: 'fg001',
        name: 'IS:SUE',
        category: 'person',
        description: '女性アイドルグループで、個性的なメンバーが揃う。',
        jobTitle: 'group',
        url: 'https://is-sue.jp/',
        socialLinks: {
            twitter: "https://twitter.com/issue_is_coming",
            instagram: "https://www.instagram.com/issue_is_coming/",
            youtube: "https://www.youtube.com/@issue_is_coming"
        },
        default: 1
    },
    {
        id: "fg002",
        name: '超ときめき❤︎宣伝部',
        category: 'person',
        description: '女性アイドルグループで、元気で明るいパフォーマンスが特徴。',
        jobTitle: 'group',
        url: 'https://toki-sen.com/',
        socialLinks: {
            twitter: "https://twitter.com/sendenbu_staff",
            instagram: "https://www.instagram.com/tokisen_sd/?hl=ja",
            youtube: "https://www.youtube.com/@TOKISEN?sub_confirmation=1"
        },
        default: 1
    },
    {
        id: 'fg003',
        name: 'IZ*ONE',
        category: 'person',
        description: '韓国と日本のメンバーからなる女性アイドルグループ。2018年にデビューし、2021年に活動を終了。',
        jobTitle: 'group',
        default: 0
    }
]

export const favoriteThings: Thing[] = [
    {
        id: 'ft001',
        name: 'Stranger',
        category: 'thing',
        description: '星野源の３枚目のアルバム。',
        type: 'music',
        releaseDate: new Date('2013-05-01').toISOString(),
        author: '星野源',
        url: 'https://www.hoshinogen.com/works/detail/?id=16',
        default: 1
    },
]

