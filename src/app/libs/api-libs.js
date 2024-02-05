export const getAnimeResponse = async (resource, query) => {
    // const response = await fetch(`https://api.jikan.moe/v4/top/anime?limit=8`)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    return await response.json()
}