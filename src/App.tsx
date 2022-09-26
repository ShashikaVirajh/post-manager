import Routers from 'routes/Routes';
import Axios from 'axios';
import { FlashMessages } from 'components/messages/flash-messages.component';
import { MessageContext } from 'contexts/message.context';
import { useContext } from 'react';
Axios.defaults.baseURL = 'http://localhost:8080';

const App = (): JSX.Element => {
  const { message } = useContext(MessageContext);

  return (
    <>
      <FlashMessages message={message} />
      <Routers />
    </>
  );
};

export default App;
