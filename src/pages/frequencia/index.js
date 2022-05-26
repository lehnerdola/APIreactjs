import { useState } from 'react'
import axios from 'axios';


export default function Index(){
    const[texto, setTexto] = useState('');
    const[Caractere, setCaracetere] = useState('');
    const[resposta, setResposta] = useState('');

        async function verificarfreq(){
            const resp = await axios.get(`http://localhost:5000/dia2/freqcaractere/${texto}/${Caractere}`)
            setResposta(resp.data.freq)
        }
    return(                                     ///João fez essa
        <main>
            <h1>Frequência</h1>
            <div>
                Texto: <input type='text' value={texto} onChange={e => setTexto(e.target.value)}/>
            </div>
            <div>
                Caractere: <input type='text'value={Caractere} onChange={e => setCaracetere(e.target.value)}/>
            </div>
            <div>
                <button onClick={verificarfreq}>Verificar frequencia</button>
            </div>
            <div>
                Frequencia: {resposta}
            </div>

        </main>
    )
}