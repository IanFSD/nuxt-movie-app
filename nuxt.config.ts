// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    'nuxt-windicss'
      ],
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY,
    // We use the public runtime config in 
    //order to expose this also to the client side
    public: {
        imgBaseUrl: process.env.NUXT_PUBLIC_IMG_BASE_URL, 
        NUXT_API_BASE_URL: process.env.NUXT_API_BASE_URL,

    }
  }
})
