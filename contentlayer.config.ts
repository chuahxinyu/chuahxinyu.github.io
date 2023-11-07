import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { s } from "hastscript";
import rehypeAutolinkHeadings, {
  type Options as AutolinkOptions,
} from "rehype-autolink-headings";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
      description: "The title of the post",
    },
    date: {
      type: "date",
      required: true,
      description: "When th post was published",
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: false,
      description: "The tags of the post",
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      description: "The slug of the post, e.g. my-topic/my-post",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [
      /**
       * Adds support for GitHub Flavored Markdown
       */
      remarkGfm,
    ],
    rehypePlugins: [
      /**
       * Adds ids to headings
       */
      rehypeSlug,
      [
        /**
         * Adds auto-linking button after h1, h2, h3 headings
         */
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          test: ["h1", "h2", "h3"],
          content: s(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              width: "24",
              height: "24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-label": "Anchor link",
            },
            [
              s("line", { x1: "4", y1: "9", x2: "20", y2: "9" }),
              s("line", { x1: "4", y1: "15", x2: "20", y2: "15" }),
              s("line", { x1: "10", y1: "3", x2: "8", y2: "21" }),
              s("line", { x1: "16", y1: "3", x2: "14", y2: "21" }),
            ]
          ),
        } satisfies Partial<AutolinkOptions>,
      ],
    ],
  },
});
