import "./Colaborador.css";

const Colaborador = (props) => {

    const cssColaborador = {
        backgroundColor: props.corCabecalho,
    }

    console.log("props no colaborador: ", props);

    return (
        <div className="colaborador">
            <div className="cabecalho" style={cssColaborador}>
                <img src={props.src} alt={props.alt} />
            </div>
            <div className="rodape">
                <h4>{props.nomeColaborador}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;