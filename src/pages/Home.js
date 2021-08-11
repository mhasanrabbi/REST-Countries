import { Link } from "react-router-dom";
import Countries from "../components/Countries";
import Header from '../components/Header';
import Details from "./Details";

function Home() {

  return (
    <div>
        <Header/>
        <Link to="/details">
          <Details/>
        </Link>
        <Countries>
        </Countries>
      </div>
  );
}

export default Home;
