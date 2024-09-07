import { Disclosure, Menu } from "@headlessui/react";
import logo from "./images/SweetSolventless.png";

export default function Logo() {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      {/* Profile dropdown */}
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <img
              className="h-14 w-14 rounded-full bg-center scale-125"
              src={logo}
              alt=""
            />
          </Menu.Button>
        </div>
      </Menu>
    </div>
  );
}
