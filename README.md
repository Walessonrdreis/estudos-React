# estudos-React
Começo dos estudos, visando se aperfeiçoar no framework front-end. Começando do básico  


obs:
 A maneira mais fácil de se criar componentes é através de uma função.

Agora com o ecma6 é possível pela criação de class
ex: 
class Welcome extends React.Component{
    render() {
        return <h1>Olá, }{this.props.name}
    }
}
ReactDom.render(<Welcome name="RL"/>, document.getElementById("root"));

O react permite que um componente interaja com varios componentes, é bem comum por exemplo encontrar apenas um componente <App> em um único programa 
ex:
function App() {
    return (
        <div>
            <Welcome name="RL System"/>
            <Welcome name="Walesson"/>
            <Welcome name="Ao curso de React"/>
        </div>
    );
}
React.render(<App/>, document.getElementById("root"));

E de suam importância realizar-se a extração de componentes grandes em menores, acaba deixando o código mais clean, mais limpo e fácil de entender e e reconfigurar, assim com reutilizar 

Estado e ciclo de vida:
