const { default: postcssPurgecss } = require("@fullhuman/postcss-purgecss")

const purgecss = await new postcssPurgecss().purge('./purgecss.config.js')

const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')

module.exports = {
    content: ['index.html'],
    css: ['./css/style.css']
  }