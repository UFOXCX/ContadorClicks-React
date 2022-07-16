import '../stylesheet/Button.css'

function Button({ text, clickOnButton, handleClick }) {
    return (
    <button 
        className={ clickOnButton ? 'click-button' : 'restart-button' } onClick={ handleClick }>
        {text}
    </button>
    );
}

export default Button;