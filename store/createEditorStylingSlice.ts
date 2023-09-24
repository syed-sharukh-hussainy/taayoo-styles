import { StateCreator } from 'zustand';

export type EditorStylingSlice = {
  code: string;
  showLineNumber: boolean;
  language: string;
  theme: {
    themeName: string;
    themeType: string;
  };
  selectedThemeColor: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: number;

  setCode: (code: string) => void;
  setShowLineNumber: () => void;
  setTheme: (themeName: string, themeType: string) => void;
  setLanguage: (language: string) => void;
  setSelectedThemeColor: (selectThemeColor: string) => void;
  setFontFamily: (fontFamily: string) => void;
  setFontSize: (fontSize: string) => void;
  setFontWeight: (fontWeight: number) => void;
};

export const createEditorStylingSlice: StateCreator<EditorStylingSlice> = (
  set
) => ({
  code: 'import React from "react"; import "./App.css"; import Weather from "./components/Weather"; function App() { return (<div className="App"><Weather /></div>);}export default App;',
  showLineNumber: false,
  language: 'JSX',
  theme: {
    themeName: 'Tokyo Night Storm',
    themeType: 'dark',
  },
  selectedThemeColor: '#24283b',
  fontFamily: 'JetBrains Mono',
  fontSize: 'medium',
  fontWeight: 600,

  setCode(code: string) {
    set(() => ({
      code,
    }));
  },

  setShowLineNumber() {
    set((state) => ({
      showLineNumber: !state.showLineNumber,
    }));
  },

  setLanguage(language) {
    set(() => ({
      language,
    }));
  },

  setTheme(themeName: string, themeType: string) {
    set(() => ({
      theme: {
        themeName,
        themeType,
      },
    }));
  },

  setSelectedThemeColor(selectedThemeColor: string) {
    set(() => ({
      selectedThemeColor,
    }));
  },

  setFontFamily(fontFamily: string) {
    set(() => ({
      fontFamily,
    }));
  },

  setFontSize(fontSize: string) {
    set(() => ({
      fontSize,
    }));
  },

  setFontWeight(fontWeight: number) {
    set(() => ({
      fontWeight,
    }));
  },
});
