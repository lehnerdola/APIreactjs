import { Link } from "react-router-dom";


export default function Index(){
    return(
        <main>
            <h1> HOME </h1>

            <ul>
                <li> <Link to='/corprimaria'> Cor Primária </Link> </li>
                <li> <Link to='/frequencia'> Frequênica de Caractere </Link> </li>
                <li> <Link to='/ingresso'> Preço dos ingressos </Link> </li>
                <li> <Link to='/MaiorNumero'> Programa maior número </Link> </li>
                <li> <Link to='/Somar'>Programa Somar</Link> </li>

            </ul>

        </main>
    )
}