import React from 'react';

export default function Loading() {
  return (
    <div className="float-left w-full h-screen dark:bg-slate-800 flex justify-center items-center">
      <div className="w-24 mx-auto">
        <div className="p-4">
          <div className="animation-delay-48 animate-loading text-md text-gray-600 dark:text-white float-left ">
            L
          </div>
          <div className="animation-delay-60 animate-loading text-md text-gray-600 dark:text-white float-left ">
            o
          </div>
          <div className="animation-delay-72 animate-loading text-md text-gray-600 dark:text-white float-left ">
            a
          </div>
          <div className="animation-delay-84 animate-loading text-md text-gray-600 dark:text-white float-left ">
            d
          </div>
          <div className="animation-delay-96 animate-loading text-md text-gray-600 dark:text-white float-left ">
            i
          </div>
          <div className="animation-delay-108 animate-loading text-md text-gray-600 dark:text-white float-left ">
            n
          </div>
          <div className="animation-delay-120 animate-loading text-md text-gray-600 dark:text-white float-left ">
            g
          </div>
          <div className="animation-delay-132 animate-loading text-md text-gray-600 dark:text-white float-left ">
            .
          </div>
          <div className="animation-delay-144 animate-loading text-md text-gray-600 dark:text-white float-left ">
            .
          </div>
          <div className="animation-delay-156 animate-loading text-md text-gray-600 dark:text-white float-left ">
            .
          </div>
        </div>
      </div>
    </div>
  );
}
