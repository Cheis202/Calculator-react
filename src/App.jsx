import { useEffect, useState } from "react";
import Boton from "./components/Boton";
import useTheme from "./hook/useTheme";
import "./index.css";
function App() {
  const { theme, setCurrentTheme } = useTheme();
  let [result, setResult] = useState("")

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setCurrentTheme(storedTheme);
    }
  }, [setCurrentTheme]);
  
  const toggleTheme = () => {
    let newTheme;
    if (theme === "light") {
      newTheme = "dark";
    } else if (theme === "dark") {
      newTheme = "custom";
    } else {
      newTheme = "light";
    }
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme); 
  };
  
  const calculo = (e)=>{
    const value = e.target.innerText
    setResult(result += value)
  }
  const del = ()=>{
    const value = []
    let cero = ""
    for(let i = 0; i<result.length;i++){
      value.push(result[i])
    }
    setResult(result = cero)
    value.pop()
    value.map(e=>{
      return setResult(result+=e)
    })
  }
  const resolver = ()=>{
    let expresion = eval(result)
    return setResult(expresion)
  }
  
  return (
    <div className={`padre ${theme}`}>
      <div className="top">
        <p className={theme}>calc</p>
        <div className="top-slide">
          <p className={theme}>THEME</p>
          <div className="container-change">
            <p className={theme}>1 2 3</p>
            <div className={`change-border ${theme}`}>
              <button onClick={toggleTheme} className={`change ${theme}`}/>
            </div>
          </div>
        </div>
      </div>

      <div className={`results ${theme}`}>
        <p className={theme}>{result}</p>
      </div>
      <div className={`container ${theme}`}>
        <div className="container-button">
          <Boton funcion={calculo} value={7} clas={`boton ${theme}`} />
          <Boton funcion={calculo} value={8} clas={`boton ${theme}`} />
          <Boton funcion={calculo} value={9} clas={`boton ${theme}`} />
          <Boton funcion={del} value={"DEL"} clas={`boton b-del ${theme}`} />
          <Boton funcion={calculo} value={4} clas={`boton ${theme}`} />
          <Boton funcion={calculo} value={5} clas={`boton ${theme}`} />
          <Boton funcion={calculo} value={6} clas={`boton ${theme}`} />
          <Boton funcion={calculo} value={" + "} clas={`boton ${theme}`} />
          <Boton funcion={calculo} value={1} clas={`boton ${theme}`} />
          <Boton funcion={calculo} value={2} clas={`boton ${theme}`} />
          <Boton funcion={calculo} value={3} clas={`boton ${theme}`} />
          <Boton funcion={calculo} value={" - "} clas={`boton ${theme}`} />
          <Boton funcion={calculo} value={"."} clas={`boton ${theme}`} />
          <Boton funcion={calculo} value={0} clas={`boton ${theme}`} />
          <Boton funcion={calculo} value={" / "} clas={`boton ${theme}`} />
          <Boton funcion={calculo} value={" * "} clas={`boton ${theme}`}/>
          <Boton funcion={()=>setResult("")} value={"RESET"} clas={`boton b-rt ${theme}`} />
          <Boton funcion={resolver} value={"="} clas={`boton b-eq ${theme}`} />
        </div>
      </div>
    </div>
  );
}

export default App;
