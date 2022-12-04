module.exports = {
  ssr: false,
  target: 'static',
  head: {
    title: 'discord',
    meta: [{ charset: "utf-8" }]
  },
  loading: false,
  plugins: [

  ],
  css: [
    '~/assets/scss/style.scss'
  ],
  bodyAttrs: {
    class: 'nuxt-body'
  },
  buildModules: [

  ],
  modules: [

  ],
};
