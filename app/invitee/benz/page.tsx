import Intro from "@/app/components/intro";
import Outro from "@/app/components/outro";
import Polaroid from "@/app/components/polaroid";
import Schedule from "@/app/components/schedule";
import benzImage from "public/benz2.jpg"

export default function benzPage() {
    return (
      <div className="flex flex-col"> 
        <Intro></Intro>
        <div className="flex flex-col mt-40">
          <span className="flex w-full flex-col items-center w-full font-mono text-4xl text-white text-center">            
            <h1 className="flex font-display text-7xl bg-clip-text text-white">
             Benz 
            </h1>
          </span>
        </div>
        <Polaroid imagePath={benzImage}></Polaroid>    
        <div className="flex flex-col justify-center mt-40 bg-white">
          <p className="flex font-mono text-2xl bg-clip-text mt-10 mb-10">
            Heyho,
            <br/>            
            ich schau gerade das Video von Born This Way und es ist doch ein wenig gruselig.
            <br/>
            <br/>
            Also. Why you? Why does this happen to you 🥲. 
            Ja, leider bist du auch eingeladen. 
            Sorry. 
            Aber ich wollte dich schon an meinem Geburtstag dabei haben.
            Da sind nämlich coole Leute eingeladen und ich kenn da gar nicht so viele.
            Deswegen dachte ich ich lad mal alle ein die ich kenne.
            <br/>
            <br/>
            Ne, aber jetzt ernsthaft. Ich bin einfach happy dich zu sehen. 
            Du bist ein Mensch für mich, der einfach er selbst ist und andere dabei unterstützt sie selbst zu sein.
            In vielen Momenten wirkt es dann einfach als würdest du die Welt um dich herum vergessen und den Momenten Raum geben sich zu entfalten.
            So, dass du Spaß hast und was andere denken egal ist.
            <br/>
            Ich weiß das lässt sich so leicht sagen. In deinem Kopf geht wahrscheinlich auch oft der übelste Tornado dancen. 
            Doch hab ich dich trotzdem als starken Menschen im Kopf. So das umgekerte von Batman.
            <br/>
            <br/>
            🦇 random Fledermaus.
            <br/>
            <br/>
            Der Held den die Welt braucht aber den sie gar nicht verdient hat.
          </p>                
        </div>
        <div className="flex flex-col justify-center bg-white">
          <div className="flex flex-col overflow-hidden">
            <iframe className="self-center" height="300rem" width= "480rem" src="https://www.youtube.com/embed/wV1FrqwZyKw?si=Zz88cj0wmaSMONiN&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
          <br/>
          <p className="flex font-mono text-2xl bg-clip-text mt-10 mb-10">
            Für dich hab ich Born This Way von Lady Gaga genommen. 
            Zum einen weil du den Song rocken würdest und zum anderen weil ich auch finde, dass du eine Ikone bist, die ein wenig quirky ist. 
            Aber mit einem natürlichen Charisma, das auch dem Pöbel, wie mir, zeigt, dass wir gut sind so wie wir sind.
          </p>
        </div>        
        <Schedule></Schedule>
        <Outro></Outro>
      </div>
    );
  }