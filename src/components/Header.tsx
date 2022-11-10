import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';
import { HiBars3CenterLeft } from 'react-icons/hi2';
import { IoPersonCircle } from 'react-icons/io5';
import { BiSearch } from 'react-icons/bi';
import { VscBell } from 'react-icons/vsc';
import SearchInput from './SearchInput';

export default function Header() {
  return (
    <header className="relative flex items-center py-5 px-5 justify-between border-b border-gray-200 md:px-16">
      <div className="basis-4/5 md:basis-1/5 flex">
        <button className="w-6 text-2xl mr-4 text-zinc-600">
          <HiBars3CenterLeft />
        </button>
        <Link to="/">
          <img
            className="absolute w-1/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden"
            src={logo}
            alt="wetube 로고"
          />
          <img
            className="hidden md:inline-block w-28"
            src={logo}
            alt="wetube 로고"
          />
        </Link>
      </div>

      <div className="hidden md:block basis-3/5">
        <SearchInput />
      </div>

      <div className="basis-1/5 flex justify-end">
        <div className="hidden items-center text-2xl text-zinc-600 md:flex">
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
        <button className="text-2xl text-zinc-600 md:hidden">
          <BiSearch />
        </button>
      </div>
    </header>
  );
}
