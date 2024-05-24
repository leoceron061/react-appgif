export const getGifs=async(category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=afIx8bhdlsptsH22D3OzOspZFMQD0A3l&q=${category}&limit=20`

    const resp=await fetch(url);
    
    const {data}=await resp.json();
    
    const gifs=data.map(img=>({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }))
    console.log("gifssss",gifs,)
    return gifs;
 }