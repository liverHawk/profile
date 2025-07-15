export interface BaseItem {
    id: string;
    category: "person" | "thing";
    name: string;
    description: string;
    image?: string;
    url?: string;
    tags?: string[];
}

export interface Person extends BaseItem {
    category: "person";
    jobTitle: 'idol' | 'influencer' | 'actor' | 'group';
    socialLinks?: {
        [key: string]: string; // e.g., { twitter: "https://twitter.com/username" }
    };
}

export interface Thing extends BaseItem {
    category: "thing";
    type: 'book' | 'movie' | 'tv' | 'game' | 'music';
    releaseDate: string; // ISO date string
    author: string; // e.g., book author, movie director
}