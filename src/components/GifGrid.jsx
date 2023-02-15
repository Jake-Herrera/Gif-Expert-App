import { useFetchGifs } from "../helpers/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const Gifgrid = ({category}) => {
    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {isLoading ? (
                <p>cargando imagenes</p>
            ) : (
                <div className="card-grid">
                    {images.map((image) => (
                        <GifGridItem key={image.id} {...image}/>
                    ))}
                </div>                
            )}
        </>
    )
}
