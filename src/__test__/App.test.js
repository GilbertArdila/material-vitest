import App from '../App';
import {render,screen} from '@testing-library/react';
import { beforeEach, expect } from 'vitest';


describe('<App/>', () => {
    beforeEach(() => {
         render(<App/>);
    });

    test('should render a title', () => { 
       
        expect(screen.getByText(/hello/i)).toBeDefined();
       
       
     });

});