import { createContext, useContext, useState } from 'react';

export const InputHandlerContext = createContext();

const InputHandlerContextProvider = ({ children }) => {
  return (
    <InputHandlerContext.Provider>{children}</InputHandlerContext.Provider>
  );
};

export default InputHandlerContextProvider;
