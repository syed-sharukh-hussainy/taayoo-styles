'use client';

import { getLocalStorage, setLocalStorage } from '@/lib/storage-helper';
import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(
    getLocalStorage('cookie_consent', null)
  );

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied';
    if (typeof window.gtag !== 'undefined') {
      window.gtag('consent', 'update', {
        analytics_storage: newValue,
      });
    }

    setLocalStorage('cookie_consent', cookieConsent);

    //For Testing
    // console.log('Cookie Consent: ', cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={` w-[500px] 
      ${
        cookieConsent != null ? 'hidden' : 'flex'
      } fixed bottom-10 left-10 right-0 p-5 justify-between items-center gap-4 bg-gray-700 rounded-lg shadow flex-col`}
    >
      <div className="text-sm text-white">
        <p className="text-xl font-medium mb-5">We value your privacy</p>
        <p className="mb-8 text-justify">
          We use cookies to provide you with a better browsing experience,
          analyze site traffic, and personalize content. We also use third-party
          services such as Google Analytics to understand how you use our site
          and to improve our services. By clicking "Allow cookies", you consent
          to the use of cookies and the processing of your personal data for
          these purposes. You may visit our Cookie Prefences page to learn more
          about the types of cookies we use and how to manage your preferences.
        </p>
      </div>

      <div className="flex gap-2">
        <button
          className="px-5 py-2 text-gray-300 rounded-md border-gray-900"
          onClick={() => setCookieConsent(false)}
        >
          Decline
        </button>
        <button
          className="bg-gray-900 px-5 py-2 text-white rounded-lg"
          onClick={() => setCookieConsent(true)}
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
}
