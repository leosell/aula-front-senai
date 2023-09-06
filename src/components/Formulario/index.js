import Input from "../Input";
import ListaSuspensa from "../ListaSuspensa";
import Button from "../Button";
import "./Formulario.css";
import { useState } from "react";

const Formulario = () => {
    const [ nome, setNome ] = useState("");
    const [ cargo, setCargo ] = useState("");
    const [ imagem, setImagem ] = useState("");
    const [ time, setTime ] = useState("");

    const times = [
        "Pedagógia",
        "Administrativa",
        "Instrutores",
        "Coordenação",
        "Discentes"
    ]

    const aoEnviar = (evento) => {
        evento.preventDefault();
        console.log(evento);
    }

    return (
        <section className="formulario">
            <form onSubmit={aoEnviar}>
                <Input
                    type="text"
                    htmlForm="nome"
                    nameLabel="Nome"
                    placeholder="Digite seu nome..."
                    required={true}
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <Input
                    type="text"
                    htmlForm="cargo"
                    nameLabel="Cargo"
                    placeholder="Digite seu cargo..."
                    required={true}
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                />
                <Input
                    type="text"
                    htmlForm="imagem"
                    nameLabel="Imagem"
                    placeholder="Digite a URL da imagem..."
                    required={true}
                    value={imagem}
                    onChange={(e) => setImagem(e.target.value)}
                />
                <ListaSuspensa
                    itens={times}
                    required={true}
                    onChange={(e) => setTime(e.target.value)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Formulario;