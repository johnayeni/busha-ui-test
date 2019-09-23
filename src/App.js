import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import BalancesPage from './pages/BalancesPage';
import TransfersPage from './pages/TransfersPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/balances" />} />
        <Route exact path="/balances" component={BalancesPage} />
        <Route exact path="/transfers" component={TransfersPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
