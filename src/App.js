import { Container } from '@material-ui/core';
import { Route, Switch } from "react-router-dom";
import { StateProvider } from './context/GlobalState';
import Details from './pages/Details';
import Home from './pages/Home';


function App() {

  return (
      <div>
        <StateProvider>
          <Container>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/details">
              <Details/>
            </Route>
          </Switch>
          </Container>
        </StateProvider>
      </div>
  );
}

export default App;
