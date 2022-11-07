import { useState } from "react"


function App() {
  const [text, setText] = useState("")
  return (
    <div className="App">
        <form>
          <textarea onChange={(e) => setText(e.target.value)} value={text} placeholder="digite ai" rows={15}>
          </textarea>         
        </form>
        
        <div className="mirror">
            <h1>Código</h1>
            O texto em caixa alta
            <p>{text}</p>
        </div >
    </div> 


  );
}

export default App;
