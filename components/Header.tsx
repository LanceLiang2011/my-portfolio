import Link from 'next/link';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export const Header = ({ darkMode, setDarkMode }: any) => {
  return (
    <nav className='py-10 mb-12 flex justify-between'>
      <Link href='/' className=' text-xl md:text-2xl lg:text-3xl font-burtons'>
        Lance&apos;s Portfolio
      </Link>
      <ul className='flex items-center'>
        <li
          onClick={() => {
            setDarkMode((cur: any) => !cur);
          }}
        >
          {darkMode ? (
            <BsFillSunFill className=' cursor-pointer text-2xl' />
          ) : (
            <BsFillMoonStarsFill className=' cursor-pointer text-2xl' />
          )}
        </li>
        <li>
          <Link
            className=' inline-block transition hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-lg bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-pink-500 hover:to-orange-500 text-white px-4 py-2 border-none rounded-md ml-8'
            href='/resume'
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};
