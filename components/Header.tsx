import Link from "next/link";
import { useState } from 'react';
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
    useScrollPosition(({ prevPos, currPos }) => {
      const visible = currPos.y > prevPos.y;
      setShowHeader(visible);
    }, []);
    
  return (
    <header className={`fixed top-0 z-10 w-full duration-300 bg-black ${showHeader ? "" : "translate-y-[-100%]"}`}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-white">
        <Link href="/">
          <a className="flex title-font font-medium items-center mb-4 md:mb-0">
            <span className="ml-3 text-xl font-fancy">My Portfolio</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <a className="mr-5">Home</a>
          </Link>
          <Link href="/#about" className="mr-5">
            <a className="mr-5">About</a>
          </Link>
          <Link href="/#works" className="mr-5">
            <a className="mr-5">Works</a>
          </Link>
          <Link href="/#skill" className="mr-5">
            <a className="mr-5">Skill</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}