import "./Input.css";

const Input = (props) => {
    return (
        <div className="campo-texto">
            <label
                htmlFor={props.htmlForm}
            >
                {props.nameLabel}
            </label>
            <input
                type={props.type}
                placeholder={props.placeholder}
                required={props.required}
                onChange={props.onChange}
                value={props.valor}
            />
        </div>
    )
}

export default Input;