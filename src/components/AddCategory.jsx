import { useState } from 'react'

export const AddCategory = ({onSetCategorie}) => {

    const [inputValue, setinputValue] = useState('One punch');

    const onInputchange = ({target}) => {
        setinputValue(target.value);
    }

    const onSumit= (event) => {
        event.preventDefault();
        if(inputValue.trim()) {
            onSetCategorie(inputValue.trim());
            setinputValue('');
        }

    }

    return (
        <form onSubmit={onSumit}>
            <input
                type="text"
                placeholder='Buscar gif'  
                value={inputValue}
                onChange={onInputchange}
            />
        </form>
    )
}
