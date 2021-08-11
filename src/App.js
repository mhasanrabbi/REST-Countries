import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Countries from './components/Countries';
import Filter from './components/FilterSearch';
import Header from './components/Header';
import SingleCountry from './components/SingleCountry';
import { StateProvider } from './context/GlobalState';


function App() {

  return (
    <Router>
      <div>
        <StateProvider>
          <Container maxWidth="xs">
            <Header/>
            <Route exact path="/">
              <Filter/>
              <Countries/>
            </Route>
            <Route path="/countries/:name" children={<SingleCountry/>}></Route>
          </Container>
        </StateProvider>
      </div>
    </Router>
  );
}

export default App;
