import { createContext, ReactNode, useState } from 'react';

type Props = {
  children: ReactNode;
};

type TMessageContext = {
  message: string;
  addMessage: (message: string) => void;
};

const defaultValues: TMessageContext = {
  message: '',
  addMessage: (message: string) => null,
};

export const MessageContext = createContext(defaultValues);

export const MessageProvider = ({ children }: Props): JSX.Element => {
  const [message, setMessage] = useState('');

  const addMessage = (newMessage: string): void => {
    setMessage(newMessage);
  };

  const value = {
    message,
    addMessage,
  };

  return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>;
};
