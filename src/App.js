import { Container } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import Countries from './components/Countries';
import HeaderContent from './components/Header';
import SearchFilterBox from './components/SearchFilterBox';
import SingleCountry from './components/SingleCountry';


function App() {

  return (
    <Container maxWidth="lg">
      <HeaderContent/>
        <Switch>
          <Route exact path="/">
            <SearchFilterBox/>
            <Countries/>
            </Route>
          <Route path="/countries/:name" children={<SingleCountry/>}></Route>
        </Switch>
    </Container>
  );
}

export default App;
