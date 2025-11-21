import React, { createContext, useContext, useState } from 'react';

interface ITheme {
  mode: 'light' | 'dark';
  colors: {
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    primary: string;
    success: string;
    error: string;
  };
}

const lightTheme: ITheme = {
  mode: 'light',
  colors: {
    background: '#ffffff',
    surface: '#f8f9fa',
    text: '#212529',
    textSecondary: '#6c757d',
    border: '#dee2e6',
    primary: '#0d6efd',
    success: '#198754',
    error: '#dc3545',
  },
};

const darkTheme: ITheme = {
  mode: 'dark',
  colors: {
    background: '#1a1a1a',
    surface: '#2d2d2d',
    text: '#ffffff',
    textSecondary: '#adb5bd',
    border: '#495057',
    primary: '#0d6efd',
    success: '#198754',
    error: '#dc3545',
  },
};

interface IThemeContext {
  theme: ITheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  
  const theme = isDark ? darkTheme : lightTheme;
  
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};