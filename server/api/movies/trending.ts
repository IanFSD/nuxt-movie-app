export default defineEventHandler(async event => {
    const data = await $fetch(`${process.env.NUXT_API_BASE_URL}/movies/trending/week`, {
        method: 'GET'
    });
    return data;
});