import rehypeKatex from "rehype-katex"
import rehypeStringify from "rehype-stringify"
import remarkMath from "remark-math"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import remarkGfm from "remark-gfm"
import remarkImages from "remark-images"
import { remarkGithubFlavor, rehypeStyle } from "remark-github-flavor"

export const remarkPlugins = [
    remarkParse,
    remarkGithubFlavor,
    remarkMath,
    remarkGfm,
    remarkImages,
    remarkRehype,
]

export const rehypePlugins = [
    rehypeStyle,
    rehypeKatex,
    rehypeStringify,
]