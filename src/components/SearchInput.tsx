import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useNavigate, useParams } from 'react-router-dom';

export default function SearchInput() {
  const { keyword } = useParams();

  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <form className="relative w-4/5 mx-auto" onSubmit={handleSubmit}>
      <input
        className="w-full py-2 px-4 rounded-3xl border-0 bg-gray-100 dark:bg-gray-600 dark:text-white outline-none"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="absolute right-4 top-3 text-zinc-600 dark:text-white">
        <BiSearch />
      </button>
    </form>
  );
}
