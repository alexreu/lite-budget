import { usePathname } from "next/navigation";

export const useCurrentSelectedKeys = (): string[] => {
  const pathname = usePathname();

  if (pathname === "/dashboard") {
    return ["home"];
  }

  const path = pathname.split("/");
  if (path.length > 2) {
    return [path[2]];
  }

  return [];
};
