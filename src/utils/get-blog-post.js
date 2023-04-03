import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'

export const getBlogPosts = () => {
  const result = []
  const postsDirectory = path.join(process.cwd(), './data/blog')
  const filenames = fs.readdirSync(postsDirectory)
  filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename)
    const slug = filename.replace('.mdx', '')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const {
      data: { title, description, date, backdrop_path, category, author },
      content,
    } = matter(fileContents)
    result.push({
      slug,
      title,
      description,
      date,
      backdrop_path,
      content,
      readingTime: readingTime(content).text,
      category,
      author,
    })
  })
  return result.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
}

export const getBlogPost = slug => {
  const fileContents = fs.readFileSync(
    path.join(process.cwd(), './data/blog', `${slug}.mdx`),
    'utf8'
  )
  const { data, content } = matter(fileContents)
  return {
    data: {
      ...data,
      readingTime: readingTime(content).text,
    },
    content,
  }
}

export const getRecentBlogPosts = async count => {
  const posts = getBlogPosts()

  const recentPosts = posts
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .slice(0, count)

  return recentPosts
}
