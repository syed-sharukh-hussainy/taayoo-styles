import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as themes from '@uiw/codemirror-themes-all';
import { PRO_LANGUAGE_OPTIONS, THEMES_OPTIONS, THEMS_DATA } from './constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getThemeBackground = (themeName: string) => {
  const themeVa = THEMES_OPTIONS.find((theme) => theme.themeName === themeName);
  return themeVa?.themeColor;
};

export const getGradientColor = (selectedBg: string[]) => {
  let gradientColor = '';
  selectedBg?.map((color) => {
    gradientColor = gradientColor + color + ',';
  });
  return gradientColor.slice(0, gradientColor.length - 1);
};

export const getLanguage = (languageName: string) => {
  const language = PRO_LANGUAGE_OPTIONS.find(
    (lang) => lang.languageName === languageName
  );
  return language?.languageValue;
};

export const getFontFamily = (fontFamily: string) => {
  return {
    settings: {
      fontFamily: fontFamily,
    },
  };
};

export const getEditorTheme = (themeName: string, fontFamily: string) => {
  switch (themeName) {
    case 'Abcdef':
      return themes.abcdefInit(getFontFamily(fontFamily));
    case 'Androidstudio':
      return themes.androidstudioInit(getFontFamily(fontFamily));
    case 'Atomone':
      return themes.atomoneInit(getFontFamily(fontFamily));
    case 'Aura':
      return themes.auraInit(getFontFamily(fontFamily));
    case 'Bbedit':
      return themes.bbeditInit(getFontFamily(fontFamily));
    case 'Bespin':
      return themes.bespinInit(getFontFamily(fontFamily));
    case 'Darcula':
      return themes.darculaInit(getFontFamily(fontFamily));
    case 'Dracula':
      return themes.draculaInit(getFontFamily(fontFamily));
    case 'Duotone Dark':
      return themes.duotoneDarkInit(getFontFamily(fontFamily));
    case 'Duotone Light':
      return themes.duotoneLightInit(getFontFamily(fontFamily));
    case 'Eclipse':
      return themes.eclipseInit(getFontFamily(fontFamily));
    case 'Github Dark':
      return themes.githubDarkInit(getFontFamily(fontFamily));
    case 'Github Light':
      return themes.githubLightInit(getFontFamily(fontFamily));
    case 'Gruvbox Dark':
      return themes.gruvboxDarkInit(getFontFamily(fontFamily));
    case 'Material Dark':
      return themes.materialDarkInit(getFontFamily(fontFamily));
    case 'Material Light':
      return themes.materialLightInit(getFontFamily(fontFamily));
    case 'Noctis Lilac':
      return themes.noctisLilacInit(getFontFamily(fontFamily));
    case 'Nord':
      return themes.nordInit(getFontFamily(fontFamily));
    case 'Solarized Dark':
      return themes.solarizedDarkInit(getFontFamily(fontFamily));
    case 'Solarized Light':
      return themes.solarizedLightInit(getFontFamily(fontFamily));
    case 'Tokyo Night':
      return themes.tokyoNightInit(getFontFamily(fontFamily));
    case 'Tokyo Night Storm':
      return themes.tokyoNightStormInit(getFontFamily(fontFamily));
    case 'Tokyo Night Day':
      return themes.tokyoNightDayInit(getFontFamily(fontFamily));
    case 'Xcode Dark':
      return themes.xcodeDarkInit(getFontFamily(fontFamily));
    case 'Xcode Light':
      return themes.xcodeLightInit(getFontFamily(fontFamily));
  }
};

export const getThemeByName = (themeName: string) => {
  return THEMS_DATA.find((theme) => theme.theme === themeName);
};

const createElementHelper = (dataUrl: string, fileName: string) => {
  let link = document.createElement('a');
  link.href = dataUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
