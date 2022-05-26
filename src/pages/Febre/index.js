import axios from "axios"
import { useState } from "react";

export default function Index(){
    const [t, setT] = useState('');
    const [ resposta ,setResposta] = useState('');

    async function verificarTemperatura() {
        const resp = await axios.get('http://localhost:5000/temperatura?t=' + t);

        if(resp.data.febre === true){
            setResposta('Sim, sinto muito');
        }

        else{
            setResposta('Não'); ///Leticia fez essa parte
        }
    }

    return(
        <main>
            <h1>Febre</h1>

            <div>
               Temperatura: <input type='text' value={t} onChange={e => setT(e.target.value)}/>
            </div>
            <div>
                <button onClick={verificarTemperatura}>Verificar</button>
            </div>
            <div>
                Está com febre? {resposta}
            </div>

        </main>
    )
}