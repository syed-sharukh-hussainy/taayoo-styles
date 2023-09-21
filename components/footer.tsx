import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t py-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <p>&copy; 2023 TaaYoo Styles.</p>
          <p className="text-sm">Created With ❤️ by SyedSharukhHussainy</p>
        </div>
        <div className="flex flex-col">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
