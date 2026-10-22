import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#0A0E11] text-white">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-7xl font-extrabold text-gear">404</h1>
          <div className="h-0.5 w-16 bg-white/20 mx-auto"></div>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Page Not Found</h2>
          <p className="text-white/60 leading-relaxed">
            The page <span className="text-white">"{pageName}"</span> could not be found.
          </p>
        </div>
        <div>
          <Link
            to="/"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gear px-8 font-extrabold uppercase tracking-wide text-ink transition-colors hover:bg-gear-hover"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
