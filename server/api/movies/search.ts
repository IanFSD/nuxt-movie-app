export default defineEventHandler(event => {
    const query = getQuery(event);
    const config = useRuntimeConfig();
    const page = 1; // You may need to define 'page' or get it from somewhere
    return $fetch(`${process.env.NUXT_API_BASE_URL}/search/movie?query=${query.query}&page=${query.page}`, {    
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${process.env.NUXT_API_KEY}`
        }
    });
});