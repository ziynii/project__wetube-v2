import { createContext, useState } from 'react';

type SideNavState = {
  openSideNav: boolean;
  toggleSideNav: () => void;
};

export const OpenSideNavContext = createContext<SideNavState>(
  {} as SideNavState
);

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
