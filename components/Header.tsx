import Link from "next/link";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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
          <div className="flex flex-row absolute z-30 top-0 right-0 h-screen min-w-full animate-slideIn">
            <div className="w-full flex flex-col font-bold bg-black opacity-80 px-12">
              <button onClick={menuFunction} className="bg-black py-4 text-center relative opacity-100">
                <span>Menu</span>
                <FontAwesomeIcon icon={faXmark} className="absolute text-3xl right-0 top-5" />
              </button>
              <a href="/#expertises" className="border-b border-gray-500">
                <button onClick={menuFunction} className="w-full py-4">
                Expertises
                </button>
              </a>
              <a href="/#works" className="border-b border-gray-500">
                <button onClick={menuFunction} className="w-full py-4">
                  Works
                </button>
              </a>
              <a href="/#skill" className="border-b border-gray-500">
                <button onClick={menuFunction} className="w-full py-4">
                  Skill
                </button>
              </a>
              <div className="flex-1"></div>
              <a href="/#contact" className="mb-6">
                <button onClick={menuFunction}>
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                  <span className="text-lg ml-4">Contact</span>
                </button>
              </a>
              <a href="https://github.com/KeisukeShimamura" target="_blank" rel="noreferrer" className="pb-12">
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                <span className="text-lg ml-4">GitHub</span>
              </a>
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
            <li>
              <Link href="/#contact" className="mr-5">
                <a className="mr-5">Contact</a>
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