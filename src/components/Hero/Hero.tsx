'use client'
import useRoleSwitcher from '@/hooks/useRoleSwitcher'
import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import Image from 'next/image'
import { HeroImage } from '../../utils/images'
import Ellipse from './Ellipse'

const Hero = () => {
  const ellipseRef = useRotatingAnimation()
  const role = useRoleSwitcher({ roles: ['FULLSTACK DEV', 'FREELANCER', 'SOLOPRENEUR'] })

  return (
    <section className="bg-primary relative min-h-[calc(dvh-4rem)] pt-16">
      {/* Grid Background with Top Fade */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1e2d3d 1px, transparent 1px),
            linear-gradient(to bottom, #1e2d3d 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)',
        }}
      />
      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
        <div className="flex flex-col md:order-1 md:min-h-56 md:max-w-[33.75rem]">
          {/* Mobile: Name at top, Desktop: Normal position */}
          <h1 className="order-1 md:order-none">
            <span className="text-neutral hidden text-center text-2xl font-bold md:block md:text-left md:text-3xl">
              Hey there - I'm Debajyoti Chatterjee
            </span>
            <span className="text-neutral block text-center text-2xl font-bold md:hidden">
              Hey there - I'm Debajyoti Chatterjee
            </span>
          </h1>

          {/* Mobile: Image after name, Desktop: In second column */}
          <div className="order-2 my-8 flex items-center justify-center md:hidden">
            <div className="text-accent relative size-56 sm:size-60">
              <Image
                src={HeroImage}
                fill={true}
                priority={true}
                sizes="(min-width: 640px) 15rem, 14rem"
                alt="Debajyoti Chatterjee - Full Stack Developer"
                className="rounded-full object-cover object-[center_1%] p-4"
              />
              <Ellipse
                ref={ellipseRef}
                className="absolute top-0 left-0 size-56 transition-transform duration-500 ease-out sm:size-60"
              />
            </div>
          </div>

          {/* Mobile: Role text under image, Desktop: Under name */}
          <span className="text-accent order-3 block text-center text-[1.5rem] font-bold md:mt-2 md:text-left md:text-[1.75rem]">
            {role}
          </span>

          <h2 className="text-neutral order-4 mt-3 text-center md:text-left">
            Crafting innovative solutions to solve real-world problems
          </h2>

          {/* Mobile: CTAs in single line, Desktop: Normal */}
          <div className="order-5 mt-6 flex justify-center gap-4 md:justify-start md:gap-6">
            <a
              href="mailto:chatterjeedebajyoti254@gmail.com"
              aria-label="Connect with me"
              className="bg-accent min-w-32 cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E] hover:opacity-90">
              Hire Me
            </a>
            <a
              href="https://www.linkedin.com/in/debajyoti-chatterjee-96ba0623b/"
              aria-label="View LinkedIn Profile"
              className="border-neutral/20 text-neutral bg-secondary hover:bg-secondary/80 min-w-32 cursor-pointer rounded-lg border px-[14px] py-[10px] text-sm">
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Desktop: Image column */}
        <div className="hidden md:order-2 md:flex md:min-h-[35rem] md:items-center md:justify-center">
          <div className="text-accent relative md:size-[20rem] lg:size-[25.75rem]">
            <Image
              src={HeroImage}
              fill={true}
              priority={true}
              sizes="(min-width: 1024px) 25.75rem, (min-width: 768px) 20rem, (min-width: 640px) 15rem, 14rem"
              alt="Debajyoti Chatterjee - Full Stack Developer"
              className="rounded-full object-cover object-[center_1%] p-4"
            />
            <Ellipse
              ref={ellipseRef}
              className="absolute top-0 left-0 size-56 transition-transform duration-500 ease-out sm:size-60 md:size-[20rem] lg:size-[25.75rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
