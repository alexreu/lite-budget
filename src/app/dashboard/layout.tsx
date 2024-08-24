import { DashboardLayout as DashboardLayoutComponent } from "@/components/layout/Dashboard/Layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayoutComponent>{children}</DashboardLayoutComponent>;
}
