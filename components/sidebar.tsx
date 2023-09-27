import { ScrollArea } from '@/components/ui/scroll-area';
import dynamic from 'next/dynamic';

const FrameStyling = dynamic(() => import('./frame-styling/frame-styling'), {
  ssr: false,
});
const WindowStyling = dynamic(() => import('./window-styling/window-styling'), {
  ssr: false,
});
const EditorStyling = dynamic(() => import('./editor-styling/editor-styling'), {
  ssr: false,
});
const FormatButton = dynamic(() => import('./format-btn'), { ssr: false });

const Sidebar = () => {
  return (
    <aside className="fixed w-[350px] left-0 bottom-0 p-4 top-14">
      <div className="border h-full rounded-lg relative">
        <ScrollArea className=" w-full h-full rounded-lg pb-20">
          <FrameStyling />
          <WindowStyling />
          <EditorStyling />
        </ScrollArea>
        <FormatButton />
      </div>
    </aside>
  );
};

export default Sidebar;
