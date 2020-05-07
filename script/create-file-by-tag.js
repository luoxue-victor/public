const fs = require('fs')
const tag = require('../config/project.tag')
const path = require('path')

const articlePath = path.join(process.cwd(), 'article')
const futurePath = path.join(articlePath, 'future')
const pastPath = path.join(articlePath, 'past')

const keys = Object.keys(tag)

keys.forEach(key => {
  if(!exists(key)) {
    writeFile(key)
  }
})

function writeFile (key) {
  const content = `## ${key}`
  const futureMdPath = path.join(futurePath, key + '.md')
  const pastMdPath = path.join(pastPath, key + '.md')

  fs.writeFileSync(futureMdPath, content)
  fs.writeFileSync(pastMdPath, content)
}

function exists (key) {
  const futureMdPath = path.join(futurePath, key + '.md')
  const pastMdPath = path.join(pastPath, key + '.md')
  return fs.existsSync(futureMdPath) && fs.existsSync(pastMdPath)
}

console.log()
console.log('生成文件完成')
console.log()