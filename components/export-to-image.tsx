'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Button } from './ui/button';
import { Share, X } from 'lucide-react';
import { Input } from './ui/input';
import { useExportToImage } from '@/store/useExportToImage';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import CustomSlider from './custom-slider';
import { exportToJpeg, exportToPng, exportToSvg } from '@/lib/utils';
import { useToast } from './ui/use-toast';

const ExportToImage = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const fileName = useExportToImage((state) => state.fileName);

  const setFileName = useExportToImage((state) => state.setFileName);

  const scale = useExportToImage((state) => state.scale);
  const setImageScale = useExportToImage((state) => state.setImageScale);

  const quality = useExportToImage((state) => state.quality);
  const setImageQuality = useExportToImage((state) => state.setImageQuality);

  const fileFormat = useExportToImage((state) => state.fileFormat);

  const setFileFormat = useExportToImage((state) => state.setFileFormat);

  const setIsLoading = useExportToImage((state) => state.setIsLoading);

  const reset = useExportToImage((state) => state.reset);

  const handleDownloadBtn = (fileFormatType: string) => {
    try {
      setIsLoading(true);
      const exportImage = document.getElementById('exportToImage');
      if (fileName === '') {
        alert('filename is required');
        return;
      }
      switch (fileFormatType) {
        case 'PNG':
          exportToPng(exportImage!, fileName, scale);
          break;
        case 'SVG':
          exportToSvg(exportImage!, fileName, scale);
          break;
        case 'JPEG':
          exportToJpeg(exportImage!, fileName, scale, quality);
      }
      toast({
        title: '🎉 Image downloaded successfully.',
      });
      setIsLoading(false);
      reset();
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      reset();
    } finally {
      setOpen(false);
      reset();
    }
  };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button
          role="button"
          aria-pressed="false"
          // variant="outline"
          onClick={() => setOpen(true)}
          size="sm"
          className="font-bold flex gap-3 items-center"
        >
          <Share className="w-4 h-4" /> Export
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="mb-5 flex">
          <DialogTitle>Export Image</DialogTitle>
        </DialogHeader>
        <div
          className="absolute right-6 top-7"
          onClick={() => {
            setOpen(false);
            reset();
          }}
        >
          <X className="h-6 w-6 hover:bg-foreground hover:text-background cursor-pointer rounded-full p-1" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="">
            <Label htmlFor="filename">File Name</Label>
            <Input
              id="name"
              value={fileName}
              className="mt-2"
              onChange={(e) => setFileName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="fileextension">File Extension</Label>

            <Tabs id="fileextension" defaultValue="png" className="w-full mt-2">
              <TabsList className="w-full">
                <TabsTrigger
                  value="png"
                  className="w-full"
                  onClick={() => setFileFormat('PNG')}
                >
                  PNG
                </TabsTrigger>
                <TabsTrigger
                  className="w-full"
                  value="svg"
                  onClick={() => setFileFormat('SVG')}
                >
                  SVG
                </TabsTrigger>
                <TabsTrigger
                  className="w-full"
                  value="jpeg"
                  onClick={() => setFileFormat('JPEG')}
                >
                  JPEG
                </TabsTrigger>
              </TabsList>
              <div className="mt-10 mb-5">
                <ExportToImageFormat
                  extenstionType="PNG"
                  defaultValue={1}
                  minValue={1}
                  maxValue={3}
                  scale={scale}
                  setImageValue={(value) => setImageScale(value)}
                />
              </div>

              <TabsContent value="jpeg">
                <ExportToImageFormat
                  extenstionType="JPEG-QUALITY"
                  defaultValue={100}
                  minValue={1}
                  maxValue={100}
                  scale={quality}
                  setImageValue={(value) => setImageQuality(value)}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <Button className="mt-10" onClick={() => handleDownloadBtn(fileFormat)}>
          Download
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ExportToImage;

const ExportToImageFormat = ({
  scale,
  setImageValue,
  minValue,
  maxValue,
  extenstionType,
  defaultValue,
}: {
  scale: number;
  defaultValue: number;
  setImageValue: (value: number) => void;
  minValue: number;
  maxValue: number;
  extenstionType: string;
}) => {
  const extension = extenstionType === 'JPEG-QUALITY' ? '%' : 'x';
  return (
    <div className="flex flex-col gap-6">
      <Label>
        {extenstionType === 'JPEG-QUALITY' ? 'Quality' : 'Scale'}
        <span className="ml-5 bg-muted px-3 py-1 rounded-xl text-sm">
          {scale}
          {extension}
        </span>
      </Label>
      <CustomSlider
        defaultValue={defaultValue}
        minValue={minValue}
        maxValue={maxValue}
        handleSliderValue={(value) => setImageValue(parseInt(value))}
      />
    </div>
  );
};
