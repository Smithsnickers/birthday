import Intro from "@/app/components/intro";
import Outro from "@/app/components/outro";
import Polaroid from "@/app/components/polaroid";
import Schedule from "@/app/components/schedule";
import philoImage from "public/Philo.jpg"

export default function philoPage() {
    return (
      <div className="flex flex-col"> 
        <Intro></Intro>
        <div className="flex flex-col mt-40">
          <span className="flex w-full flex-col items-center w-full font-mono text-4xl text-white text-center">            
            <h1 className="flex font-display text-7xl bg-clip-text text-white">
             Philo 
            </h1>
          </span>
        </div>
        <Polaroid imagePath={philoImage}></Polaroid>  
        <div className="flex flex-col justify-center mt-40 bg-white">
          <p className="flex font-mono text-2xl bg-clip-text mt-10 mb-10">
            Hey Philo,
            <br/>
            ich weiß nicht. 
            Bei dir hab ich eigentlich nicht viel zu sagen. 
            <br/>
            Ich hab einfach das Gefühl, dass ich gar nichts mehr falsch machen kann. 
            <br/>
            Es ist einfach, du wirst einfach da sein.
            <br/>
            Jetzt und auch in der Zukunft.
            <br/>
            Und wir werden unsere Wege gemeinsam gehen. 
            <br/>
            Egal wo wir sind.
            <br/>
            Ich hab bei dir das Gefühl Teil deines Lebens zu sein.
            <br/>
            Die Leute wissen, wenn was ist.
            <br/>
            Ich werd da sein.
            <br/>
            Andersrum ists genauso.
            <br/>
            Manchmal fragt meine Familie sogar wie es dir geht.
            <br/>
            Manchmal frag ich mich wie es dir geht.
            <br/>
            Und dann frag ich einfach.
            <br/>
            Ich hatte einfach noch nie so ein Gefühl an Sicherheit.
            <br/>
            Danke
          </p>                  
        </div>
        <div className="flex flex-col justify-center bg-white">        
          <div className="flex flex-col overflow-hidden">
              <iframe className="self-center" height="300rem" width= "480rem" src="https://www.youtube.com/embed/qU9mHegkTc4?si=fG1IVFNS1tXf_A1m&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
          <br/>
          <p className="flex font-mono text-2xl bg-clip-text mt-10 mb-10">
            Ich hab für dich 505 von Arctic Monkeys. 
            Es ist einfach auch ein Teil der immer bleiben wird. 
            Wir haben gemeinsam neue Musik erkundet ausprobiert. 
            Auch wenn sie niemand sonst gehört hat.
            Ich hab durch dich gelernt auch neue Musik auszuprobieren und angefangen Wege zu suchen Musik anders zu erleben.
            Manchmal einfach abschalten.
            Nichts tun.
            Und die Texte Melodien durch meinen Kopf laufen lassen.
            Weil egal was für Musik es ist.
            Dahinter steckt immer ein Mensch der*die dran gearbeitet hat.
            Eigene Gedanken und Gefühle hatte und sie für alle offen gelegt hat.

            <br/>
            <br/>
            ________________
            <br/>
            Und zuletzt noch eine Aufgabe für dich. Magst du mit Pauli, Anna und Felix an einer Playlist für das Event arbeiten? Hier
            <a className="font-mono text-2xl bg-clip-text text-blue-600 hover:text-blue-800 visited:text-purple-600 mb-10" href="https://open.spotify.com/playlist/70cJiBg9gQvl4mtG3tkOqO?si=yyR5XIRnTwa62b6Y8esc3Q&pt=d6b3561a5227e9d30254913118f670a2">SMS Spotify</a>
          </p>
        </div>        
        <Schedule></Schedule>
        <Outro></Outro>
      </div>
    );
  }