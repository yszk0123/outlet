// @flow
import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';

export const Wrapper = styled.div`
  text-align: center;
`;

export const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LogoImage = props => <img {...props} src={logo} alt="logo" />;

export const Logo = styled(LogoImage)`
  animation: ${logoSpin} infinite 20s linear;
  height: 80px;
`;

export const Intro = styled.p`
  font-size: large;
`;
