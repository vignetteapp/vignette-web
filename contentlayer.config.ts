// contentlayer.config.js

import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'

export const Post = defineDocumentType(() => ({
  name: `Post`,
  filePathPattern: `**/*.mdx`,
  contentType: `mdx`,
  fields: {
    title: {
      type: `string`,
      description: `The title of the post`,
      required: true,
    },
    catagory: {
      type: `string`,
      description: `The catagory of the post`,
      required: true,
    },
    date: {
      type: `date`,
      description: `The date of the post`,
      required: true,
    },
    summary: {
      type: `string`,
      description: `The summary of the post`,
      required: true,
    },
    image: {
      type: `string`,
      description: `The cover image of the post`,
      required: true,
    },
    author: {
      type: `string`,
      description: `The author of the post. Must match the author's "name" value in \`data/members.json\`.`,
      required: true,
    },
    tags: {
      type: `list`,
      of: { type: `string` },
      typeField: `tag`,
      required: true,
    },
  },
  computedFields: {
    url: {
      type: `string`,
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
    },
    slug: {
      type: `string`,
      resolve: (doc) => doc._raw.flattenedPath,
    },
  },
}))

export default makeSource({
  contentDirPath: `posts`,
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: [`anchor`],
          },
        },
      ],
    ],
  },
})
