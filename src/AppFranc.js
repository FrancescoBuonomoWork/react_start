import { useEffect, useState } from "react";
import Persona from "./components/Persona";

const AppFranc = ({nome, cognome, eta}) => { // Definizione del componente con le proprietà

    // Variabili di stato
    const [numero, setNumero]   = useState(0);
    const [value, setValue]     = useState("");
    const [nomi, setNomi]       = useState([]);
    const [persone, setPersone] = useState(
                                            [  
                                                {
                                                    id: 1,
                                                    nome: "Antonio",
                                                    cognome: "Friello",
                                                    eta: 21
                                                },
                                                {
                                                    id: 2,
                                                    nome: "Pasquale",
                                                    cognome: "Friello",
                                                    eta: 21
                                                }
                                            ]
                                        );

    // Funzione di aggiornamento
    const f = () => {
        setNumero(numero + 1);
    };

    const getNomi = async () => {

        try{

            const response = await fetch(
                `https://mocki.io/v1/c1cb5ec7-453f-47cd-89d0-d62604627c80`
            );

            if(response.status == 200){
                const data = await response.json();
                return data ?? [];
            }

        }catch(e){
            console.log(e);
        }

        return [];
    };

    // Effect component did mount
    useEffect(() => {
        
        getNomi()
        .then(response => {
            setTimeout(() => {
                setNomi(response);
            }, 2000);
        });

    }, []);

    useEffect(() => {
        //alert("Cambiato")
    }, [numero]);

    return (
        <div style={{fontSize: "30px"}}>

            {
                /////////////////////////////////////////////
                // Interpolazione
                /////////////////////////////////////////////
            }
            Ciao {nome} {cognome}. <br/>
            Hai {eta} anni<br/>

            {
                /////////////////////////////////////////////
                // Eventi + aggiornamento di stato
                /////////////////////////////////////////////
            }
            <button onClick={() => {
                f();
            }} id="bottone">Somma {numero}</button>

            {
                /////////////////////////////////////////////
                // Rendering liste + chiavi
                /////////////////////////////////////////////
            }
            {
                persone.map((persona, indice) => 
                    <Persona nome={persona.nome} cognome={persona.cognome} eta={persona.eta} key={persona.id} cambioEta={(newEta) => {
                        persona.eta = newEta;
                        const copy = JSON.parse( JSON.stringify(persone) ); // Copia dell'oggetto
                        setPersone(copy);
                    }}/>
                )
            }

            {
                /////////////////////////////////////////////
                // Nomi
                /////////////////////////////////////////////
            }
            {
                nomi.map((nome, index) => 
                    <p>{nome}</p>
                )
            }

            {
                /////////////////////////////////////////////
                // Input
                /////////////////////////////////////////////
            }
            <input type="text" value={value} onChange={(e) => {
                setValue(e.target.value);
            }}></input>
            <button onClick={() => {
                alert(value);
            }}>Esplodi</button>


        </div>
    );
};

export default AppFranc;