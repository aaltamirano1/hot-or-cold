import React from 'react';
import {shallow, mount} from 'enzyme';

import Nav from './Nav';

describe('<Nav />', () => {
  it('Renders without crashing', () => {
    shallow(<Nav />);
  });
});