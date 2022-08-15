import BlogLayout from '@/components/Layout/BlogLayout'
import MDXComponents from '@/components/Utility/MDXComponents'
import { getBlogPost, getBlogPosts } from '@/utils/get-blog-post'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

function Post({ data, content }) {
  return (
    <BlogLayout frontMatter={data}>
      <MDXRemote
        {...content}
        components={MDXComponents}
      />
    </BlogLayout>
  )
}

export default Post

export const getStaticPaths = async () => {
  const posts = getBlogPosts()
  const paths = posts.map(post => ({
    params: { slug: post.slug },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = getBlogPost(params.slug)
  const mdxSource = await serialize(post.content)

  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  }
}
