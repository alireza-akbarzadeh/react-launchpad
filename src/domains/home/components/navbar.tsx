import { navLists } from 'constant';
import { appleImg, bagImg, searchImg } from 'constant/Images';

export function Navbar() {
  return (
    <header className="flex w-full items-center justify-between py-5 sm:px-10">
      <nav className="screen-max-width flex w-full">
        <img src={appleImg} alt="apple " width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              className="cursor-pointer px-5 text-sm text-gray transition-all hover:text-white"
              key={nav}
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
}
