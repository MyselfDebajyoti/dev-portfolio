'use client'

import { footerLinks } from '@/appData'
import { socials } from '@/appData/personal'
import Image from 'next/image'
import Link from 'next/link'
import LogoImage from '@/assets/images/ChatGPT_Image_Aug_10__2025__06_24_36_PM-removebg-preview.png'

const Footer = () => {
  return (
    <footer className="bg-secondary rounded-t-5xl relative z-10 overflow-hidden px-6 py-8">
      <div className="relative mx-auto max-w-[1200px]">
        {/* Top Section: Logo and Navigation */}
        <div className="mb-8 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={LogoImage}
              alt="Debajyoti's Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-neutral text-lg font-medium">Debajyoti</span>
          </div>

          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="text-tertiary-content hover:text-neutral relative z-20 transition-colors duration-300"
                scroll={link.href.startsWith('#') ? false : true}
                onClick={(e) => {
                  if (link.href.startsWith('#')) {
                    e.preventDefault()
                    const targetId = link.href.substring(1)
                    const element = document.getElementById(targetId)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }
                }}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section: Social Links and Copyright */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <ul className="flex gap-4">
            {socials.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral hover:text-neutral/50 relative z-20 transition-colors duration-300">
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>

          <p className="text-tertiary-content text-sm">
            © 2025 Debajyoti Chatterjee. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="bg-neutral/4 absolute top-1/2 -right-1/4 z-0 size-[600px] -translate-y-1/2 rounded-full opacity-10" />
    </footer>
  )
}

export default Footer
