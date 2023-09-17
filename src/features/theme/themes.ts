export type Theme = 'blue' | 'green' | 'purple' | 'yellow' | 'lime' | 'amber';

export const DEFAULT_THEME: Theme = 'purple';

export interface ThemeClassNameMap {
  bgLight: string;
  bgMedium: string;
  bgDark: string;
  textLight: string;
  textMedium: string;
  textDark: string;
  border: string;
}

export const THEMES_MAP: Record<Theme, ThemeClassNameMap> = {
  blue: {
    bgLight: 'bg-blue-50',
    bgMedium: 'bg-blue-100',
    bgDark: 'bg-blue-500',
    textLight: 'text-blue-50',
    textMedium: 'text-blue-100',
    textDark: 'text-blue-500',
    border: 'border-blue-500',
  },
  green: {
    bgLight: 'bg-green-50',
    bgMedium: 'bg-green-100',
    bgDark: 'bg-green-500',
    textLight: 'text-green-50',
    textMedium: 'text-green-100',
    textDark: 'text-green-500',
    border: 'border-green-500',
  },
  purple: {
    bgLight: 'bg-purple-50',
    bgMedium: 'bg-purple-100',
    bgDark: 'bg-purple-500',
    textLight: 'text-purple-50',
    textMedium: 'text-purple-100',
    textDark: 'text-purple-500',
    border: 'border-purple-500',
  },
  yellow: {
    bgLight: 'bg-yellow-50',
    bgMedium: 'bg-yellow-100',
    bgDark: 'bg-yellow-500',
    textLight: 'text-yellow-50',
    textMedium: 'text-yellow-100',
    textDark: 'text-yellow-500',
    border: 'border-yellow-500',
  },
  lime: {
    bgLight: 'bg-lime-50',
    bgMedium: 'bg-lime-100',
    bgDark: 'bg-lime-500',
    textLight: 'text-lime-50',
    textMedium: 'text-lime-100',
    textDark: 'text-lime-500',
    border: 'border-lime-500',
  },
  amber: {
    bgLight: 'bg-amber-50',
    bgMedium: 'bg-amber-100',
    bgDark: 'bg-amber-500',
    textLight: 'text-amber-50',
    textMedium: 'text-amber-100',
    textDark: 'text-amber-500',
    border: 'border-amber-500',
  },
};
