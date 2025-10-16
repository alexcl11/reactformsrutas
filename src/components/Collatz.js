import React, { Component } from 'react'

export default class Collatz extends Component {
  cajaNumero = React.createRef();

    calcularColatz = (event) => {
        event.preventDefault();
        var numero = parseInt(this.cajaNumero.current.value)
        var numsaux = []
        numsaux.push(numero)
        while (numero != 1) {
            if(numero%2==0){
                numero = numero/2
            } else {
                numero = numero * 3 + 1
            }

            numsaux.push(numero)
        }
        
        this.setState({
            numeros : numsaux
        })

    }

    state = {
        numeros: []
    }

  render() {
    return (
      <div>
        <h1>Conjetura de Collatz</h1>
        <form onSubmit={this.calcularColatz}>
            <label>Introduzca número: </label>
            <input type='number'ref={this.cajaNumero} defaultValue="1"/>
            <button>Calcular Collatz</button>
        </form>
        <ul>
            {
                this.state.numeros.map((numero, index) => {
                    return(<li key={index}>{numero}</li>)
                })
            }
        </ul>
      </div>
    )
  }
}
