import React from 'react';
import { shallow, mount } from 'enzyme';

import GroceryList from './GroceryList'

describe('Clear Groceries Button', () => {

  const groceries = [
    {
      id: 1,
      name: "nacho cheese",
      quantity: 30,
      notes: 'get the good kind, fam',
      purchased: true,
      starred: true,
    },
    {
      id: 2,
      name: "egg whites",
      quanity: 1,
      notes: 'no egg yokes for this guy!',
      purchased: false,
      starred: true,
    },
    {
      id: 3,
      name: "smoked oysters",
      notes: 'only the BEST',
      purchased: true,
      starred: false,
    }
  ]

  it('should render multiple groceries when given an array of groceries', () => {
    const wrapper = mount(<GroceryList groceries={groceries} />);
    expect(wrapper.find('.Grocery'))

  });

  it('should call onClearGroceries when the clear groceries button is clicked', () => {
    const onClearGroceriesMock = jest.fn();
    const wrapper = shallow(
      <GroceryList
        onClearGroceries={onClearGroceriesMock}
      />
    );
    wrapper.find('.clear-groceries').simulate('click');
    expect(onClearGroceriesMock).toBeCalled();
  });
});
