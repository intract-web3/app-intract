"use client";
import BusinessLanding from "@/components/BusinessLanding/BusinessLanding";
import Explore from "@/components/BusinessLanding/ExploreSection/Explore";
import Image from "next/image";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
const queryClient = new QueryClient();
export default function Home() {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <BusinessLanding />
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}
