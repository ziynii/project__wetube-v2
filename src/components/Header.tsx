import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';
import { HiBars3CenterLeft } from 'react-icons/hi2';
import { IoPersonCircle } from 'react-icons/io5';
import { VscBell } from 'react-icons/vsc';
import SearchInput from './SearchInput';

export default function Header() {
  return (
    <header className="flex items-center py-5 px-16">
      <div className="basis-2/6 flex">
        <button className="w-6 text-2xl mr-4 text-zinc-600">
          <HiBars3CenterLeft />
        </button>
        <Link to="/">
          <img className="w-2/5" src={logo} alt="wetube 로고" />
        </Link>
      </div>

      <div className="basis-3/6">
        <SearchInput />
      </div>

      <div className="basis-1/6 flex justify-end">
        <div className="flex items-center text-2xl text-zinc-600">
          <button className="mr-3">
            <VscBell />
          </button>
          <button className="mr-3">
            <IoPersonCircle />
          </button>
        </div>
        <button className="w-24 py-2 ml-3 bg-brand text-white rounded-md">
          Login
        </button>
      </div>
    </header>
  );
}
