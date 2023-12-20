import Intro from "@/app/components/intro";
import Outro from "@/app/components/outro";
import Polaroid from "@/app/components/polaroid";
import Schedule from "@/app/components/schedule";
import annaImage from "public/anna.jpg"

export default function annaPage() {
  return (
    <div className="flex flex-col"> 
        <Intro></Intro>
        <div className="flex flex-col mt-40">
          <span className="flex w-full flex-col items-center w-full font-mono text-4xl text-white text-center">            
            <h1 className="flex font-display text-7xl bg-clip-text text-white">
            &#9733; Anna &#9733;
            </h1>
          </span>
        </div>
        <Polaroid imagePath={annaImage}></Polaroid>    
        <div className="flex flex-col justify-center mt-40 bg-white">
          <p className="flex font-mono text-2xl bg-clip-text mt-10 mb-10">
            Hola,
            <br/>            
            na du Brosine? Ich hoffe Marburg läuft gut und alles was du machen willst läuft glatt. 
            Ich sitz gerade rum und hör Highly Suspect.
            Außerdem schreib ich hier an Texten für Personen die mir wichtig sind. 
            Also willkommen im Kreis der Verfluchten 
            <br/>
            👻
            <br/>
            Ich denke ich bin jetzt an 'nem Punkt in meinem Leben angekommen an dem sich langsam Sachen festigen.
            Eine Sache die die Zeit gezeigt hat ist, dass du auf jeden Fall ein guter Teil meines Lebens bist und auch einer bleibst :)
            <br/>
            Denn egal ob ich verwandt mit Leuten bin. 
            Ich will mit ihnen genau so wenig Barrieren haben wie mit meinen Freunden.
            Und ich gebe mein Bestes, dass beide Seiten das Gefühl, dass das möglich ist 🤗
            <br/>
            Es ist nicht mehr ein "Wir müssen unsere Famiele lieben" blablabla, sondern einfach ein du bist ein cooler Mensch und ich möchte dich weiterhin in meinem Leben haben.
            Jetzt von mir. Wenn du irgendwann irgendwas brauchst, sag bescheid. Ich werd mir auch immer abholen wenn ich was brauche. Selbst wenns nur ein Anruf ist.
          </p>
                
        </div>
        <div className="flex flex-col justify-center bg-white">
          <div className="flex flex-col overflow-hidden">
            <iframe className="self-center" height="300rem" width= "480rem" src="https://www.youtube.com/embed/N-Tgt5BVmg4?si=motkwMrSoqDhE9a8&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
          <br/>
          <p className="flex font-mono text-2xl bg-clip-text mt-10 mb-10">
            Für dich habe ich Hometown von Cleopatrick ausgewählt. 
            Why? 
            Cleopatrick ist meine meistgehörte Band 2023 und es vielleicht nicht das worum es in dem Lied geht, aber
            <br/>
            mit der Zeit habe ich eine Sache über mich gelernt. 
            Ich weiß nicht was ich zuhause nennen kann. 
            Ein Ort ist es nicht wirklich. 
            Zumindest keiner der fest auf einer Karte markiert ist.
            Eine Heimatstadt hab ich auch nicht so wirklich.
            Überall wo ich gelebt habe hatte ich wenig Bezug zum Ort oder den Menschen. 
            Das wichtige waren dann die Menschen die ich mochte.
            Die machten aus Orten ein Zuhause.
            Denn ich konnte irgendwo hin gehen und ich selbst sein.
            Ohne die Angst zu haben dafür bestraft zu werden. 
            <br/>
            Also,
            <br/>
            danke auch dir, dass ich sein kann wie ich bin.
            <br/>
            <br/>
            ________________
            <br/>
            Und zuletzt noch eine Aufgabe für dich. Magst du mit Pauli, Felix und Philo an einer Playlist für das Event arbeiten? 
            <a className="font-mono text-2xl bg-clip-text text-blue-600 hover:text-blue-800 visited:text-purple-600 mb-10" href="https://open.spotify.com/playlist/70cJiBg9gQvl4mtG3tkOqO?si=yyR5XIRnTwa62b6Y8esc3Q&pt=d6b3561a5227e9d30254913118f670a2">SMS Spotify</a>
          </p>
        </div>        
        <Schedule></Schedule>
        <Outro></Outro>
      </div>  
  );
}