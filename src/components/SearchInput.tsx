import React from 'react';
import { BiSearch } from 'react-icons/bi';

export default function SearchInput() {
  return (
    <form className="relative w-4/5 mx-auto">
      <input
        className="w-full py-2 px-4 rounded-3xl border-0 bg-gray-100 outline-none"
        type="text"
      />
      <button className="absolute right-4 top-3 text-zinc-600">
        <BiSearch />
      </button>
    </form>
  );
}
