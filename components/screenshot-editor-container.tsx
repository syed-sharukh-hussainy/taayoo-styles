'use client';

import { cn, getGradientColor } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';

import styles from '@/styles/editor-container.module.css';
import CustomEditor from './custom-editor';

const ScreenShotEditorContainer = () => {
  const showFrameBackground = useBoundStore(
    (state) => state.showFrameBackground
  );
  const paddingValue = useBoundStore(
    (state) => state.framePadding
  ).paddingValue;
  const selectedBg = useBoundStore((state) => state.frameBackgroundColor);
  const gradientDirection = useBoundStore((state) => state.gradientDirection);

  const padding = showFrameBackground ? paddingValue : 0;
  const background = showFrameBackground
    ? selectedBg.length === 1
      ? selectedBg[0]
      : `linear-gradient(${gradientDirection}, ${getGradientColor(selectedBg)})`
    : 'transparent';

  return (
    <section className={cn('border rounded-lg', styles.editorContainerWrapper)}>
      <div className={styles.editorContainerInnerWrapper} id="exportToImage">
        <div
          className={styles.editorBackground}
          style={{
            padding,
            background,
          }}
        >
          <CustomEditor />
        </div>
      </div>
    </section>
  );
};

export default ScreenShotEditorContainer;
