import { footerLinks, languages } from '@/appData'
import { socials } from '@/appData/personal'
import Image from 'next/image'
import LogoImage from '@/assets/images/ChatGPT_Image_Aug_10__2025__06_24_36_PM-removebg-preview.png'

const Footer = () => {
  return (
    <footer className="bg-secondary rounded-t-5xl relative overflow-hidden px-6 py-8">
      <div className="mx-auto max-w-[1200px]">
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
              <a
                href={link.href}
                key={link.href}
                className="text-tertiary-content hover:text-neutral transition-colors duration-300">
                {link.title}
              </a>
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
                  className="text-neutral hover:text-neutral/50 transition-colors duration-300">
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
