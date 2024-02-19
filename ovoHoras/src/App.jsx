import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <h1>Calculadora</h1>
    <div class="zeca">
        <h4>Escolha o Horário que você deseja</h4>
        <input type="number" id="horaInicial" />&nbsp; :&nbsp;
        <input type="number" id="minInicial" /><br />
        <input type="number" id="horaFinal" />&nbsp; :&nbsp;
        <input type="number" id="minFinal" /><br />
        <button id="ovo" onclick="soma()">Soma</button>&nbsp;
        <button id="ovo" onclick="sub()">Diferença</button>
        <h3 id="r">Resultado</h3>
    </div>
    </>
  )
}

export default App
