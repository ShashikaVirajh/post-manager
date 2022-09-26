import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { MessageProvider } from 'contexts/message.context';

import App from './App';

const container = document.getElementById('root') as HTMLDivElement;
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <MessageProvider>
      <App />
    </MessageProvider>
  </StrictMode>,
);
