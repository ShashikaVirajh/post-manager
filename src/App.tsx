import Routers from 'routes/Routes';
import Axios from 'axios';
Axios.defaults.baseURL = 'http://localhost:8080';

const App = (): JSX.Element => {
  return (
    <>
      <Routers />
    </>
  );
};

export default App;
