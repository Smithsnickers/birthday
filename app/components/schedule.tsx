export default function Schedule() {
    return (
    <div className="flex flex-col">
        <div className="flex flex-col mt-40">
            <span className="flex w-full flex-col items-center w-full font-mono md:text-4xl text-white text-center">            
                <h1 className="flex font-display text-9xl bg-clip-text text-white">
                    Der Plan
                </h1>
            </span>
        </div>
        <div className="flex justify-center mt-40 bg-white">        
            <div className="flex flex-col w-3/4 mt-10 mb-10">
                <p className="flex font-mono text-2xl bg-clip-text">
                    An für sich ist der Plan super basic. Wir können am Freitag anreisen und Sonntag abreisen. Wenn ihr was habt was ihr unbedingt machen wollt, cool. sagt mir bescheid.
                    <br/>
                    Die Gegend ist relativ ländlich und wenn der Bedarf besteht, kann ich nachfragen was es so in der Nähe gibt. Wir finden bestimmt Wege Spazieren zu gehen oder zu Wandern.
                    <br/>
                    Mir wurde von einem Bauernhof erzählt, aber bisher hab ich nicht näher nachgefragt.
                    <br/>                    
                    <br/>
                    Es gibt einen Fernseher, Badezimmer, eine Küche. Ich bringe eine Musikanlage mit und Stuff auf den ich evtl. Lust habe. Wenn ihr euch beteiligen wollt. Coolio, mega gern.
                    <br/>
                    Am Samstag Abend ist eine Open Mic. Einige Performer haben sich schon gemeldet. Wir probieren so viel Equipment wie möglich mitzubringen und freuen uns über Ideen. Ihr könnt euch bei mir melden wenn ihr irgendwas habt womit ihr uns so 15 Minuten zeigen wollt. I would appreciate it 😘
                    <br/>
                    <br/>
                    Ich werde mir Ideen fürs Essen überlegen und wir werden dann dort wahrscheinlich gemeinschaftlich kochen.
                    <br/>
                    <br/>
                    <br/>
                    Außerdem muss ich sagen, dass die Open Mic episch wird. Tut mir leid, ist aber so.
                </p>
            <br/>                      
            </div>            
        </div>
        <div className="flex flex-col bg-white">
            <iframe 
                height="459px"
                width= "480px"
                className="flex self-center justify-self-center"
                src="/location.html">
            </iframe>
        </div>            
    </div>
    );
}