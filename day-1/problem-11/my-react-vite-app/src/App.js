import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import Search from './Search';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Search} />
      </Switch>
    </Router>
  );
};

export default App;