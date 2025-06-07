import rehypeKatex from "rehype-katex"
import rehypeStringify from "rehype-stringify"
import remarkMath from "remark-math"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import remarkGfm from "remark-gfm"
import { remarkGithubFlavor, rehypeAdmonitionStyle } from "./remark-github-flavor/index.ts"

export const remarkPlugins = [
    remarkParse,
    remarkGithubFlavor,
    remarkMath,
    remarkGfm,
    remarkRehype,
]

export const rehypePlugins = [
    rehypeAdmonitionStyle,
    rehypeKatex,
    rehypeStringify,
]