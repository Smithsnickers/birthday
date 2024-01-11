import Intro from "@/app/components/intro";
import Outro from "@/app/components/outro";
import Polaroid from "@/app/components/polaroid";
import Schedule from "@/app/components/schedule";

export default function jurijPage() {
    return (
      <div className="flex flex-col"> 
        <Intro></Intro>
        <div className="flex flex-col mt-40">
          <span className="flex w-full flex-col items-center w-full font-mono text-4xl text-white text-center">            
            <h1 className="flex font-display text-7xl text-white">
            Jurij
            </h1>
          </span>
        </div>
        <div className="flex flex-col justify-center mt-40 bg-white">
          <p className="flex font-mono text-1xl break-words mt-10 mb-10">
            Guten Tag ewiger Teil meiner Kindheit,
            <br/>
            ich sags dir, unsere Kindheit war echt groß an der Entwicklung von meinem aktuellen Ich beteiligt.
            Nicht weil ich Games spiele oder Fußball oder Mädels hinterher jage. 
            Weil ich da gelernt habe Kompromisse einzugehen. <br/>
            Ich war eifersüchtig. <br/>
            Ich war gemein. <br/>
            Ich war neugierig. <br/>
            Ich war kreativ. <br/>
            Ich war ein Kind. <br/>
            Ich hatte Spaß. <br/>
            Und zwar daran das alles nicht mit anderen zu machen.
            Alles zu teilen.
            Gedanken, Gefühle, Spiele, Essen. <br/>
            Alles. <br/>
            Ich hatte nie so viele Konflikte, wie als wir uns gesehen haben.
            Das klingt negativ, ist es aber nicht.
            Denn dann konnte ich lernen damit umzugehen.
            Außerdem hatte ich nie so viel Spaß zu der Zeit, wie wenn wir uns gesehen haben.
            Und danach konnte ich nachhause fahren und darüber nachdenken was ich alles gemacht habe. 
            Das hat mir auch irgendwann geholfen über mich selbst zu reflektieren.
            Über Gerechtigkeit nachzudenken und was ein guter Mensch ist. <br/>
            Mittlerweile gehe ich vielen der Hobbies nicht mehr so aktiv nach. <br/>
            Ich bin und war nie ein Gamer und Spiele nehmen immer weniger Zeit in meinem Leben ein. <br/>
            Ich schau immer weniger Animes und und und... <br/> <br/>
            Aber ich bin stark geworden. <br/> <br/>
            Und das auch mit deiner Hilfe.
            Jetzt habe ich das Gefühl unser Auftreten hat gewendet.
            Du wirkst viel selbstsicherer und charismatischer gegenüber Leuten.
            Ich bin kleiner und auf den ersten Blick unscheinbarer.
            Und trotzdem sind wir beide Menschen bei denen es sich lohnt zu bleiben.
          </p>                    
        </div>
        <div className="flex flex-col justify-center bg-white">
          <div className="flex flex-col overflow-hidden">
            <iframe className="self-center" height="300rem" width= "480rem" src="https://www.youtube.com/embed/JGwWNGJdvx8?si=eeEPM_RKCKBgBv5K&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>          
          <br/>
          <p className="flex font-mono text-1xl break-words mt-10 mb-10">
            Für dich habe ich Shape Of You von Ed Sheeran. 
            Wir sind dazu in Stuggi rumgecruist.
            Das war ne gute Zeit und ich hab gelernt Popmusik weniger zu haten.
          </p>
        </div>        
        <Schedule></Schedule>
        <Outro></Outro>
      </div>
    );
  }