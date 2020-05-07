const fs = require('fs')
const tag = require('../config/project.tag')
const path = require('path')

const articlePath = path.join(process.cwd(), 'config')
const futurePath = path.join(articlePath, 'future')
const pastPath = path.join(articlePath, 'past')

const keys = Object.keys(tag)

keys.forEach(key => {
  if(!exists(key)) {
    console.log(key)
  }
})

function exists (key) {
  return fs.existsSync(path.join(futurePath, key)) && fs.existsSync(path.join(pastPath, key))
}

