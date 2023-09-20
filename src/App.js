import Formulario from "./components/Formulario";
import Banner from "./components/Banner";
import { useState } from "react";
import Time from "./components/Time";

const App = () => {
    const [ colaboradores, setColaboradores ] = useState([]);

    const aoNovoColaboradorAdicionado = (colaborador) => {
        console.log(...colaboradores);
        setColaboradores([...colaboradores, colaborador]);
    }

    const times = [
        {
            nome: "Pedagógica",
            corFundo: "#5B9BD5",
        },
        {
            nome: "Administrativa",
            corFundo: "#E7E6E6",
        },
        {
            nome: "Instrutores",
            corFundo: "#5B9BD5",
        },
        {
            nome: "Coordenação",
            corFundo: "#E7E6E6",
        },
        {
            nome: "Alunos",
            corFundo: "#5B9BD5",
        },
    ]

    return (
        <div className="App-header">
            <Banner />
            <Formulario
                time={times.map(time => time.nome)}
                aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
            />
            {times.map(time => 
                <Time
                    key={time.nome}
                    name={time.nome}
                    corFundo={time.corFundo}
                    colaborador={colaboradores.filter(colaborador => (colaborador.time === time.nome))}
                />
            )}
        </div>
    )
}

export default App;