"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
interface providerProps {
  children: React.ReactNode;
}

const Provider = ({ children }: providerProps) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Provider;
