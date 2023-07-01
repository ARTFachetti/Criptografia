import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [shift, setShift] = useState(3);
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleShiftChange = (event) => {
    setShift(parseInt(event.target.value, 10));
  };

  const encryptText = () => {
    let encryptedText = '';
    for (let i = 0; i < inputText.length; i++) {
      let charCode = inputText.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        encryptedText += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        encryptedText += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
      } else {
        encryptedText += inputText.charAt(i);
      }
    }
    setOutputText(encryptedText);
  };

  const decryptText = () => {
    let decryptedText = '';
    for (let i = 0; i < inputText.length; i++) {
      let charCode = inputText.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        decryptedText += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        decryptedText += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
      } else {
        decryptedText += inputText.charAt(i);
      }
    }
    setOutputText(decryptedText);
  };

  const handleEncrypt = () => {
    encryptText();
  };

  const handleDecrypt = () => {
    decryptText();
  };

  const handleClear = () => {
    setInputText('');
    setOutputText('');
  };

  return (
    <div className="App">
      <h1>CRIPTOGRAFIA</h1>
      <div>
        <label htmlFor="inputText">Texto: </label>
        <input type="text" id="inputText" value={inputText} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="shift">Deslocamento: </label>
        <input type="number" id="shift" value={shift} onChange={handleShiftChange} />
      </div>
      <div>
        <button onClick={handleEncrypt}>Criptografar</button>
        <button onClick={handleDecrypt}>Descriptografar</button>
        <button onClick={handleClear}>Limpar</button>
      </div>
      <div>
        <h2>Resultado: </h2>
        <p>{outputText}</p>
      </div>
    </div>
  );
}

export default App;