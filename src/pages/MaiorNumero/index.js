import { useState } from "react";
import axios from "axios";

export default function Index(){
    const [numeros,setNumeros] =useState([]);
            const [numero,setNumero] =useState(0);
            const [resposta,setResposta] =useState('');

            ///Letícia fez essa

            function adicionar(){
                setNumeros([...numeros, numero])
                setNumero('');
            }

            async function verificarMaior(){
                const resp= await axios.post('http://localhost:5000/maiorNumero', numeros);
                setResposta(resp.data.maior);
            }
    return(
        <main>
            <h1>Maior número</h1>
            


            <div>
                Adicione um número: <input type= 'text'  value={numero} onChange={e => setNumero(Number(e.target.value)) }/> <button onClick={adicionar}>Adicionar</button>
            </div>

            <div>
                {numeros.map(item => 
                    <div> {item} </div>
                    
                    )}
            </div>

            <div>
                <button onClick={verificarMaior}>Verificar</button>O maior número é: {resposta}
            </div>
        </main>
    )
}