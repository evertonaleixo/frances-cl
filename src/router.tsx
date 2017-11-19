import * as React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Content from './Components/Content/Content';
import Wellcome from './Components/Wellcome/Wellcome';

// @types/react-router-dom pq esse e não @types/react-router a biblioteca mudou
// @tyeps/react-router e o antigo   saquei

export const AppRouter: React.StatelessComponent<{}> = () => {

  return (
    <Router>
      <App>
        <Switch>
          <Route path="/" strict={true} exact={true} component={Wellcome} />
          <Route path="/content" strict={true} exact={true} component={Content} />
        </Switch>
      </App>
    </Router>
  );
};