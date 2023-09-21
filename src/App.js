import Formulario from "./components/Formulario";
import Banner from "./components/Banner";
import { useState } from "react";
import Time from "./components/Time";
import Rodape from "./components/Rodape";

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
            corCabecalho: "#ffd900",
        },
        {
            nome: "Administrativa",
            corFundo: "#E7E6E6",
            corCabecalho: "#ffd900",
        },
        {
            nome: "Instrutores",
            corFundo: "#5B9BD5",
            corCabecalho: "#ffd900",
        },
        {
            nome: "Coordenação",
            corFundo: "#E7E6E6",
            corCabecalho: "#ffd900",
        },
        {
            nome: "Alunos",
            corFundo: "#5B9BD5",
            corCabecalho: "#ffd900",
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
                    corCabecalho={time.corCabecalho}
                    colaborador={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                />
            )}
            <Rodape />
        </div>
    )
}

export default App;