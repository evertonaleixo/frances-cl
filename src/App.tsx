import * as React from 'react';
import './App.css';

export interface AppProps {

}

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}
