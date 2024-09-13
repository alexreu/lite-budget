import { auth } from "@/auth";
import { DashboardLayout as DashboardLayoutComponent } from "@/components/layout/Dashboard/Layout";
import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <DashboardLayoutComponent>{children}</DashboardLayoutComponent>
    </SessionProvider>
  );
}
