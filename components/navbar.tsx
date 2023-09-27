'use client';

import { usePathname } from 'next/navigation';

import { Button } from './ui/button';

import TaaYooLogo from './taayoo-logo';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';

const ThemesSheet = dynamic(() => import('./themes-sheet'), { ssr: false });
const ExportToImage = dynamic(() => import('./export-to-image'), {
  ssr: false,
});
const ShareImage = dynamic(() => import('./share-image'), { ssr: false });
const ModeToggle = dynamic(() => import('./mode-toggle'), { ssr: false });

const poppins = Poppins({ subsets: ['latin'], weight: ['900'] });

const Navbar = () => {
  const pathName = usePathname();

  const NavButtons =
    pathName === '/' || pathName === '/cookies' ? (
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
          <p
            className={cn(
              'hidden md:flex font-black text-xl',
              poppins.className
            )}
          >
            TaaYoo
          </p>
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
