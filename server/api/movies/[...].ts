
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const data = await $fetch(`${process.env.NUXT_API_BASE_URL}/movies/${query}`, {
      method: 'GET'
    });
    return data
  });