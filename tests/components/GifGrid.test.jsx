import { fireEvent, render, screen } from "@testing-library/react";
import { Gifgrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Test <Gridgrid/>', () => {

    const category = 'Digimon'

    test('it should show the loading at the begining ', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<Gifgrid category={category}/>);
        expect( screen.getAllByText('cargando imagenes'));
        expect( screen.getAllByText(category));
    });
    
    test('it should show item after load images from useFetchGifs ', () => {
        const gifs = [
            {
                id: 'a1',
                title: 'digimon',
                url: 'https://127.0.0.1:5173/image.jpg'
            },
            {
                id: 'a2',
                title: 'digimon 2',
                url: 'https://127.0.0.1:5173/image2.jpg'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        
        render(<Gifgrid category={category}/>);
        //screen.debug();
        expect( screen.getAllByRole( 'img' ).length ).toBe(2);
    })
})
