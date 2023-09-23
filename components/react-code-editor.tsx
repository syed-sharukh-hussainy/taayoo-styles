'use client';
import React, { Suspense, useEffect, useState } from 'react';
import ReactCodeMirror from '@uiw/react-codemirror';
import { getEditorTheme, getLanguage } from '@/lib/utils';
import { EditorView } from 'codemirror';
import axios from 'axios';
import '@/styles/react-code-editor.css';
import { useBoundStore } from '@/store/useBoundStore';

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

  const handleInputCode = (e: string) => {
    setCode(e);
  };

  const codeFormatter = async () => {
    try {
      const res = await axios.post('/api/format-code', {
        code,
      });

      handleInputCode(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    let isMounted = true;
    codeFormatter();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
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
      onChange={(e) => handleInputCode(e)}
    />
  );
};

export default ReactCodeEditor;
