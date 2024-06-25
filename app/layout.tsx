import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Interactive rating component",
  description: "Created by Sam.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grid justify-center items-center">
        {children}
        <footer className="absolute w-full text-center bottom-8 mx-auto font-thin">
          Made by <a className="underline underline-offset-2 text-blue-300" href="https://www.linkedin.com/in/sam-p-s-8350641a2/">Sam</a>
        </footer>
      </body>
    </html>
  );
}
