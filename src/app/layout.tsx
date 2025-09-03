
import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "./_components/client-wrapper/client-wrapper";
export const metadata: Metadata = {
  title: "Icy Tales",
  description: "Handmade ice creams with unique ingredients and premium quality. A different flavor for special moments.",
 keywords: [
    "handmade ice cream",
    "premium ice cream",
    "natural ingredients",
    "Icy Tales",
    "gourmet desserts",
    "ice cream shop",
    "unique flavors"
  ],
icons: {
  icon: "/images/icons/favicon.png",
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}