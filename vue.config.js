
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/camarerodigital.onrender/'
    : '/',
  transpileDependencies: true
}
