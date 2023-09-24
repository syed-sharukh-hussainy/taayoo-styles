'use client';

import { Button } from './ui/button';
import axios from 'axios';
import { useToast } from './ui/use-toast';
import { useBoundStore } from '@/store/useBoundStore';

const FormatButton = () => {
  const { toast } = useToast();

  const code = useBoundStore((state) => state.code);
  const setCode = useBoundStore((state) => state.setCode);

  const codeFormatter = async () => {
    try {
      const res = await axios.post('/api/format-code', {
        code,
      });
      setCode(res.data);
      toast({
        title: '🎉 Code Formatted Successfully.',
      });
    } catch (e) {
      console.error(e);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong. 👎',
      });
    }
  };

  return (
    <div className="w-full absolute bottom-0 bg-background p-3 h-20 flex items-center rounded-lg">
      <Button
        role="button"
        aria-pressed="false"
        onClick={codeFormatter}
        className="w-full shadow-2xl"
      >
        Format Code
      </Button>
    </div>
  );
};

export default FormatButton;
