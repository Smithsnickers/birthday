import Intro from "@/app/components/intro";
import Outro from "@/app/components/outro";
import Polaroid from "@/app/components/polaroid";
import Schedule from "@/app/components/schedule";
import christophImage from "public/christoph.jpg";

export default function christophPage() {
    return (
      <div className="flex flex-col"> 
        <Intro></Intro>
        <div className="flex flex-col mt-40">
          <span className="flex w-full flex-col items-center w-full font-mono md:text-4xl text-white text-center">            
            <h1 className="flex font-display sm:text-6xl md:text-9xl bg-clip-text text-white">
            &#9733; Christoph &#9733;
            </h1>
          </span>
        </div>
        <div className="flex justify-center mt-40 bg-white">
          <p className="flex font-mono w-3/4 md:text-2xl bg-clip-text mt-10 mb-10">
            Okay, 
            <br/>
            ich kann gerade kaum sitzen da gerade Blümchen in Schleife läuft. 
            Manchmal denk ich mir echt ich bin zu spät geboren und, dass ich vielleicht ein paar Jahre früher am Leben gewesen wäre.
            Dann hätte ich Nirvana live sehen können und ich denk meine Passion für Musik wäre ein krasseres Hobby gewesen als heute.
            <br/>
            <br/>
            Naja, back to topic. Ich hab ja bald Geburtstag. Und ich hab dich eingeladen. Warum? 
            Weil ich denke, dass du ein Mensch bist, der diese verkorkste Welt in eine bessere Richtung lenkt.
            Du machst so viele Dinge die für mich komplett selbstlos aussehen. 
            Ergreifst in Situationen eine aktive Rolle in der die Leute einfach vorbei gehen würden.
            <br/>
            Das ist eine der coolsten Sachen die ich gesehen habe und sie zeigt, dass vielleicht nicht alles im Leben den Bach untergeht.
            Dafür hast du meine Bewunderung und ich möchte, dass etwas davon auch auf mich abfärbt. 
            Damit auch ich helfen kann die Welt zu verbessern.
          </p>
          <Polaroid imagePath={christophImage}></Polaroid>          
        </div>
        <div className="flex flex-col justify-center bg-white">
        <iframe className="self-center" width="560" height="315" src="https://www.youtube.com/embed/eGUsqIPurNQ?si=Gh36N8C8RQSIT8tR&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <br/>
          <p className="flex font-mono w-3/4 md:text-2xl bg-clip-text mt-10 mb-10">
            Ich denke es ist einfach herzuleiten warum ich Herz an Herz von Blümchen genommen habe.
            Bei dem Song hab ich gesehen was es heißt zu Musik auf Parties Spaß zu haben.
            Und zwar so sehr, dass es auch ansteckend für alle anderen ist. 
            <br/>
            Trotzdem möchte ich sagen, dass ich dich noch nicht so gut kenne. Aber ich hab das Gefühl, dass die Zeit dieses "Problem" lösen wird.
          </p>
        </div>        
        <Schedule></Schedule>
        <Outro></Outro>
      </div>
    );
  }