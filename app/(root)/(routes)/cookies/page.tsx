'use client';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { getLocalStorage } from '@/lib/storage-helper';
import { useState } from 'react';

const Cookies = () => {
  return (
    <section className="my-36 max-w-4xl mx-auto px-5 md:px-0">
      <h1 className="text-4xl font-black mb-5">Manage Cookies Preference</h1>
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

      <h3>Cookie Preferences</h3>
      <p>You can change your cookie settings below.</p>
      <RadioGroup defaultValue="reject">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="allow" id="r1" />
          <Label htmlFor="r1">Allow Cookies</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="reject" id="r2" />
          <Label htmlFor="r2">Reject Cookies</Label>
        </div>
      </RadioGroup>
    </section>
  );
};

export default Cookies;
