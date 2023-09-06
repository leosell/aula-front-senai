import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>Time</label>
            <select required={props.required}>
                <option>Selecione</option>
                {props.itens.map(index => (
                    <option key={index}>{index}</option>
                ))}
            </select>
        </div>
    )
}

export default ListaSuspensa;