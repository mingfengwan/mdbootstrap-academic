const purgecss = require('@fullhuman/postcss-purgecss')

const purgecssConfig = purgecss({
  content: ['./dist/*.html', './node_modules/mdb-ui-kit/js/mdb.umd.min.js'],
  css: ['./node-modules/mdb-ui-kit/**/*.css'],
})

module.exports = ({ env }) => ({
  plugins: [
    require('autoprefixer'),
    require('postcss-nested'),
    env === 'production' ? purgecssConfig : false,
  ]
})