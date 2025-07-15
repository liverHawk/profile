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
        }
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
        }
    },
    {
        id: 'fp003',
        name: 'RIN (会田凜)',
        category: 'person',
        description: 'IS:SUEのメンバーで、歌手として活動中。現在は活動休止中。',
        jobTitle: 'idol',
        url: 'https://is-sue.jp/feature/profile_rin',
    },
];

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
        }
    },
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
        url: 'https://www.hoshinogen.com/works/detail/?id=16'
    },
]

