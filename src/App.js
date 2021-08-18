import { Route, Switch } from "react-router-dom";
import Countries from './components/Countries';
import Header from './components/Header';
import SearchFilterBox from './components/SearchFilterContainer';
import SingleCountry from './components/SingleCountry';


function App() {

  return (
    <>
      <Header/>
        <Switch>
          <Route exact path="/">
            <SearchFilterBox/>
            <Countries/>
            </Route>
          <Route path="/countries/:name" children={<SingleCountry/>}></Route>
        </Switch>
    </>
  );
}

export default App;
