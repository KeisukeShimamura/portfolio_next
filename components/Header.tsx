import Link from "next/link";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  const menuFunction = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <header className="w-full bg-black text-white fixed top-0 z-10">
      <nav className="flex mx-6">
        <div className="flex-none sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1 my-4">
          <Link href="/">
            <a>
              <span className="text-xl font-fancy">My Portfolio</span>
            </a>
          </Link>
        </div>
        {openMenu ? (
          <div className="flex flex-row absolute z-30 top-0 right-0 min-w-full animate-slideIn">
            <div className="basis-1/2"></div>
            <div className="basis-1/2 flex flex-col font-bold bg-black text-center">
              <button onClick={menuFunction} className="bg-neutral-500 py-4 relative">
                <span>Menu</span>
                <FontAwesomeIcon icon={faXmark} className="absolute right-5 top-5" />
              </button>
              <Link href="/#expertises">
                <a className="py-4 border-b border-gray-500">Expertises</a>
              </Link>
              <Link href="/#works">
                <a className="py-4 border-b border-gray-500">Works</a>
              </Link>
              <Link href="/#skill">
                <a className="py-4">Skill</a>
              </Link>
            </div>
          </div>
        ) : undefined}
        <div className="flex-initial font-bold m-5 ">
          <ul className="md:flex hidden flex-initial text-left">
            <li>
              <Link href="/#expertises" className="mr-5">
                <a className="mr-5">Expertises</a>
              </Link>
            </li>
            <li>
              <Link href="/#works" className="mr-5">
                <a className="mr-5">Works</a>
              </Link>
            </li>
            <li>
              <Link href="/#skill" className="mr-5">
                <a className="mr-5">Skill</a>
              </Link>
            </li>
          </ul>
        </div>
        <button onClick={menuFunction} className="flex-initial absolute top-4 right-5 md:hidden">
          <FontAwesomeIcon icon={faBars} className="text-3xl" />
        </button>
      </nav>
    </header>
  )
}