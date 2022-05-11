
class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()}


    }
    //componente criado
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

    }
    //componente removido
    componentWillUnmount() {
        clearInterval(this.timerID);

    }
    //somo obrigados a usar o setState
    tick() {
        //se não colocar o setState ele não atualiza o render()
        this.setState({
            date: new Date()
        });
    }

    render(){
        return (
            <div>
            <h1>Olá</h1>
            <h2>São: {this.state.date.toLocaleTimeString()}</h2>
        </div>
           
        );

    }
}
function tick(){
    ReactDOM.render(<Clock/>, document.getElementById('root'));

}


setInterval(tick,1000)