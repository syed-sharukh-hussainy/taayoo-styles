'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const TaaYooLogo = () => {
  const [themes, setThemes] = useState('');

  const { theme, systemTheme } = useTheme();
  useEffect(() => {
    const selectedTheme =
      theme === 'dark' || theme === 'light' ? theme : systemTheme;
    if (selectedTheme) {
      setThemes(selectedTheme);
    }
  }, [theme, systemTheme]);

  const color = themes === 'light' ? 'black' : 'white';
  return (
    <svg
      height="26"
      viewBox="0 0 250 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M176.806 0H0V73.9988H250L176.806 0Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M73.3568 0H0V96.6347L0.139048 96.4945L73.3568 170.353V0Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M146.479 109.647H73.1225V206.282L73.2616 206.141L146.479 280V109.647Z"
        fill={color}
      />
    </svg>
  );
};

export default TaaYooLogo;
