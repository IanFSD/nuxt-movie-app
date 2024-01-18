

export default defineEventHandler((event) => {
    const id = [...event.node.req.url.split('/')].pop();
    const config = useRuntimeConfig();
  
    return $fetch(`${process.env.NUXT_API_BASE_URL}/movie/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.NUXT_API_KEY}`
      }
    });
  });