import Image from 'next/image';
import React from 'react';

const EditorImage = () => {
  return (
    <section className="flex justify-center my-32">
      <div className="flex items-center justify-center bg-red-300 w-full max-w-7xl h-[700px] rounded-3xl">
        <Image
          src="/editor-bg.png"
          alt="screenshot-editor"
          width={1100}
          height={1000}
          className="object-contain rounded-xl shadow-xl w-[1200px] h-auto"
        />
      </div>
    </section>
  );
};

export default EditorImage;
