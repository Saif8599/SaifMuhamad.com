import React, { useContext } from 'react';
import {
  DEFAULT_THEME,
  Theme,
  ThemeClassNameMap,
  THEMES_MAP,
} from '../theme/themes';

interface ThemeContextValue {
  theme: ThemeClassNameMap;
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('Error: useTheme() requires an <ThemeProvider> parent');
  }

  return context;
};

export interface ThemeProviderProps {
  theme: Theme;
  children:
    | React.ReactNode
    | ((contextValue: ThemeContextValue) => React.ReactNode);
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { theme = DEFAULT_THEME, children } = props;

  const contextValue: ThemeContextValue = {
    theme: THEMES_MAP[theme],
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {typeof children === 'function'
        ? (children as (contextValue: ThemeContextValue) => React.ReactNode)(
            contextValue,
          )
        : children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
