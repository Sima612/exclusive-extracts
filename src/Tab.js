import { Disclosure, Menu } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tab({ item }) {
  return (
    <Disclosure.Panel>
      <a
        key={item.name}
        as="a"
        href={item.href}
        className={classNames(
          item.current
            ? "bg-gray-900 text-white cursor-pointer"
            : "text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer",
          "block rounded-md px-3 py-2 text-base font-medium"
        )}
        aria-current={item.current ? "page" : undefined}
      >
        {item.name}
      </a>
    </Disclosure.Panel>
  );
}
