import { useState } from "react";
import { AddCategory, Gifgrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one pounch']);
    
    const onAddCategory = (category) => {
        if(!categories.includes(category)) {
            setCategories([...categories, category]);
        } else {
            alert("esa categoria ya existe");
        }
        
    };

    return (
        <>
            <h1> Gif Expert </h1>

            <AddCategory onSetCategorie={onAddCategory}/>

            {categories.map((category, index) => (
                    <Gifgrid key={category} category={category}/>
                ))
            }
        </>
    )
}

