"use client";

import { ThemeProvider } from "@/sdk/context/ThemeContext";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export function Providers({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
