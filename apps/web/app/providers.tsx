"use client";
import { MantineProvider, createTheme, ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ReactNode } from "react";

const theme = createTheme({
  primaryColor: 'custom-blue',
  colors: {
    'custom-blue': [
      '#e6f3ff',
      '#cce7ff', 
      '#99cfff',
      '#66b7ff',
      '#54AEFF', // Primary color
      '#80C4FF', // Lighter hover state
      '#3399ff',
      '#0080ff',
      '#0066cc',
      '#003366',
    ],
    'custom-teal': [
      '#e6fbf9',
      '#ccf7f3',
      '#99efe7',
      '#66e7db',
      '#26D4C4', // Secondary accent
      '#1fb8a8',
      '#199c8c',
      '#138070',
      '#0d6454',
      '#074838',
    ],
    'custom-orange': [
      '#fff2ef',
      '#ffe5df',
      '#ffcbbf',
      '#ffb19f',
      '#FF8C66', // Secondary accent
      '#ff734d',
      '#ff5a34',
      '#ff411b',
      '#e62e00',
      '#cc2900',
    ],
    'dark': [
      '#C1C2C5',
      '#A6A7AB',
      '#909296',
      '#5C5F66',
      '#373A40',
      '#2C2E33',
      '#25262B',
      '#1A1B1E',
      '#121212', // Dark background
      '#101113',
    ],
  },
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
  fontFamilyMonospace: 'JetBrains Mono, Monaco, Courier, monospace',
  headings: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    sizes: {
      h1: { fontSize: '2.5rem', lineHeight: '1.2', fontWeight: '700' },
      h2: { fontSize: '2rem', lineHeight: '1.3', fontWeight: '700' },
      h3: { fontSize: '1.5rem', lineHeight: '1.4', fontWeight: '600' },
      h4: { fontSize: '1.25rem', lineHeight: '1.4', fontWeight: '600' },
      h5: { fontSize: '1.125rem', lineHeight: '1.4', fontWeight: '600' },
      h6: { fontSize: '1rem', lineHeight: '1.4', fontWeight: '600' },
    },
  },
  lineHeights: {
    xs: '1.2',
    sm: '1.4',
    md: '1.5',
    lg: '1.6',
    xl: '1.8',
  },
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  shadows: {
    xs: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  radius: {
    xs: '0.25rem',
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },
  other: {
    gradients: {
      primary: 'linear-gradient(135deg, #54AEFF 0%, #26D4C4 100%)',
      secondary: 'linear-gradient(135deg, #54AEFF 0%, #80C4FF 100%)',
      dark: 'linear-gradient(135deg, #121212 0%, #1A1A1A 100%)',
    },
  },
});

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <ColorSchemeScript />
      <MantineProvider theme={theme} defaultColorScheme="auto">
        <Notifications position="top-right" />
        {children}
      </MantineProvider>
    </>
  );
} 