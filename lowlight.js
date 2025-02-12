import {createLowlight} from 'lowlight'
import {toHtml} from 'hast-util-to-html'

import markdown from 'highlight.js/lib/languages/markdown';

const lowlight = createLowlight()
lowlight.register('markdown', markdown)

const markdownSource = 'Hello, **world**!';

const tree = lowlight.highlight('markdown', markdownSource);

const html = toHtml(tree);

console.log(html)