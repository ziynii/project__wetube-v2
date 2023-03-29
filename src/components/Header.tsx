import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CgMenuLeftAlt } from 'react-icons/cg';
import { IoPersonCircle } from 'react-icons/io5';
import { BiSearch } from 'react-icons/bi';
import { VscBell } from 'react-icons/vsc';
import { BiX } from 'react-icons/bi';
import { SiYoutube } from 'react-icons/si';
import SearchInput from './SearchInput';
import { OpenSideNavContext } from '../context/OpenSideNavContext';

export default function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const { toggleSideNav } = useContext(OpenSideNavContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('watch')) {
      setOpenSearch(false);
    } else if (location.pathname.includes('videos/')) {
      setOpenSearch(true);
    }
  }, [location]);

  return (
    <header className="fixed w-full flex items-center py-5 px-5 justify-between bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-gray-600 z-50 lg:px-16">
      <div className="basis-4/5 md:basis-1/5 flex">
        <button
          className="w-6 text-2xl mr-4 text-zinc-600 dark:text-white"
          onClick={() => toggleSideNav()}
        >
          <CgMenuLeftAlt />
        </button>
        <Link to="/">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:relative md:w-28">
            <h1 className="flex items-center font-mono font-bold text-2xl dark:text-white">
              <SiYoutube className="inline-block mr-2 text-brand" />
              WETUBE
            </h1>
          </div>
        </Link>
      </div>

      <div className="hidden md:block basis-3/5">
        <SearchInput />
      </div>

      {openSearch && (
        <div className="md:hidden flex items-center absolute  w-full bg-white dark:bg-slate-800">
          <button
            className="text-2xl text-zinc-600 dark:text-white"
            onClick={() => setOpenSearch(false)}
          >
            <BiX />
          </button>
          <SearchInput />
        </div>
      )}

      <div className="basis-1/5 flex justify-end">
        <div className="hidden items-center text-2xl text-zinc-600 dark:text-white md:flex">
          <button className="mr-3">
            <VscBell />
          </button>
          <button className="mr-3">
            <IoPersonCircle />
          </button>
        </div>
        <button className="hidden w-24 py-2 ml-3 bg-brand text-white rounded-md lg:block">
          Login
        </button>
        <button
          className="text-2xl text-zinc-600 dark:text-white md:hidden"
          onClick={() => setOpenSearch(true)}
        >
          <BiSearch />
        </button>
      </div>
    </header>
  );
}
