
export const getGifs = async( category ) => {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=KzDYkr3fsgBV6yhZEE2wmMRSO8dzezGP&q=${ category }&limit=10`;

    const resp = await fetch( URL );
    const { data } = await resp.json();
    console.log( data );

    const gifs =data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }))
    // console.log(gifs);
    return gifs;

}