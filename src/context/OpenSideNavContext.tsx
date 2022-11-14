import { createContext, useState } from 'react';

type State = {
  openSideNav: boolean;
  toggleSideNav: () => void;
};

export const OpenSideNavContext = createContext<State>({} as State);

export function OpenSideNavProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openSideNav, setOpenSideNav] = useState(false);
  const toggleSideNav = () => setOpenSideNav((prev) => !prev);
  return (
    <OpenSideNavContext.Provider value={{ openSideNav, toggleSideNav }}>
      {children}
    </OpenSideNavContext.Provider>
  );
}
