import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => {

    test('should have a title ', () => {
        
        render( <GifExpertApp /> );
        //screen.debug();
        expect( screen.getAllByText('Gif Expert')).toBeTruthy();
        expect( screen.getByRole('heading', {level: 1})).toBeTruthy();
    });
});