import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Test useFetchGifs hook', () => {
    test('should return the initial state [ [], true]', () => {
        const { 
                result: { 
                    current: { 
                        images, 
                        isLoading
                    } 
                } 
            } = renderHook(() => useFetchGifs('DIGIMON'));

        expect( images.length ).toBe(0);
        expect( isLoading).toBeTruthy();
    });

    test('should return an array of images and isLoading false', async() => {
        const { result } = renderHook(() => useFetchGifs('DIGIMON'));
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { 
            current: { 
                images, 
                isLoading
            }
        } = result;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading).not.toBeTruthy(); // expect( isLoading).toBeFalsy();
    });    
});
