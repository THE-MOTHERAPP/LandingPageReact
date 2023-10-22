
import { navLinks } from "../constants/constants";
const Header = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between py-5 bg-white">
      <h1 className=" tracking-widest font-semibold">Mydietneeds</h1>
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

      <button
        type="button"
        className="rounded-md text-stone-900 border px-2.5 py-1.5 text-sm  hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
      >
        Join waitlist
      </button>
    </div>
  );
};

export default Header;
