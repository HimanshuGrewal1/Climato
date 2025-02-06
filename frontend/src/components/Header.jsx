import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-red-500">Reddit Clone</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-700 hover:text-red-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-red-500">
                Popular
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-red-500">
                All
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
