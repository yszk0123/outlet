import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Dummy = () => null;

const routes = [
  {
    path: '/foo',
    title: 'Foo',
    component: Dummy
  }
];

it('renders without crashing', () => {
  const wrapper = shallow(<NavBar routes={routes} />);
  const route = routes[0];
  expect(wrapper.contains(<Link to={route.path}>{route.title}</Link>)).toEqual(
    true
  );
});
