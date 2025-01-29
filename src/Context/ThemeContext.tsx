import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define your colors
const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
    light: {
        text: '#11181C',
        background: '#fff',
        tint: tintColorLight,
        icon: '#000',
        tabIconDefault: '#687076',
        tabIconSelected: tintColorLight,
    },
    dark: {
        text: '#ECEDEE',
        background: '#151718',
        tint: tintColorDark,
        icon: '#FFF',
        tabIconDefault: '#9BA1A6',
        tabIconSelected: tintColorDark,
    },
};

// Define the shape of a theme
type Theme = typeof Colors.light; // Use the light theme as the base type

// Define the themes
const themes = {
    light: Colors.light,
    dark: Colors.dark,
};

// Define the shape of the context value
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
    themeName: string;
};

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a custom hook to use the theme
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

// Define the props for the ThemeProvider component
type ThemeProviderProps = {
    children: ReactNode;
};

// Create the ThemeProvider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>('light'); // Default theme is light

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider
            value={{ theme: themes[theme], toggleTheme, themeName: theme }}
        >
            {children}
        </ThemeContext.Provider>
    );
};