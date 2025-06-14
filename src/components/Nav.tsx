'use client'
import { navLinks } from "../constants";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { DialogTitle } from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Menu, Facebook, Instagram, Linkedin, X } from 'lucide-react'
import Image from 'next/image';
import Link from "next/link";
import { useState } from 'react'

const Nav = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className='z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        
        <Image
          src="/logo.png" // public path
          alt="Logo"
          width={129} // or any desired size
          height={29}
          priority // optional: preloads image
        />

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <Link href=""><Facebook /></Link>
          <Link href=""><Instagram /></Link>
          <Link href=""><Linkedin /></Link>
          <Link href=""><X /></Link>
        </div>
        <div className="hidden max-lg:block pr-5">
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <Menu className="h-6 w-6 text-gray-700" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] p-6 bg-white">
              <DialogTitle>
                <VisuallyHidden>Navigation Menu</VisuallyHidden>
              </DialogTitle>

              <ul className="flex flex-col gap-4 mt-6">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)} // close the sheet
                      className="text-lg font-montserrat text-slate-700 hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
      </div>
      </nav>
    </header>
  );
};

export default Nav;
