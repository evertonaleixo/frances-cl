import * as React from 'react';
import { Route } from 'react-router';
import App from './App';
import { Router, IndexRoute, hashHistory } from 'react-router';
import Content from './Components/Content/Content';
import Wellcome from './Components/Wellcome/Wellcome';

export const AppRouter: React.StatelessComponent<{}> = () => {

  return (
    <Router history={hashHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Wellcome} />
        <Route path="/content" component={Content} />
      </Route>
    </Router>
  );
};