import { Providers } from "@/components/providers/Providers";
import { ThemeConfigProvider } from "@/components/providers/ThemeConfigProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
