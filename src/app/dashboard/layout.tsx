import { auth } from "@/auth";
import { DashboardLayout as DashboardLayoutComponent } from "@/components/layout/Dashboard/Layout";
import { SessionProvider } from "next-auth/react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // if (!session) {
  //   redirect("/signin");
  // }

  return (
    <SessionProvider session={session}>
      <DashboardLayoutComponent>{children}</DashboardLayoutComponent>
    </SessionProvider>
  );
}
