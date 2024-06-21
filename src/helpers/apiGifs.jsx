
export const getApi= async(categories)=>{

    const apikey = 'bH9Bbq4AYAFkl9b1WKyc7riMYVtLXG3x';

    const apilink = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${categories}&limit=10`);

    const {data} = await apilink.json();

    const mygif = data.map( e =>
      ({
        title : e.title,
        id : e.id,
        url : e.images.downsized_medium.url
      })
    )
    return mygif

  }