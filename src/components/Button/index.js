import "./Button.css";

const Button = (props) => {
    return (
        <button
            className="botao"
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button;