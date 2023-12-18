import Intro from "@/app/components/intro";
import Outro from "@/app/components/outro";
import Polaroid from "@/app/components/polaroid";
import Schedule from "@/app/components/schedule";
import fineImage from "public/fine.jpg"

export default function finePage() {
    return (
      <div className="flex flex-col"> 
        <Intro></Intro>
        <div className="flex flex-col mt-40">
          <span className="flex w-full flex-col items-center w-full font-mono text-4xl text-white text-center">            
            <h1 className="flex font-display text-7xl bg-clip-text text-white">
             Fine 
            </h1>
          </span>
        </div>
        <Polaroid imagePath={fineImage}></Polaroid> 
        <div className="flex flex-col justify-center mt-40 bg-white">
          <p className="flex font-mono text-2xl bg-clip-text mt-10 mb-10">
            Hola Fine,
            <br/>
            auch du bist eingeladen.
            Wir kennen uns noch nicht so lange, aber hier die Hard Facts. 
            Ich hatte bisher immer Fun. 
            Du scheinst ein sehr herzvoller Mensch zu sein.
            Das ist einfach cool. 
            Außerdem magst du einen Menschen, der mir wahnsinnig wichtig ist.
            Diesem vertraue wenn er eine Person sehr mag.
            <br/>
            <br/>
            Es gibt noch einen weiteren Grund.
            Bist du Teil von Philos Leben, wirst du auch Teil meines Lebens sein.
            Du bist jederzeit eingeladen und ich möchte, dass irgendwann aus "Philos Freundin" Fine wird.
            Mit der ich auch eine gute Freundschaft haben kann.
          </p>                   
        </div>
        <div className="flex flex-col justify-center bg-white">        
          <div className="flex flex-col overflow-hidden">
            <iframe className="self-center" height="300rem" width= "480rem"src="https://www.youtube.com/embed/Dz5s5C6sAt0?si=0o1bgmgHG-PUiE9z&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
          <br/>
          <p className="flex font-mono text-2xl bg-clip-text mt-10 mb-10">
            Für dich hab ich Skinny Love von Bon Iver genommen. 
            Ich hab Philo gefragt was für Musik du hörst. 
            Da ist Bon Iver auch gefallen und dann hab ich mein Lieblingsalbum von Bon Iver angeschaltet mich hingelegt und mit freiem Kopf einfach an die Decke geschaut.
            Es war einfach befreiend. 
            Bei einigen Textstellen hab ich dann ein wenig aus den Augen geschwitzt.
            Einfach ein wenig die Welt vergessen und das negative aus meinem Kopf vetrieben.
          </p>
        </div>        
        <Schedule></Schedule>
        <Outro></Outro>
      </div>
    );
  }