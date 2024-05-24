

export const GifItem = ({title,url}) => {
    console.log("propssss",url)
  return (
    <div className="card">
    <img src={url} alt={title} />
    <p>{title}</p>
    </div>
  )
}
