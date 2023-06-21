import"./Button.css"

const Button = ({event, label="Click Me"}) => {
    return (  
        <button onClick={event} className="button">{label}</button>
    );
}
 
export default Button;