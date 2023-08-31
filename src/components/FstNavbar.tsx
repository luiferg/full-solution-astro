'use client'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@nextui-org/react'
import { useState } from 'react'

const FstNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { href: '/portfolio', label: `Portfolio` }, // portfolio link
    { href: '/about', label: `About` }, // about link
    { href: '/blog', label: `Blog` }, // blog link
  ]

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth='xl'
      shouldHideOnScroll={true}
    >
      <NavbarContent className='hidden sm:flex gap-4 lg:gap-8'>
        {links.map((link) => (
          <NavbarItem key={link.href}>
            <Link
              href={link.href}
              className='text-fst-black text-base'
            >{link.label}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='center'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Link href='/' onClick={() => setIsMenuOpen(false)}>
            <img
              src='/fst-logo.svg'
              width={200}
              height={100}
              alt='FullSolution Telecom logo'
              className='w-48 md:w-56 h-auto'
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button href='/#contact' radius='full' as={Link} className='bg-fst-orange-400 text-white'>
          Contact
          </Button>
        </NavbarItem>
        <NavbarItem className='max-sm:hidden'>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {links.map((link, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className='w-full text-fst-black text-base'
              href={link.href}
              onPress={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link
            href='/#contact'
            className='text-fst-orange-400 font-semibold text-base'
            onPress={() => setIsMenuOpen(false)}
          >
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

export default FstNavbar