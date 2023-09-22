// import EditorStyling from './editor-styling/editor-styling';
// import FormatButton from './format-btn';
import { ScrollArea } from '@/components/ui/scroll-area';
import FrameStyling from './frame-styling/frame-styling';
// import WindowStyling from './window-styling/window-styling';

const Sidebar = () => {
  return (
    <aside className="fixed w-[350px] left-0 bottom-0 p-4 top-14">
      <div className="border h-full rounded-lg relative">
        <ScrollArea className=" w-full h-full rounded-lg pb-20">
          <FrameStyling />
          {/* <EditorStyling /> */}
          {/* <WindowStyling /> */}
        </ScrollArea>
        {/* <FormatButton /> */}
      </div>
    </aside>
  );
};

export default Sidebar;
