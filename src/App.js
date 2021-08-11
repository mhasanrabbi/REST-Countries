import { Container } from '@material-ui/core';
import Countries from './components/Countries';
import Header from './components/Header';

function App() {

  return (
    <div>
    <Container>
      <Header/>
      <Countries/>
    </Container>
    </div>
  );
}

export default App;
