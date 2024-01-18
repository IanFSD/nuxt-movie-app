// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    'nuxt-windicss',
    ],
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY,
    apiBaseUrl: process.env.NUXT_API_BASE_URL,
    // We use the public runtime config in 
    //order to expose this also to the client side
    public: {
        imgBaseUrl: process.env.NUXT_PUBLIC_IMG_BASE_URL,
    }
  }
})
