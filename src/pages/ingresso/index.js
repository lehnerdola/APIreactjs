import axios from "axios"
import { useState } from "react"



export default function Index(){ 
    const [qtdInteiras, setQtdInteiras] = useState(0);
    const [qtdMeias, setQtdMeias] = useState(0);
    const [Dia, setDia] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [total, setTotal] = useState(0);

    ///João fez essa

    async function Calcular(){
        const resp = await axios.post('http://localhost:5000/dia2/ingressocinema', 
            {
                    qtdInteiras: qtdInteiras,
                    qtdMeias: qtdMeias,
                    Dia: Dia,
                    nacionalidade: nacionalidade
             });


             setTotal(resp.data.total);
            }

    
   

    return(
        <main>
            <h1>Ingressos</h1>

            <div>
                Quantidade Inteiras: <input type='text' value={qtdInteiras} onChange={e => setQtdInteiras(Number(e.target.value))}/>
            </div>
            <p></p>
            <div>
                Quantidade Meias: <input type='text' value={qtdMeias} onChange={e => setQtdMeias(Number(e.target.value))}/>
            </div>
            <p></p>
            <div>
                Dia da semana: <input type='text' value={Dia} onChange={e => setDia(e.target.value)}/>
            </div>
            <p></p>
            <div>
                Nacionalidade do filme: <input type='text' value={nacionalidade} onChange={e => setNacionalidade(e.target.value)}/>
            </div>
            <div>
                <button onClick={Calcular}>Calcular</button>
            </div>
            <div>
                Total R$ {total}
            </div>
        </main>
    )
}