import { navLinks } from "../constants/constants";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { HambergerMenu } from "iconsax-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MobileSideBar onOpen={setOpen} open={open} />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between py-5 bg-white">
        <h1 className=" tracking-widest font-semibold">
          <span className="hidden sm:block">Mydietneeds</span>{" "}
          <span className="sm:hidden">DIETMATE</span>
        </h1>
        <ul className="list-none hidden sm:flex">
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              className={` hover:text-[#FD905A] text-base font-semibold  text-gray-600  cursor-pointer  mr-10
                }`}
            >
              <a className="active" href={`${navLink.id}`}>
                {navLink.title}
              </a>
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(true)} className="sm:hidden p-2 ">
          <HambergerMenu size="20" />
        </button>

        <button
          type="button"
          className=" hidden sm:block rounded-md text-stone-900 border px-2.5 py-1.5 text-sm  hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
        >
          Join waitlist
        </button>
      </div>
    </>
  );
};

export default Header;

interface Props {
  onOpen: (arg: boolean) => void;
  open: boolean;
}

const MobileSideBar = ({ onOpen, open }: Props) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-[70vw] max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          DIETMATE
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => onOpen(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div className=" ">
                        <ul className="list-none space-y-5">
                          {navLinks.map((navLink, index) => (
                            <li
                              key={navLink.id}
                              className={`text-[11px] font-medium ${
                                index === navLinks.length - 1 ? "mr-0" : "mr-10"
                              }`}
                            >
                              <a href={navLink.id}>
                                {navLink.icon && (
                                  <navLink.icon
                                    size={20}
                                    variant="Bold"
                                    className="inline-block mr-4 text-[14px]"
                                  />
                                )}
                                {navLink.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
