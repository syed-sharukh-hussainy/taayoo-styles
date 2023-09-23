'use client';

import { usePathname } from 'next/navigation';

import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';

import TaaYooLogo from './taayoo-logo';
import Link from 'next/link';
import { Paintbrush, Share } from 'lucide-react';
import ThemesSheet from './themes-sheet';
import ExportToImage from './export-to-image';

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
        <ThemesSheet />
        <ExportToImage />
      </>
    );

  return (
    <header className="bg-background fixed top-0 left-0 flex w-full  border-b px-5 justify-between items-center z-50">
      <nav className="w-full h-14 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <TaaYooLogo />
          <h1 className="font-black text-xl">TaaYoo</h1>
        </Link>
        <div className="flex items-center gap-3">
          {NavButtons}
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
