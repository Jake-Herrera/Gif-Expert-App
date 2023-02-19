import { useFetchGifs } from "../hooks/useFetchGifs.js";
import { GifGridItem } from "./GifGridItem";
import PropTypes from 'prop-types';

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
                        <GifGridItem key={image.id} title={image.title} url={image.url}/>
                    ))}
                </div>                
            )}
        </>
    )
}

Gifgrid.propTypes = {
    category: PropTypes.string.isRequired
}