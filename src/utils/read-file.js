import fs from 'fs'
import path from 'path'

export const readFile = filePath => {
  const jsonPath = path.join(process.cwd(), filePath)
  const fileContent = fs.readFileSync(jsonPath, 'utf8')
  const { categories } = JSON.parse(fileContent)
  return categories
}
