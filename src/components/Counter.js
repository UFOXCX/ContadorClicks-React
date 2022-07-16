import '../stylesheet/Counter.css'

function Counter({ numberOfClicks }) {
    return (
    <div className="counter">
        {numberOfClicks}
    </div>
    );
}

export default Counter;