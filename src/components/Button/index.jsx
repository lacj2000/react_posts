import "./styles.css"

const Button = ({ text, onClick, disabled }) => (
    <button
        className="button"
        onClick={onClick}
        disabled={disabled}
    >
        {text}
    </button>
)


export default Button;