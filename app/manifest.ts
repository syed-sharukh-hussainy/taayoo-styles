import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TaaYoo Styles',
    short_name: 'TaaYoo',
    description:
      'Effortlessly create and beautify your code snippets with TaaYoo Styles,making them eye-catching code showcases',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
