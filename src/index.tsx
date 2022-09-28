import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { MessageProvider } from 'contexts/message.context';
import { AuthProvider } from 'contexts/auth/auth.context';

import { PostProvider } from 'contexts/post/post.context';
import App from './App';

const container = document.getElementById('root') as HTMLDivElement;
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <AuthProvider>
      <PostProvider>
        <MessageProvider>
          <App />
        </MessageProvider>
      </PostProvider>
    </AuthProvider>
  </StrictMode>,
);
