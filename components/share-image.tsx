import React from 'react';
import { Button } from './ui/button';
import { exportToBlob } from '@/lib/utils';
import { Share2 } from 'lucide-react';

const ShareImage = () => {
  const shareToLink = async () => {
    try {
      const exportImage = document.getElementById('exportToImage');

      const blob = await exportToBlob(exportImage!, 2, 100);
      if (blob) {
        const webShareSupported = 'canShare' in navigator;

        const file = new File([blob], 'code-snapshot.png', { type: blob.type });

        if (webShareSupported) {
          const data = {
            files: [file],
            title: 'TaaYoo Styles - Code Screenshot',
          };
          if (navigator.canShare(data)) {
            await navigator.share(data);
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Button
      role="button"
      aria-label="Share"
      size="sm"
      variant="outline"
      onClick={shareToLink}
    >
      <Share2 className="h-4 w-4" />
    </Button>
  );
};

export default ShareImage;
