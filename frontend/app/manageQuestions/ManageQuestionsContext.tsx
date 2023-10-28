'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

const ManageQuestionsContext = createContext(null);

type ManageQuestionsProviderProps = {
  children: ReactNode;
};

export function ManageQuestionsProvider({children} :  ManageQuestionsProviderProps) {
  const [addButtonPressed, setAddButtonPressed] = useState(false);

  return (
    <ManageQuestionsContext.Provider value={{ addButtonPressed, setAddButtonPressed }}>
      {children}
    </ManageQuestionsContext.Provider>
  );
}

export function useAddButtonPress() {
  return useContext(ManageQuestionsContext);
}