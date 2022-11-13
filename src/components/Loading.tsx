import React from 'react';

export default function Loading() {
	return (
    <div className="float-left mt-60 w-full h-full text-center">
      <div className="w-24 mx-auto text-center">
        <div className="p-4">
          <div className="animation-delay-48 animate-loading text-md text-gray-600 float-left ">L</div>
          <div className="animation-delay-60 animate-loading text-md text-gray-600 float-left ">o</div>
          <div className="animation-delay-72 animate-loading text-md text-gray-600 float-left ">a</div>
          <div className="animation-delay-84 animate-loading text-md text-gray-600 float-left ">d</div>
          <div className="animation-delay-96 animate-loading text-md text-gray-600 float-left ">i</div>
          <div className="animation-delay-108 animate-loading text-md text-gray-600 float-left ">n</div>
          <div className="animation-delay-120 animate-loading text-md text-gray-600 float-left ">g</div>
          <div className="animation-delay-132 animate-loading text-md text-gray-600 float-left ">.</div>
          <div className="animation-delay-144 animate-loading text-md text-gray-600 float-left ">.</div>
          <div className="animation-delay-156 animate-loading text-md text-gray-600 float-left ">.</div>
        </div>
      </div>
    </div>
	);
}

