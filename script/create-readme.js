const fs = require('fs')
const tag = require('../config/project.tag')
const path = require('path')

const articlePath = path.join(process.cwd(), 'article')
const futurePath = path.join(articlePath, 'future')
const pastPath = path.join(articlePath, 'past')

const keys = Object.keys(tag)

let content = '# 全栈技匠 \n\n'
let futureContent = '\n> ## 计划发布的文章\n'
let pastContent = '\n\n> ## 已经发布的文章\n'

keys.forEach(key => {
  if(exists(key)) {
    const futureMdPath = path.join(futurePath, key + '.md')
    const pastMdPath = path.join(pastPath, key + '.md')
    futureContent += '\n#' + fs.readFileSync(futureMdPath).toString() + '\n'
    pastContent += '\n#' + fs.readFileSync(pastMdPath).toString() + '\n'
  }
})

content += futureContent + pastContent

writeReadme()

function writeReadme() {
  fs.writeFileSync('readme.md', content)
}

function exists (key) {
  const futureMdPath = path.join(futurePath, key + '.md')
  const pastMdPath = path.join(pastPath, key + '.md')
  return fs.existsSync(futureMdPath) && fs.existsSync(pastMdPath)
}