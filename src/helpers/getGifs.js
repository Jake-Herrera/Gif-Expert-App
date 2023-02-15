export const getGifs = async (category, limit) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=E6a0FvaDiqWyqqLk6kt7O8qOrXYXPhNs&q=${category}&limit=${limit}`;

    const resp = await fetch(url);
    const { data= [] } = await resp.json();
    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium
        }
    ));
    return gifs;
};
