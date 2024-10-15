
import React, { useState } from 'react'
import './Senhas.css';

function Senhas() {
    const [countNormal, setCountNormal] = useState(1);
    const [countPreferencial, setCountPreferencial] = useState(1);
    const [senhaAtual, setSenhaAtual] = useState("");
    const [fila, setFila] = useState([]);
    

    const gerarSenha = (categoriaSenha) => {
        let novaSenha = "";

        if (categoriaSenha === "N") {
            novaSenha = "N" + countNormal;
            setCountNormal(countNormal + 1);
        } else {
            console.log()
            novaSenha = "P" + countPreferencial;
            setCountPreferencial(countPreferencial + 1);
        }

        setFila([...fila, {categoria: categoriaSenha, senha: novaSenha }]);

    };

    const chamarSenha = ()=> {
        
        const indiceP = fila.findIndex(f=> f.categoria == "P")
        let proximaSenha = ""
        
        if (indiceP != -1) {
            proximaSenha = fila[indiceP].senha

            const filaAtual = [...fila]
            filaAtual.splice(indiceP, 1)
            setFila(filaAtual)
        } else if (fila.length > 0) {
            proximaSenha = fila[0].senha

            setFila(fila.slice(1))
        } else{
            proximaSenha = "--"
           
        }

        setSenhaAtual(proximaSenha)
    

    }

  return (
   <div>
 
       <div className='container'>
          <div className='btnGerarSenha'>
                <div className="btnSenha">
                    <button onClick={() => gerarSenha("P")}>Senha Preferencial</button>
               </div>

            </div>
                <div className="filaContainer">
                    <h1>Fila</h1>
                    <div className="filaSenhas">
                        <ul>
                            {fila.map((item, index) => (
                                <li key={index}>
                                    {item.senha} 
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            <div className='btnGerarSenha'>
                <div className="btnSenha">
                    <button onClick={() => gerarSenha("N")}>Senha Normal</button>
                </div>

            </div>
        </div>
                <div className='chamarSenha'>
                    <button onClick={() => chamarSenha()}>Chamar Senha</button>
                    {senhaAtual}
                </div>
        </div>
   
  )
}


export default Senhas
