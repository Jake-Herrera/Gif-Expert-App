export const GifGridItem = ({title, url}) => {
  return (
    <div className="card">
        <img src={url.url} alt={title}></img>
        <p>{title}</p>
    </div>
  )
}
