import { AddCategory } from "../../src/components/AddCategory";
import { fireEvent, render, screen } from "@testing-library/react";

describe('Test <AddCategory/>',  () => {
    test('-> it should change the value of the text box',  ()=> {
        render( <AddCategory onSetCategorie={() => {}} /> );
        const input = screen.getByRole('textbox');

        fireEvent.input(input,{ target: {value: 'digimon'}});

        expect( input.value ).toBe('digimon');
        //screen.debug();
    });

    test('it should call onNewCategory if the input has a value ', () => {
        const inputValue= 'digimon';
        const onSetCategorie = jest.fn();
        render( <AddCategory onSetCategorie={onSetCategorie} /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input,{ target: {value: inputValue}});
        fireEvent.submit( form );
        expect( input.value ).toBe('');

        expect( onSetCategorie ).toHaveBeenCalled();
        expect( onSetCategorie ).toHaveBeenCalledTimes(1);
        expect( onSetCategorie ).toHaveBeenCalledWith(inputValue);
    });
    
    test('it should not call onNewCategory if the input is empty ', () => {
        const onSetCategorie = jest.fn();
        render( <AddCategory onSetCategorie={onSetCategorie} /> );

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onSetCategorie ).toHaveBeenCalledTimes(0);
    });    
});