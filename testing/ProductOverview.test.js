import { shallow } from 'enzyme';
import { ProductOverview } from '../client/components/ProductOverview';

it('Renders Product Overview Component without crashing', () => {
  shallow(<ProductOverview />);
});
