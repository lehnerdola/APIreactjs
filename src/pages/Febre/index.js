import axios from "axios"
import { useState } from "react";

export default function Index(){
    const [t, setT] = useState('');
    const [ resposta ,setResposta] = useState('');

    async function verificarFebre() {
        const resp = await axios.get('http://localhost:5000/temperatura/' + t);

        if(resp.data.febre == true){
            setResposta('Sim');
        }

        else{
            setResposta('Não');
        }
    }

    return(
        <main>
            <h1>Febre</h1>

            <div>
               Temperatura: <input type='text' value={t} onChange={e => setT(e.target.value)}/>
            </div>
            <div>
                <button onClick={verificarFebre}>Verificar</button>
            </div>
            <div>
                Está com febre? {resposta}
            </div>

        </main>
    )
}