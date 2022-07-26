import "./App.css";
import {useContext} from "react";
import {themeContext} from "./Context";
import Navbar from "./components/Navbar/Navbar"


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
    <Navbar />
    <h1>Testado App</h1>

    </div>
  )
}
export default App;