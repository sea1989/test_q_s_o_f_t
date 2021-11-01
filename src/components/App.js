import React from 'react';

import './reset.css';
import './App.css';

import Header from './header';
import Main from './main';

export default class App extends React.Component {



  render() {
    return (
      <React.Fragment>

        <Header />
        <Main />

      </React.Fragment>
    );
  }
}
