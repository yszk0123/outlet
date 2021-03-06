// @flow
import type { RouteProps } from '../../config/RouteProps';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props: { routes: RouteProps[] }) => (
  <ul>
    {props.routes.map(route => (
      <li key={route.path}>
        <Link to={route.path}>{route.title}</Link>
      </li>
    ))}
  </ul>
);

export default NavBar;
