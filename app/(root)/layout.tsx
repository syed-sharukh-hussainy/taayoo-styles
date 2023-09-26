import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TaaYoo Styles',
  description:
    'Capture and Share Your Code in Style with TaaYoo Styles - Beautiful Screenshot Creator',
};

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
