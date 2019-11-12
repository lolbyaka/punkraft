import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RotateText from '..';

configure({ adapter: new Adapter() });

describe('components/<RotateText />', () => {
  it('should render a RotateText', async () => {
    const props = {
      clauses: [
        'We are craft beer bar in the heart of Kyiv with wide selection of beer.',
        '24 taps of draft beer and rich range of bottled one.',
        'Burgers, meat, fish, chips and other beer accompanying appetizers.',
      ],
      selectedWords: [
        ['craft', 'beer', 'bar'],
        ['25', 'taps'],
        ['beer', 'accompaning'],
      ],
    };
    const component = shallow(<RotateText {...props} />);
    const instance = component.instance();
    const mock = jest.spyOn(instance, 'changeNextClause');
    instance.forceUpdate();
    expect(mock).toHaveBeenCalled();
  });
});
