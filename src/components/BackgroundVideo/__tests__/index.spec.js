import React from 'react';
import { create } from 'react-test-renderer';

import BackgroundVideo from '../index';

describe('components/<BackgroundVideo />', () => {
  it('should render a backgroundVideos', () => {
    const tree = create(<BackgroundVideo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
