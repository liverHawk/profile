// no duplicate color

/*
Python	#3776AB
JavaScript	#F7DF1E
Java	#F89820
C++	#00599C
C#	#9B4F96
Ruby	#CC342D
PHP	#777BB4
Go	#00ADD8
Rust	#F74C00
Swift	#F05138
TypeScript	#3178C6
HTML	#E34F26
CSS	#1572B6
Node.js	#339933
Deno	#000000
Bun	#FBF0DF
Next.js	#AAAAAA
Nuxt.js	#00DC82
Express.js	#68A063
NestJS	#E0234E
Docker	#2496ED
Webpack	#8DD6F9
*/

const langColor = {
    "python": "#3776AB",
    "javascript": "#F7DF1E",
    "java": "#007396",
    "c++": "#00599C",
    "c#": "#239120",
    "ruby": "#CC342D",
    "php": "#777BB4",
    "go": "#00ADD8",
    "rust": "#DEA584",
    "swift": "#F05138",
    "typescript": "#3178C6",
    "html": "#E34F26",
    "css": "#1572B6",
    "nodejs": "#339933",
    "deno": "#000000",
    "bun": "#FBF0DF",
    "nextjs": "#AAAAAA",
    "nuxtjs": "#00DC82",
    "express": "#68A063",
    "nestjs": "#E0234E",
    "docker": "#2496ED",
    "webpack": "#8DD6F9",
    "react": "#61DAFB"
}

export function getColor(name: string): string {
    const keys = Object.keys(langColor);
    if (keys.includes(name)) {
        return langColor[name as keyof typeof langColor];
    }
    return "#000000";
}