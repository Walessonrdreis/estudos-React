import "./App.css";
import {useContext} from "react";
import {themeContext} from "./Context";


function App(){
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return(
    <div className="App"
    style={{ 
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
    >
    <h1>Testado App</h1>

    </div>
  )
}
export default App;