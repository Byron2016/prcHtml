//const purgecss = await new PurgeCSS().purge()
// or use the path to the file as the only parameter
//const purgecss = await new PurgeCSS().purge('./purgecss.config.js')

await new PurgeCSS().purge({
  content: ['./public/index.html'],
  css: ['./sass/custom.css'],
  out: ['./public/dist/css/reducido.css']
})


module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    })

  ]
}