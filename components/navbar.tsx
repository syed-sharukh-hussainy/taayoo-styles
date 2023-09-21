'use client';

import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';

import TaaYooLogo from './taayoo-logo';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const pathName = usePathname();
  const [themes, setThemes] = useState('');

  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const selectedTheme =
      theme === 'dark' || theme === 'light' ? theme : systemTheme;
    if (selectedTheme) {
      setThemes(selectedTheme);
    }
  }, [theme, systemTheme]);
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
          <Button>Themes</Button>
        </li>
        <li>
          <Button>Export</Button>
        </li>
      </>
    );

  return (
    <header className="w-full border-b px-10 z-50">
      <nav className="h-14 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <TaaYooLogo themeColor={themes} />
          <h1 className="font-black text-xl">TaaYoo</h1>
        </div>
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
