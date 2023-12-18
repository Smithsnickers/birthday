import Intro from "@/app/components/intro";
import Outro from "@/app/components/outro";
import Polaroid from "@/app/components/polaroid";
import Schedule from "@/app/components/schedule";
import pauliImage from "public/pauli.jpg"

export default function pauliPage() {
    return (
      <div className="flex flex-col"> 
        <Intro></Intro>
        <div className="flex flex-col mt-40">
          <span className="flex w-full flex-col items-center w-full font-mono text-4xl text-white text-center">            
            <h1 className="flex font-display text-7xl bg-clip-text text-white">
             Pauli 
            </h1>
          </span>
        </div>
        <Polaroid imagePath={pauliImage}></Polaroid>  
        <div className="flex flex-col justify-center mt-40 bg-white">
          <p className="flex font-mono text-2xl bg-clip-text mt-10 mb-10">
            Hallo :)
            <br/>
            Gerade bin ich ultramüde, also denk ich ich schalt einfach meinen Kopf aus.
            <br/>
            <br/>
            Warum hab ich dich eingeladen?
            <br/>
            Warum hab ich ein Bild für dich?
            <br/>
            Ne Rose kannst du auch haben.
            <br/>
            <br/>
            Eigentlich ganz einfach. 
            Du bist ein Sonnenschein ohne Ende. 
            Wenn du da bist machen Sachen einfach noch mehr Spaß. 
            Bist süß und offen. 
            Und ich denke es gibt keinen Menschen der*die dich nicht mag. 
            <br/>
            Es ist einfach als wäre um dich herum Idylle, während du Sozial-Schmetterlingst.
            <br/>
            <br/>
            Ich hoffe wir können uns besser kennenlernen. 
            Denn bisher weiß ich doch noch relativ wenig.
            Ich hatte mich am Anfang einfach nicht getraut nach Dingen zu fragen. Du warst einfach eins der zu coolen Kids.
            <br/>            
          </p>                  
        </div>
        <div className="flex flex-col justify-center bg-white">
          <div className="flex flex-col overflow-hidden">
            <iframe className="self-center" height="300rem" width= "480rem" src="https://www.youtube.com/embed/k4pXyOSXKtQ?si=Iy7XIUE4dplgqU5-&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
          <br/>
          <p className="flex font-mono text-2xl bg-clip-text mt-10 mb-10">
            Generell war alles eine große Reise und sie hat mich am Ende hierher geführt und am Anfang schienen die Leute unerreichbar zu sein. 
            Coole Kids halt. Nett ohne Grund, coole Persönlichkeit, hören gute Musik und haben Spaß am Leben und stecken andere damit an.
            Das war für mich wie Wunschdenken. Das kann nicht wahr sein.
            Es ist nicht so einfach. 
            <br/>
            <br/>
            In einer Welt die verzerrt ist. 
            Du denkst von dir du bist eigentlich ganz okay, doch um dich herum herrscht Wettbewerb, 
            ein verdrehtes Selbstbild und der stete Vergleich mit einem Idealbild, das gar nicht deins ist.
            <br/>
            <br/>
            Und dann gibt es Leute. 
            <br/>
            Realitätscheck. 
            <br/>
            Die dich zurückholen. 
            <br/>
            Da wo du hingehörst. 
            <br/>
            Da wo du du selbst sein kannst.
            <br/>
            Wo es okay ist. 
            <br/>
            <br/>
            Deswegen für dich Endlich angekommen von Casper. 
            Weil ich das Gefühl habe der Mensch an dem ich die ganze Zeit gearbeitet habe zu sein, ist endlich da und er ist gut. 
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            Und ich liebe Musik, aber vielleicht schaffen wir es nächstes Jahr auch über was anderes zu reden 🙈. 
            Trotzdem freue ich mich auf die Konzerte nächstes Jahr und hoffe, dass ich Teil deiner Gruppe sein kann.
            Vielleicht kann ich dabei auch die anderen Leute kennenlernen die du kennst und magst.
            Ich habe nämlich die Befürchtung, dass die auch ganz schön cool sind.
            <br/>
            ________________
            <br/>
            Da du gemeint hast, dass du evtl. nicht dabei sein kannst. Hier eine Aufgabe für dich. Ich schick Philo, Anna, Felix und dir eine Playlist zum Befüllen. 
            Damit wir sie im Februar gemeinsam genießen können und ein wenig Pauli mit uns ist auch wenn sie nicht da ist 
            (ich hoffe trotzdem, dass du dabei sein kannst)
            // TODO Playlist
          </p>
        </div>        
        <Schedule></Schedule>
        <Outro></Outro>
      </div>      
    );
  }