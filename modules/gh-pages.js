let ghpages = require('gh-pages')

module.exports = function () {
  this.nuxt.hook('generate:done', async () => {
    await new Promise((resolve, reject) => {
      ghpages.publish('dist', err => {
        if (typeof err !== undefined) {
          console.log('gh-pages published.')
          resolve()
        } else {
          console.log(err)
          reject()
        }
      })
    })
  })
}
