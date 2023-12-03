import { auth } from "@/auth";
import React from "react";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default async function Home() {
  const user = await auth().then((session) => {
    return session?.user;
  });

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16">
        <ul className="gap-4">
          {/* {navigation.map((item) => (

          ))} */}
        </ul>
      </nav>

      <h1 className="w-11/12 font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text text-white animate-fade-left animate-once animate-ease-out left-1">
        Sonne,
        <br/>
        Mond
        <br/>
        und Sterne
        <br/>
        und {user?.name}
      </h1>

      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
        </h2>
      </div>
    </div>
  );
}
