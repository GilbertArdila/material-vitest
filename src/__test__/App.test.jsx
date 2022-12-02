import App from '../App';
import {render,screen} from '@testing-library/react';
import { beforeEach, expect } from 'vitest';


describe('<App/>', () => {
    beforeEach(() => {
         render(<App/>);
    });

    test('should render Div container', () => { 
       
        expect(screen.getByTitle('container')).toBeDefined();
       
       
     });

});