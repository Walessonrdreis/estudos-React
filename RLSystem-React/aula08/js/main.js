function tick(){
    const element = (
        <div>
            <h1>Olá</h1>
            <h2>São: {new Date().toLocaleTimeString()}</h2>
        </div>
    );

    ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick,1000)