import React from 'react';
import { BiSearch } from 'react-icons/bi';

export default function SearchInput() {
  return (
    <form className="relative w-3/5 z-50">
      <input
        className="w-full p-4 rounded-3xl border-0 bg-gray-100 outline-none"
        type="text"
      />
      <button className="absolute right-4 top-5 text-zinc-600">
        <BiSearch />
      </button>
    </form>
  );
}
