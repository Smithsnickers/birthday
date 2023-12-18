import Intro from "@/app/components/intro";
import Outro from "@/app/components/outro";
import Polaroid from "@/app/components/polaroid";
import Schedule from "@/app/components/schedule";
import vibbsImage from "public/vera.jpg"

export default function vibbsPage() {
    return (
      <div className="flex flex-col"> 
        <Intro></Intro>
        <div className="flex flex-col mt-40">
          <span className="flex w-full flex-col items-center w-full font-mono text-4xl text-white text-center">            
            <h1 className="flex font-display text-7xl bg-clip-text text-white">
            Vibbs
            </h1>
          </span>
        </div>
        <Polaroid imagePath={vibbsImage}></Polaroid>
        <div className="flex flex-col justify-center mt-40 bg-white">
          <p className="flex font-mono text-2xl bg-clip-text mt-10 mb-10">
            Hullo,
            <br/>
            ich weiß nicht so wirklich was ich sagen soll.
            Ich denke die meisten Dinge ich sagen will sag ich sowieso.
            Du bist da und wir tauschen uns aus. 
            Über alles was da ist.
            Manchmal so viel, dass alles gesagt ist.
            Und das ist okay.
            Gut sogar.
            Denn selbst dann, ist es kein Problem gemeinsam Zeit zu verbringen.
            Wir müssen nicht reden um ne gute Zeit zu haben.
            Manchmal reicht es einfach parallel zu arbeiten.
            Familie ist da gar nicht mehr so der richtige Begriff.
            Wir halten uns den Rücken frei.
            Nicht nur weil wir Geschwister sind, sondern darüber hinaus auch Freunde.            
          </p>                    
        </div>
        <div className="flex flex-col justify-center bg-white">
          <div className="flex flex-col overflow-hidden">
            <iframe className="self-center" height="300rem" width= "480rem" src="https://www.youtube.com/embed/Fc73BWmhyBk?si=YeReR8IdSIuIW8Sw&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>          
          <br/>
          <p className="flex font-mono text-2xl bg-clip-text mt-10 mb-10">
            Für dich habe ich Friend von Daisy the Great x Sipper. 
            Sipper ist einfach so Kopfmusik. 
            Ein Künstler für melancholische Gefühle. 
            Die mich jeden Tag ein wenig begleiten.
            Und mit guter Musik perfecto.
            Guter Tag, gute Gefühle.
          </p>
        </div>        
        <Schedule></Schedule>
        <Outro></Outro>
      </div>
    );
  }