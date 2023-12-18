import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Button } from '@/app/components/button';
import { signOut } from '@/auth';
import Particles from "./components/particles";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

const cutiveMono = LocalFont({
  src: "../public/fonts/CutiveMono-Regular.ttf",
  variable: "--font-cutive-mono",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable, cutiveMono.variable].join(" ")}>
      <head>
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        
        <form
          action={async () => {
            'use server';
            await signOut();
          }}>
          <Button className={`absolute top-5 right-5`}>Logout</Button>
        </form>      
        <Particles
        className="fixed inset-0 -z-10 animate-fade-in"        
        quantity={100}
        />
        {children}
      </body>
    </html>
  );
}
