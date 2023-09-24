import Link from 'next/link';
import React from 'react';
import TaaYooLogo from './taayoo-logo';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between py-10 px-5 md:px-0">
        <div className="flex flex-col items-start justify-center gap-5">
          <Link href="/" className="flex items-center gap-3">
            <TaaYooLogo />
            <p className="text-lg font-black">TaaYoo Styles</p>
          </Link>
          <p className="max-w-sm text-sm md:text-base">
            Create and beautify your code snippets, turning them into
            eye-catching code showcases.
          </p>
        </div>
        <div className="flex flex-col mt-5 md:mt-0">
          <p className="text-lg font-bold mb-3">Legal</p>
          <Link href="/" className="text-sm">
            Terms & Conditions
          </Link>
          <Link href="/" className="text-sm">
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="text-sm py-6 bg-muted">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p>&copy; 2023. TaaYoo Styles. All Rights Reserved.</p>
          <p className="text-sm text-center mt-1 md:mt-0">
            Created With ❤️ by{' '}
            <Link
              target="_blank"
              className="text-primary font-bold"
              href="https://twitter.com/syed_sharukh_"
            >
              Syed Sharukh Hussainy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
