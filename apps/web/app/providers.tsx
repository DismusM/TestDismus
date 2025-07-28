"use client";
import { MantineProvider, createTheme } from "@mantine/core";
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
      '#3399ff',
      '#0080ff',
      '#0066cc',
      '#004d99',
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
});

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <MantineProvider theme={theme}>
      <Notifications position="top-right" />
      {children}
    </MantineProvider>
  );
} 