'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { BurgerIcon, CloseIcon } from '../../utils/icons'
import LogoImage from '../../assets/images/ChatGPT_Image_Aug_10__2025__06_24_36_PM-removebg-preview.png'

const navItems = [
  {
    label: '_home',
    href: '/',
  },
  {
    label: '_projects',
    href: '/#projects',
  },
  {
    label: '_services',
    href: '/#services',
  },
  {
    label: '_contact-me',
    href: '/#contact',
  },
]

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsVisible(!isVisible)
  }

  return (
    <nav className="bg-primary border-border fixed top-0 right-0 left-0 z-50 h-16 overflow-hidden border-b">
      <div className="mx-auto flex h-full w-dvw max-w-[1200px] items-center justify-between px-4 py-1">
        {isVisible ? (
          <div className="text-primary-content md:hidden">_menu</div>
        ) : (
          <Link href="/">
            <div className="animate-fade-up text-primary-content relative flex items-center gap-3 transition-all duration-300 md:static">
              <Image
                src={LogoImage}
                alt="Debajyoti's Logo"
                width={32}
                height={32}
                className="size-12"
              />
              <span className="text-primary-content">debajyoti_dev</span>
            </div>
          </Link>
        )}

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isVisible ? (
              <CloseIcon className="text-primary-content" />
            ) : (
              <BurgerIcon className="text-primary-content" />
            )}
          </button>
        </div>

        <ul
          className={`${isVisible ? 'flex' : 'hidden'} animate-fade-in bg-primary/95 fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-full flex-col backdrop-blur-sm md:static md:top-0 md:flex md:h-full md:w-[72%] md:flex-row md:bg-transparent md:backdrop-blur-none lg:w-[70%]`}>
          {navItems.map(({ label, href }) => (
            <li
              key={href}
              onClick={() => setIsVisible(false)}
              className="border-border flex items-center border-b px-4 text-2xl md:border-y-0 md:border-e md:text-base md:first:border-s md:last:ml-auto md:last:border-none md:last:px-0 lg:px-8">
              <Link
                href={href}
                className={`text-primary-content hover:text-neutral w-full py-7 transition-all duration-150 md:py-0 ${pathname === href ? 'text-neutral cursor-text' : ''}`}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
