import {fromMarkdown} from 'mdast-util-from-markdown'

const doc = `# Hello, **world**!`
const tree = fromMarkdown(doc)

console.dir(tree, { depth: null })