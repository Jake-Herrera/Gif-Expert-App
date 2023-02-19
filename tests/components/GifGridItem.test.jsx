import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe('Pruebas para >GifGrifItem/>', () => {
    const title = "Digimon";
    const url = 'https://media3.giphy.com/media/SZXk6S3KjtFM8xJ5Ey/giphy.gif?cid=b62a8501zojs1j0xkenf7ix6s6c4t88sdpgobczc1ycl21of&rid=giphy.gif&ct=g';
    test('Debe hacer match con el snapshot',  ()=>{
        const container = render( <GifGridItem title={title} url={url}/> );
        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el url indicado',  ()=>{
        const container = render( <GifGridItem title={title} url={url}/> );
        const {src, alt} = screen.getByRole('img');
        //screen.debug();
        expect( src ).toBe(url);
        expect( alt ).toBe(title);
    });

    test('Debe mostrar el titulo de la imagen',  ()=>{
        const container = render( <GifGridItem title={title} url={url}/> );      
        expect( screen.getByText(title) ).toBeTruthy();
    });
});