import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen w-full flex items-center justify-center text-center flex-col">
      <h2 className="text-7xl font-bold">404</h2>
      <p className="text-4xl font-bold mt-5">Page Not Found</p>
      <Link href="/" className="mt-10">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
