import dynamic from 'next/dynamic';

const ScreenShotEditorContainer = dynamic(
  () => import('@/components/screenshot-editor-container'),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
);

const Sidebar = dynamic(() => import('@/components/sidebar'), {
  ssr: false,
});

export default function ScreenshotEditorPage() {
  return (
    <section>
      <section className="pl-[350px] relative hidden md:block">
        <Sidebar />
        <ScreenShotEditorContainer />
      </section>
      <section className="md:hidden text-center h-screen w-full flex items-center justify-center px-5">
        <p className="text-lg font-bold">
          This Editor is exclusively designed for desktop use, as generating
          code screenshots on a small-screen device would be impractical.
        </p>
      </section>
    </section>
  );
}
