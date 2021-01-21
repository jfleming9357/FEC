import { mount, shallow } from 'enzyme';
import { App } from '../../client/App';
import { waitFor, render, screen } from '@testing-library/react';
import { ProductOverview } from '../../client/components/ProductOverview';
import { ProductProvider } from '../../client/context/ProductContext';

describe('Overview components', () => {
  it('Renders App without crashing', () => {
    shallow(
      <ProductProvider>
        <App />
      </ProductProvider>
    );
  });

  describe('Renders Product Overview Component without crashing', () => {
    beforeEach(() => {
      render(
        <ProductProvider>
          <App />
        </ProductProvider>
      );
    });

    it('Should Display Camo Onesie', () => {
      waitFor(() =>
        expect(screen.getByTestId('prodName')).toHaveTextContent('Camo Onesie')
      );
    });
  });
});
