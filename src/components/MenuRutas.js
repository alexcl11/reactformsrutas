import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/cine">Cine</a>
            </li>
            <li>
                <a href="/musica">Música</a>
            </li>
            <li>
                <a href="/formulario">Formulario</a>
            </li>
            <li>
                <a href="/collatz">Conjetura de Collatz</a>
            </li>
            <li>
                <a href="/tablamultiplicar">Tabla de multiplicar</a>
            </li>
            <li>
                <a href="/tablamultiplicarv2">Tabla de multiplicar v2.0</a>
            </li>
            <li>
                <a href="/seleccionmultiple">Seleccion Multiple</a>
            </li>
        </ul>
      </div>
    )
  }
}
