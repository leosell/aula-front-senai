import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
    const css = {
        backgroundColor: props.corFundo,
        borderRadius: "10px",
    }

    // console.log("props no time: ", props.corCabecalho);

    return (
        props.colaborador.length > 0 ? (
            <section className="time" style={css}>
                <h3>{props.name}</h3>
                {props.colaborador.map(item => (
                    <Colaborador
                        key={item.nome}
                        src={item.imagem}
                        alt={"Nome do " + item.nome}
                        nomeColaborador={item.nome}
                        cargo={item.cargo}
                        corCabecalho={item.corCabecalho}
                    />

                ))}
            </section>
        ) : (
            <></>
        )
    )
}

export default Time;