import React, { useContext } from 'react';
import { AiFillHome, AiFillLike, AiFillClockCircle } from 'react-icons/ai';
import { HiFire } from 'react-icons/hi';
import { GiBackwardTime } from 'react-icons/gi';
import { SiYoutube } from 'react-icons/si';
import { OpenSideNavContext } from '../context/OpenSideNavContext';

export default function SideNav() {
  const { openSideNav } = useContext(OpenSideNavContext);

  return (
    <>
      {openSideNav && (
        <aside className="fixed top-0 left-0 z-40 w-64 h-full py-5 px-12 bg-white dark:bg-slate-800 border-r-2 border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-200">
          <ul className="text-lg pt-28 mb-10">
            <h3 className="text-base mb-4">MENU</h3>
            <li className="cursor-pointer flex items-center mb-2">
              <AiFillHome className="inline mr-3 text-brand" />{' '}
              <span className="font-normal text-brand">Home</span>
            </li>
            <li className="cursor-pointer flex items-center mb-2">
              <HiFire className="inline mr-3" />{' '}
              <span className="font-light">Trending</span>
            </li>
            <li className="cursor-pointer flex items-center mb-2">
              <SiYoutube className="inline mr-3" />{' '}
              <span className="font-light">Subscription</span>
            </li>
          </ul>

          <ul className="text-lg">
            <h3 className="text-base mb-4">LIBRARY</h3>
            <li className="cursor-pointer flex items-center mb-2">
              <GiBackwardTime className="inline mr-3" />{' '}
              <span className="font-light">History</span>
            </li>
            <li className="cursor-pointer flex items-center mb-2">
              <AiFillLike className="inline mr-3" />{' '}
              <span className="font-light">Likes Videos</span>
            </li>
            <li className="cursor-pointer flex items-center mb-2">
              <AiFillClockCircle className="inline mr-3" />{' '}
              <span className="font-light">Watch later</span>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
}
