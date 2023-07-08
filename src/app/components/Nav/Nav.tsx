'use client';
import { useState } from 'react';

import { Collapse, Card } from '@material-tailwind/react';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen((cur) => !cur);

  return (
    <nav className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
      <div className="flex items-center space-x-2">
        <div>Logo</div>
      </div>

      <div>
        <button
          type="button"
          className="h-9 w-9 overflow-hidden rounded-full"
          onClick={closeMenu}
        >
          <img src="https://plchldr.co/i/40x40?bg=111111" alt="plchldr.co" />
        </button>

        <Collapse
          className="absolute right-2 w-48 divide-y z-50"
          x-transition
          open={open}
        >
          <Card className=" divide-gray-200 rounded-md  border-gray-200 bg-white  border shadow-lg">
            <div className="flex items-center space-x-2 p-2">
              <img
                src="https://plchldr.co/i/40x40?bg=111111"
                alt="plchldr.co"
                className="h-9 w-9 rounded-full"
              />
              <div className="font-medium">Hafiz Haziq</div>
            </div>

            <div className="flex flex-col space-y-3 p-2">
              <a href="#" className="transition hover:text-blue-600">
                My Profile
              </a>
              <a href="#" className="transition hover:text-blue-600">
                Edit Profile
              </a>
              <a href="#" className="transition hover:text-blue-600">
                Settings
              </a>
            </div>

            <div className="p-2">
              <button className="flex items-center space-x-2 transition hover:text-blue-600">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
                <div>Log Out</div>
              </button>
            </div>
          </Card>
        </Collapse>
      </div>
    </nav>
  );
}
