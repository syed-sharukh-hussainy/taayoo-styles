'use client';

import { usePathname } from 'next/navigation';

import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';

import TaaYooLogo from './taayoo-logo';
import Link from 'next/link';
import { Paintbrush, Share } from 'lucide-react';

const Navbar = () => {
  const pathName = usePathname();

  const NavButtons =
    pathName === '/' ? (
      <li>
        <Link href="/screenshot-editor">
          <Button size="sm">Get Started</Button>
        </Link>
      </li>
    ) : (
      <>
        <li>
          <Button size="sm" className="flex items-center gap-3">
            <Paintbrush className="h-4 w-4" />
            <p className="font-bold">Themes</p>
          </Button>
        </li>
        <li>
          <Button size="sm" className="flex items-center gap-3">
            <Share className="h-4 w-4" />
            <p className="font-bold">Export</p>
          </Button>
        </li>
      </>
    );

  return (
    <header className="w-full border-b px-10 z-50">
      <nav className="h-14 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <TaaYooLogo />
          <h1 className="font-black text-xl">TaaYoo</h1>
        </Link>
        <ul className="flex items-center gap-3">
          {NavButtons}
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
