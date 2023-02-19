import { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({onSetCategorie}) => {

    const [inputValue, setinputValue] = useState('');

    const onInputchange = ({target}) => {
        setinputValue(target.value);
    }

    const onSumit= (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        console.log('paso');
        onSetCategorie(inputValue.trim());
        setinputValue('');
    }

    return (
        <form onSubmit={onSumit} aria-label="form">
            <input
                type="text"
                placeholder='Buscar gif'  
                value={inputValue}
                onChange={onInputchange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onSetCategorie: PropTypes.func.isRequired
}