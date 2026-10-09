import { default as React } from 'react';
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
interface IThemeContext {
    theme: ITheme;
    toggleTheme: () => void;
}
export declare const ThemeProvider: React.FC<React.PropsWithChildren<{
    theme?: 'light' | 'dark';
}>>;
export declare const useTheme: () => IThemeContext;
export {};
