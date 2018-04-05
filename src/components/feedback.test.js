import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
  it('Renders without crashing', () => {
    shallow(<Feedback />);
  });
});

it('Renders from feedback', () => {
  let TEST_FEEDBACK = 'This is feedback!';

  let wrapper = shallow(<Feedback feedback={TEST_FEEDBACK} />);
  expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true);
});
