import { Searcher } from "../../components/Search";
import {render,screen} from '@testing-library/react';

describe('<Searcher/>', () => {
  beforeEach(() => {
    render(<Searcher/>);
  });

  test('Shoul render a component', () => {
     expect(screen.getByTitle('stack')).toBeDefined();
  });

  test('Shoul render a button', () => {
    expect(screen.getByRole('button')).toBeDefined();
 });

 test('Shoul render an input', () => {
    expect(screen.getByTitle('searcher')).toBeDefined();
 });
});