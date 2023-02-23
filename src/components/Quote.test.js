import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

describe('Quote', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
