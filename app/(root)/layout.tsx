import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TaaYoo Styles',
  description:
    'Effortlessly create and beautify your code snippets with TaaYoo Styles,making them eye-catching code showcases',
};

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
