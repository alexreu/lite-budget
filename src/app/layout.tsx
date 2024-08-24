import { Providers } from "@/components/providers/Providers";
import { ThemeConfigProvider } from "@/components/providers/ThemeConfigProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <ThemeConfigProvider>
        <html lang="fr">
          <body className={`${roboto.className}`}>
            <AntdRegistry>{children}</AntdRegistry>
          </body>
        </html>
      </ThemeConfigProvider>
    </Providers>
  );
}
