
import { auth } from "@/auth";
import Image from "next/image";
import astronautImage from "../public/astronaut.png"
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default async function Home() {
  const user = await auth().then((session) => {
    return session?.user;
  });

  const links = [
    { name: 'Home', href: '/'},
    {
      name: 'Claudi',
      href: '/claudi',
    },
    {
      name: 'Pauli',
      href: '/pauli',
    },
    {
      name: 'Christoph',
      href: '/christoph',
    },
    {
      name: 'Anna',
      href: '/anna',
    },
    {
      name: 'Vibbs',
      href: '/vibbs',
    },
    {
      name: 'Benz',
      href: '/benz',
    },
    {
      name: 'Philo',
      href: '/philo',
    },
    {
      name: 'Fine',
      href: '/fine',
    },
    {
      name: 'Max',
      href: '/max',
    },
    {
      name: 'Felix',
      href: '/felix',
    },    
    {
      name: 'Jurij',
      href: '/jurij',
    },    
    {
      name: 'Ivan',
      href: '/ivan',
    },
  ];

  const userLink = () : string => {
    const link = links.find(link => link.name == user?.name);
    if (link)
      return link.href
    else
      return ""
  };

  return (
    <div className="flex flex-col justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="flex justify-between">
        <h1 className="flex w-11/12 font-display sm:text-4xl md:text-6xl xl:text-9xl whitespace-nowrap bg-clip-text text-white animate-fade-left animate-once animate-ease-out left-1">
          Sonne,
          <br/>
          Mond
          <br/>
          und Sterne
          <br/>
          und {user?.name}
        </h1>

        <Link
            className="animate-fade-left animate-once animate-ease-out left-1" 
            key={user?.name}
            href={user?.name && userLink() ? "invitee/"+userLink() : ""}>
          <Image
            className="flex animate-pulse animate-infinite" 
            src={astronautImage}
            alt="Picture of the author"
            width={410}
            height={661}
          >                      
          </Image>
        </Link>        
      </div>      
    </div>
  );
}
