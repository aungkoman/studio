"use client";

import React from 'react';

// This component can be used to wrap any client-side providers
// like QueryClientProvider, ThemeProvider, etc.
// For now, it's a simple pass-through.
export default function AppProviders({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
