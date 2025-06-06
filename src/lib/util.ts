interface ProgrammingLang {
    set: string;
    name: string;
}

const programming_langs: ProgrammingLang[] = [
    { set: "devicon", name: "c" },
    { set: "devicon", name: "cplusplus" },
    { set: "devicon", name: "go" },
    { set: "devicon", name: "java" },
    { set: "devicon", name: "javascript" },
    { set: "devicon", name: "markdown"},
    { set: "devicon", name: "php" },
    { set: "devicon", name: "python" },
    { set: "devicon", name: "ruby" },
    { set: "devicon", name: "rust" },
    { set: "devicon", name: "solidity" },
    { set: "devicon", name: "tex" },
    { set: "devicon", name: "typescript" }
]

const frameworks: ProgrammingLang[] = [
    { set: "devicon", name: "jquery" },
    { set: "devicon", name: "react" },
    { set: "devicon", name: "vuejs" },
    { set: "devicon", name: "nextjs" },
    { set: "devicon", name: "express" },
    { set: "devicon-plain", name: "rails" },
    { set: "devicon", name: "tauri" },
];

const tools: ProgrammingLang[] = [
    { set: "devicon", name: "docker" },
    { set: "devicon", name: "git" },
    { set: "devicon", name: "linux" },
    { set: "devicon", name: "vscode" },
    { set: "devicon", name: "bash" },
    { set: "devicon", name: "npm" },
    { set: "devicon", name: "yarn" },
    { set: "devicon", name: "pnpm" },
    { set: "devicon", name: "bun" },
    { set: "devicon", name: "android" },
    { set: "devicon", name: "apple" },
    { set: "devicon", name: "bitbucket" },
    { set: "devicon", name: "canva" },
    { set: "simple-icons", name: "clerk" },
    { set: "devicon", name: "codepen" },
    { set: "simple-icons", name: "codesandbox" },
    { set: "devicon", name: "composer" },
    { set: "devicon", name: "digitalocean" },
    { set: "devicon", name: "figma" },
    { set: "devicon", name: "github" },
    { set: "devicon", name: "gitlab" },
    { set: "simple-icons", name: "hyper" },
    { set: "simple-icons", name: "snyk" }
];

export function getProgrammingLangs(): ProgrammingLang[] {
    // returns "set:name" pairs for programming languages
    return programming_langs;
}

export function getFrameworks(): ProgrammingLang[] {
    // returns "set:name" pairs for frameworks
    return frameworks;
}

export function getTools(): ProgrammingLang[] {
    // returns "set:name" pairs for tools
    return tools;
}
