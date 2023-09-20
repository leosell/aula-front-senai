import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select required={props.required} onChange={props.onChange} value={props.value} >
                <option>Selecione</option>
                {props.itens.map(index => (
                    <option key={index}>{index}</option>
                ))}
            </select>
        </div>
    )
}

export default ListaSuspensa;