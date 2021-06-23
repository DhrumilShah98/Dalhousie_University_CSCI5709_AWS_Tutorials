import { Form } from './components/Form/Form';
import { Users } from './components/Users/Users';
import { User } from './components/Users/User/User';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/", "/login"]} component={Form} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/users/:id" component={User} />
        <Route path="/" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
