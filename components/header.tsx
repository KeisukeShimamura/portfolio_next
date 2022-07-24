import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl font-fancy">My Portfolio</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <a className="mr-5 hover:text-gray-900">Home</a>
          </Link>
          <Link href="/#about" className="mr-5 hover:text-gray-900">
            <a className="mr-5 hover:text-gray-900">About</a>
          </Link>
          <Link href="/#works" className="mr-5 hover:text-gray-900">
            <a className="mr-5 hover:text-gray-900">Works</a>
          </Link>
          <Link href="/#skill" className="mr-5 hover:text-gray-900">
            <a className="mr-5 hover:text-gray-900">Skill</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}