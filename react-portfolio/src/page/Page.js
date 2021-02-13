import React, { useState } from 'react';

export const PageContext = React.createContext();

export function usePage() {
  const [page, setPage] = useState('profile');

  return { page, setPage };
}

export function Page({ children }) {
  const { page, setPage } = usePage();

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
}
