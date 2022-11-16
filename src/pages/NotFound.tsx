import React from 'react';
import { registTitle } from '../util/helmet';

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
			{registTitle('Not Found')}
      <h1 className="font-mono pr-2 animate-cursor">404, Page not found.</h1>
    </div>
  );
}
