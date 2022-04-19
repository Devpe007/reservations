import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Reservations from '../pages/Reservations';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/reservations" exact component={Reservations} />
    </Switch>
  );
};

export default Routes;