import Intro from "@/app/components/intro";
import Outro from "@/app/components/outro";
import Polaroid from "@/app/components/polaroid";
import Schedule from "@/app/components/schedule";
import felixImage from "public/felix.jpg";

export default function claudiPage() {
    return (
        <div className="flex flex-col"> 
        <Intro></Intro>
        <div className="flex flex-col mt-40">
          <span className="flex w-full flex-col items-center w-full font-mono text-4xl text-white text-center">            
            <h1 className="flex font-display text-7xl text-white">
             Felix 
            </h1>
          </span>
        </div>
        <Polaroid imagePath={felixImage}></Polaroid> 
        <div className="flex flex-col justify-center mt-40 bg-white">
          <p className="flex font-mono text-1xl break-words mt-10 mb-10">
            Hello Felix.
            <br/>
            Erst war München solala. Es gab eigentlich ganz viele Nischen. 
            Aber ich kam nicht so wirklich in Gruppen rein.
            Die Leute waren in ihren Gruppen festgefahren und waren nicht so offen für Neuzugang.
            Alles was begann war schnell vorbei. 
            Weil ich nicht so viel Feedback bekommen habe wie ich wollte.
            Ich hab versucht Energie in irgendwelche Beziehungen reinzustecken, aber es kam dann nicht so viel zurück.
            Und dann kam da so ein Felix.
            Das Indie Game Meetup war schon ein spannendes Konzept, welches dann irgendwann ein Kickstarter zum Kennenlernen wurde.
            Dann fing es an, dass wir auch so was gemacht haben und es war immer ein Geben und Nehmen.
            Ich fühlte mich einfach gut. Wertgeschätzt. 
            Als du nach Berlin gingst hatte ich dann Angst, dass wir uns verlieren.
            Aber auch diese Angst hat sich bald gelegt. 
            In Berlin wurds dann jedes Mal ein Abenteuer.
            Jeder Besuch wurde dann ein Adrenalin-Trip.
            Welcher mir jetzt auch in meinem Alltag den Mut gegeben hat noch mehr Dinge auszuprobieren.
          </p>                   
        </div>
        <div className="flex flex-col justify-center bg-white">        
          <div className="flex flex-col overflow-hidden">
            <iframe className="self-center" height="300rem" width= "480rem" src="https://www.youtube.com/embed/vjGqaJD7XhY?si=8WeT2_rxba47yNkF&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
          <br/>
          <p className="flex font-mono text-1xl break-words mt-10 mb-10">
            Ich hab dir The End von Monolink x Acid Pauli gegeben. 
            Weil du für mich einer der Gründe warst mit Musik rumzuprobieren und auch verschiedene Wege auszuprobieren Musik zu hören.
            <br/>
            <br/>
            ________________
            <br/>
            Und zuletzt noch eine Aufgabe für dich. Magst du mit Pauli, Anna und Philo an einer Playlist für das Event arbeiten?             
          </p>
          <a className="font-mono text-2xl text-blue-600 hover:text-blue-800 visited:text-purple-600 mb-10" href="https://open.spotify.com/playlist/70cJiBg9gQvl4mtG3tkOqO?si=c665af4614294f82&pt=ba804ae5de532cfbdc19343664ad9235">SMS Spotify</a>
        </div>        
        <Schedule></Schedule>
        <Outro></Outro>
      </div>
    );
}