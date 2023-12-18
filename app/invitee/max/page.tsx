import Intro from "@/app/components/intro";
import Outro from "@/app/components/outro";
import Polaroid from "@/app/components/polaroid";
import Schedule from "@/app/components/schedule";
import maxImage from "public/max.jpg"

//TODO

export default function maxPage() {
    return (
      <div className="flex flex-col"> 
        <Intro></Intro>
        <div className="flex flex-col mt-40">
          <span className="flex w-full flex-col items-center w-full font-mono text-4xl text-white text-center">            
            <h1 className="flex font-display text-9xl bg-clip-text text-white">
            &#9733; Max &#9733;
            </h1>
          </span>
        </div>
        <div className="flex justify-center mt-40 bg-white">
          <p className="flex font-mono w-3/4 text-2xl bg-clip-text mt-10 mb-10">
            Heyho Max,
            <br/>
            manchmal passiert es, dass man irgendwo hin geht. 
            Random mit Leuten redet und dann direkt das Gefühl hat, dass es echt Spaß macht.
            Normalerweise ist für mich Leute kennenzulernen ein Mehraufwand.
            Ich muss erst einmal Energie reinstecken um zu dem Punkt zu kommen, dass es mir keine Energie mehr raubt.
            Ich mach das zwar oft. Aber dann mit dem Hintergrund, dass ich daran investieren will, weil ich da Potential sehe.
            Hier sehe ich auch ein Potential, dass sich eine Freundschaft entwickeln könnte.
            Aber zusätzlich habe ich nicht das Gefühl, dass es mich viele Nerven kosten wird.
            Ich denke der Einzige Faktor wird Zeit sein und ich werde einfach jeden Moment der Zeit mit dir genießen.
            Irgendwann schaffe ich dann auch von was Anderem als Musik zu reden und irgendwann vielleicht auch, dass Philo nicht unbedingt notwendig dabei sein muss.
            (natürlich ist er erwünscht) Und bis es soweit ist, bist du jederzeit eingeladen.
          </p>
          <Polaroid imagePath={maxImage}></Polaroid>          
        </div>
        <div className="flex flex-col justify-center bg-white">
          <iframe className="self-center" height="300rem" width= "388rem" src="https://www.youtube.com/embed/_JUdbc16aMU?si=7aSsT1qYBy4z5sWn&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <br/>
          <p className="flex font-mono w-3/4 text-2xl bg-clip-text mt-10 mb-10">
            Ich habe für dich Dussmann von Betterov ausgesucht. Warum? 
            Weil das mein meistgehörter Künstler 2023 ist und du ihn mir gezeigt hast.
          </p>
        </div>        
        <Schedule></Schedule>
        <Outro></Outro>
      </div>
    );
  }