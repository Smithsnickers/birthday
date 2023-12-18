import Intro from "@/app/components/intro";
import Outro from "@/app/components/outro";
import Polaroid from "@/app/components/polaroid";
import Schedule from "@/app/components/schedule";
import claudiImage from "public/claudi (1).jpg";

//TODO

export default function claudiPage() {
    return (
      <div className="flex flex-col"> 
        <Intro></Intro>
        <div className="flex flex-col mt-40">
          <span className="flex w-full flex-col items-center w-full font-mono text-4xl text-white text-center">            
            <h1 className="flex font-display text-9xl bg-clip-text text-white">
            &#9733; Claudi &#9733;
            </h1>
          </span>
        </div>
        <div className="flex justify-center mt-40 bg-white">
          <p className="font-mono w-3/4 text-2xl bg-clip-text mt-10 mb-10">
            Hallo Claudi,
            <br/>
            weißt du mit dir war das so. 
            Ich kam nach Freiburg und dann Chak, chak, chak. 
            Erst angetäuscht, alle ausgetrickts und dann so schnell wie ein Jan in mein Herz geschlichen. 
            Es war einfach einfacher als sich in eine Paula zu verknallen. 
            Ich habs nicht erwartet und da war dann auf einmal ein Freund und das ganze "Ich ziehe durch Deutschland, weil ich keine Freunde finde"-Zeug war dann einfach vorbei.
            Jetzt möchte ich einfach nur mein bestes geben, dass das beidseitig ist und sich auch vertieft.
            Ich hab einfach megaspaß und muss mich nicht verstellen. 
            <br/>
            <br/>
            Schleim
            <br/>
            <br/>
            Ich weiß nicht. Auf einmal war der Alltag angenehm. Du bist jetzt auch in Freiburg bisher die einzige Person die ich einen Freund nennen würde. Wie Jan Schleim immer sagt:
            <br/>
            <br/>
            <div className="text-center">
              Bist du mal im Kopf nicht fein
              <br/>
              Schlagen böse Gedanken auf dich ein
              <br/>
              Dann Schleim
              <br/>
              Kommt dann doch ein Freund vorbei
              <br/>
              Ist es mit der Schlägerei in deinem Kopf
              <br/>
              So schnell wie ein Schakal vorbei
              <br/>
              Und ist die Schlägerei vorbei
              <br/>
              Gehst du manchmal glücklich heim
            </div>           
            <br/> 
            <br/>
            So ein crazy Typ. Der Jan. Der Claudi auch. Ein crazy cooler Typ. So einen den jeder braucht.
          </p>
          <Polaroid imagePath={claudiImage}></Polaroid>          
        </div>
        <div className="flex flex-col justify-center bg-white">
        <iframe className="self-center" height="300rem" width= "388rem" src="https://www.youtube.com/embed/JtULNuoS3jg?si=grZ54CRG27ky_m62&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <br/>
          <p className="flex font-mono w-3/4 text-2xl bg-clip-text mt-10 mb-10">
            Ich hab dir Käptn Peng gegeben, weil Käptn Peng schon so ne Nische ist und als dann bei dir Käptn Peng lief war ich einfach nur noch happy.
            Es gab einfach nichts mehr was mir fehlt. 
            Ich konnte einfach chillen und happy sein.
          </p>
        </div>        
        <Schedule></Schedule>
        <Outro></Outro>
      </div>
    );
  }