import { Container } from '@material-ui/core';
import { Route, Switch } from "react-router-dom";
import Countries from './components/Countries';
import Header from './components/Header';
import SingleCountry from './components/SingleCountry';


function App() {

  return (
    <div>
      <Container maxWidth="xs">
        <Header/>
          <Switch>
            <Route exact path="/">
              <Countries/>
            </Route>
          <Route path="/countries/:name" children={<SingleCountry/>}></Route>
          </Switch>
        </Container>
    </div>
  );
}

export default App;
