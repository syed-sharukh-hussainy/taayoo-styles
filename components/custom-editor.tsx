import ReactCodeEditor from './react-code-editor';
import EditorTopBar from './editor-top-bar';
import { useBoundStore } from '@/store/useBoundStore';
import { Suspense } from 'react';

const CustomEditor = () => {
  const frameWidth = useBoundStore((state) => state.frameWidth);
  const boxShadow = useBoundStore((state) => state.shadow.value);
  const showTopBar = useBoundStore((state) => state.showWindowHeader);

  return (
    <div
      className="relative rounded-lg transiton duration-300 ease-in-out"
      style={{
        width: `${frameWidth}px`,
        boxShadow,
      }}
    >
      {showTopBar && <EditorTopBar />}
      <ReactCodeEditor />
    </div>
  );
};

export default CustomEditor;
