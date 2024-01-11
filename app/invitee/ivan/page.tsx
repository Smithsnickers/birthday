import Intro from "@/app/components/intro";
import Outro from "@/app/components/outro";
import Polaroid from "@/app/components/polaroid";
import Schedule from "@/app/components/schedule";

export default function ivanPage() {
    return (
      <div className="flex flex-col"> 
        <Intro></Intro>
        <div className="flex flex-col mt-40">
          <span className="flex w-full flex-col items-center w-full font-mono text-4xl text-white text-center">            
            <h1 className="flex font-display text-7xl text-white">
            Ivan
            </h1>
          </span>
        </div>
        <div className="flex flex-col justify-center mt-40 bg-white">
          <p className="flex font-mono text-1xl break-words mt-10 mb-10">
            Guten Tag David zu Goliath,
            <br/>
            ich habs genau im Kopf.
            Früher war ich gemein zu dir und es tut mir Leid.
            Ich war der Älteste, Stärkste und Wichtigste.
            Das war dumm, aber das hab ich mir eingeredet.
            Dadurch, dass wir uns immer nur ein paar Tage gesehen haben und es immer so lange gedauert, hab ich aber angefangen darüber nachzudenken was ich eigentlich mache.
            Es hat mich dazu gebracht nachzudenken was ein guter Mensch ist und ich hoffe über Zeit hat man gesehen, dass ich mich verbessert habe.
            Unsere Kindheit war einer der größten Einflüsse auf meinen Charakter. <br/>
            Wir sind viel umgezogen. <br/>
            Ich war auf vielen verschiedenen Schulen. <br/>
            Leute hat ihre Kindheitsfreunde und Gruppen in denen sie aufgewachsen sind. <br/>
            Und bei mir warst das auch du. <br/>
            Weil egal wie viel Zeit vergangen ist. <br/>
            Egal wie weit weg wir voneinander wohnten. <br/>
            Ich konnte mir sicher sein, dass ich einen Platz habe, wo ich Freunde hatte. <br/>
            Sie waren nicht in meiner Schule, sondern 4 Stunden und zwei Übelkeitspausen von mir entfernt. <br/>
            <br/><br/>
            Eine Sache für die ich mich bedanken will ist: <br/>
            Als ich erwachsen wurde, hatte ich keine Grenzen mehr. <br/>
            Ich hab gegessen wenn ich traurig war. <br/>
            Ich hab gegessen wenn mir langweilig war. <br/>
            Und hab dann irgendwann 100 Kilo gewogen. <br/>
            Das hat mich runtergezogen. <br/>
            Und dann haben wir Boxen angefangen. <br/>
            Erst hab ich das gemacht, weil du dabei warst. <br/>
            Dann hab ich angefangen das immer mehr für mich zu tun. <br/>
            Und nach und nach habe ich gesehen, dass das zu Erfolgen führt. <br/>
            Und so hab ich wieder den Glauben gefunden, dass ich alles erreichen kann. 
            Denn nachdem ich alles durchgezogen habe, bin ich auf 75 Kilo runter.
            Du hast mich eingeladen und das hat mir einen Schubs gegeben, als ich erwachsen wurde auch selbstständig zu werden.
          </p>                    
        </div>
        <div className="flex flex-col justify-center bg-white">
          <div className="flex flex-col overflow-hidden">
            <iframe className="self-center" height="300rem" width= "480rem" src="https://www.youtube.com/embed/EJcXa595VYY?si=_2G9gYqBHRjzVCyj&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>          
          <br/>
          <p className="flex font-mono text-1xl break-words mt-10 mb-10">
            Normalerweise hab ich hier Musik drin die ich mit Leuten gehört habe oder sie mit ihnen verbinde.
            Ich hab bei dir leider ne harte Zeit mich zu erinnern ob wir zusammen mal aktiv Musik gehört haben.
            Zusätzlich verschwimmt alles mit den Chansons unserer Eltern.
          </p>
        </div>        
        <Schedule></Schedule>
        <Outro></Outro>
      </div>
    );
  }