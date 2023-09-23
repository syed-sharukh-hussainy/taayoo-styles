import ScreenShotEditorContainer from '@/components/screenshot-editor-container';
import Sidebar from '@/components/sidebar';

export default function ScreenshotEditorPage() {
  return (
    <section className="pl-[350px] relative">
      <Sidebar />
      <ScreenShotEditorContainer />
    </section>
  );
}
