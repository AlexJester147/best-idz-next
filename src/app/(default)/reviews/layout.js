"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import DefaultLayout from "@/layout/defaultLayout";

const queryClient = new QueryClient();

export default function Layout({ children }) {
  return (
    <DefaultLayout>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </DefaultLayout>
  );
}
