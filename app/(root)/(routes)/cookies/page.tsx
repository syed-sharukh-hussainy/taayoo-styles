'use client';

import Loading from '@/app/loading';
import CookiesButtons from '@/components/cookies-button';
import { getLocalStorage } from '@/lib/storage-helper';

import { Suspense, useEffect, useState } from 'react';

const Cookies = () => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const cookieConsent = getLocalStorage('cookie_consent', null);
    if (cookieConsent) {
      setValue('allow');
    } else {
      setValue('reject');
    }
  }, []);

  return (
    <section className="my-36 max-w-4xl mx-auto px-5 md:px-0">
      <h2 className="text-4xl font-black mb-5">Manage Cookies Preference</h2>
      <p className="mb-10">
        Cookies are small text files that we use to enhance your experience on
        our website. They help us understand how you interact with our content
        and enable us to personalize your experience. You can manage your cookie
        preferences below. Please note that disabling certain cookies may limit
        your access to specific website features.
      </p>

      <h2 className="font-bold text-2xl">Manage Your Cookie Preferences</h2>
      <p className="mt-5">
        We use cookies to provide a better experience on our website and to
        understand how visitors interact with our content. Here are the cookies
        we use:
      </p>

      <h3 className="font-bold text-2xl mt-10">Analytics Cookies</h3>
      <p className="mt-5">
        We use Google Analytics to collect anonymous information about how
        visitors use our website. This data helps us create reports and improve
        our website. Analytics cookies collect the following data:
      </p>
      <ul className="mt-5 ml-3">
        <li>- The number of website visitors.</li>
        <li>- The sources from which visitors arrive at our website.</li>
        <li>- The pages they visit.</li>
      </ul>

      <h3 className="mt-10 mb-2 font-bold text-xl">Cookie Preferences</h3>
      <p>You can change your cookie settings below.</p>
      <div className="border flex p-2 text-center w-fit rounded-xl mt-6 cursor-pointer transition">
        <Suspense fallback={<Loading />}>
          <CookiesButtons
            label="Allow Cookies"
            value={value}
            defaultValue="allow"
          />

          <CookiesButtons
            label="Reject Cookies"
            value={value}
            defaultValue="reject"
          />
        </Suspense>
      </div>
    </section>
  );
};

export default Cookies;
