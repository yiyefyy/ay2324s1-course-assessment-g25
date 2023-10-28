'use client'

import { createContext, useContext, useState } from 'react';

const ManageQuestionsContext = createContext(null);

export function ManageQuestionsProvider({ children }) {
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