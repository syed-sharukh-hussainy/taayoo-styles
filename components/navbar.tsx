'use client';

import { usePathname } from 'next/navigation';

import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';

import TaaYooLogo from './taayoo-logo';
import Link from 'next/link';
import ThemesSheet from './themes-sheet';
import ExportToImage from './export-to-image';
import ShareImage from './share-image';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const poppins = Poppins({ subsets: ['latin'], weight: ['900'] });

const Navbar = () => {
  const pathName = usePathname();

  const NavButtons =
    pathName === '/' ? (
      <Link href="/screenshot-editor">
        <Button size="sm">Get Started</Button>
      </Link>
    ) : (
      <div className="hidden md:flex items-center gap-3">
        <ThemesSheet />
        <ExportToImage />
        <ShareImage />
      </div>
    );
  return (
    <header className="bg-background fixed top-0 left-0 flex w-full  border-b px-5 justify-between items-center z-50">
      <nav className="w-full h-14 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <TaaYooLogo />
          <h1
            className={cn(
              'hidden md:flex font-black text-xl',
              poppins.className
            )}
          >
            TaaYoo
          </h1>
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
