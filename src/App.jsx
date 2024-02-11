/* eslint-disable no-unused-vars */
import { useState } from "react";
import Input from "./components/input";

function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar");
  const [passwordSize, setPasswordSize] = useState(8);
  

  function generate() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    let newPassword = "";
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }
    setPassword(newPassword);
    setCopyText("Copiar");
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copiado");
  }

  return (
    <div>
      <h1>Gerador de Senhas</h1>
      <div>
        <label className="tamanho-senha" htmlFor="passwordSize">Tamanho Senha:</label>
        <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize}/>
       
      </div>
      <button onClick={generate}>Gerar senha de {passwordSize} </button>
      <button onClick={copyToClipboard}>{copyText}</button>

      <div className="password">{password}</div>
    </div>
  );
}

export default App;
