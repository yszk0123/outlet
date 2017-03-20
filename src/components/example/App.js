// @flow
import React, { Component } from 'react';
import { Wrapper, Header, Logo, Intro } from './AppStyles';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo />
          <h2>Welcome to React</h2>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Wrapper>
    );
  }
}

export default App;
