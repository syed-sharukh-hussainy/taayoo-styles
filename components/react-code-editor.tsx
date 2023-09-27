'use client';
import { Suspense, useEffect } from 'react';
import ReactCodeMirror from '@uiw/react-codemirror';
import { getEditorTheme, getLanguage } from '@/lib/utils';
import { EditorView } from 'codemirror';
import axios from 'axios';
import { useBoundStore } from '@/store/useBoundStore';
import Loading from '@/app/loading';

const ReactCodeEditor = () => {
  const code = useBoundStore((state) => state.code);
  const setCode = useBoundStore((state) => state.setCode);
  const showLineNumber = useBoundStore((state) => state.showLineNumber);
  const selectedTheme = useBoundStore((state) => state.theme.themeName);
  const selectedLanguage = useBoundStore((state) => state.language);
  const selectedFontFamily = useBoundStore((state) => state.fontFamily);
  const fontSize = useBoundStore((state) => state.fontSize);

  const fontWeight = useBoundStore((state) => state.fontWeight);

  const extensions = getLanguage(selectedLanguage);

  useEffect(() => {
    let isMounted = true;

    const codeFormatter = async () => {
      try {
        const res = await axios.post('/api/format-code', {
          code,
        });
        setCode(res.data);
      } catch (e) {
        console.error(e);
      }
    };

    codeFormatter();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <ReactCodeMirror
        value={code}
        autoFocus={true}
        extensions={extensions ? [extensions, EditorView.lineWrapping] : []}
        style={{
          fontSize: fontSize,
          fontWeight: fontWeight,
        }}
        theme={getEditorTheme(selectedTheme, selectedFontFamily)}
        basicSetup={{
          foldGutter: false,
          autocompletion: false,
          searchKeymap: false,
          highlightActiveLine: false,
          highlightSelectionMatches: false,
          highlightActiveLineGutter: false,
          lineNumbers: showLineNumber,
          bracketMatching: true,
          closeBrackets: false,
          rectangularSelection: false,
        }}
        onChange={(e) => setCode(e)}
      />
    </Suspense>
  );
};

export default ReactCodeEditor;
