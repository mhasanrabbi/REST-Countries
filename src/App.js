import { Layout } from 'antd';
import { Route, Switch } from "react-router-dom";
import Countries from './components/Countries';
import HeaderContent from './components/Header';
import SearchFilterBox from './components/SearchFilterBox';
import SingleCountry from './components/SingleCountry';


function App() {
  const { Header, Content } = Layout;

  return (
      <Layout>
        <Header>
          <HeaderContent/>
        </Header>
        <Content>
          <Switch>
            <Route exact path="/">
              <SearchFilterBox/>
              <Countries/>
            </Route>
          <Route path="/countries/:name" children={<SingleCountry/>}></Route>
          </Switch>
        </Content>
      </Layout>
  );
}

export default App;
