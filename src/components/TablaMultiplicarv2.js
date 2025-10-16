import React, { Component } from 'react'

export default class TablaMultiplicarv2 extends Component {
    numero = React.createRef();

    generarTabla = (event) => {
        event.preventDefault();
        var numero = parseInt(this.numero.current.value);
        var operacionesAux = []
        var resultadosAux = []
         for (let i = 1; i <= 10; i++) {
            var operacion = `${numero} · ${i}`
            var resultado = numero*i

            operacionesAux.push(operacion)
            resultadosAux.push(resultado)
                       
         }
         this.setState({            
            operaciones: operacionesAux,
            resultados: resultadosAux        
         })
    }

    generarNumerosSelect = () => {
        var aux = []
        for (let i = 0; i < 10; i++) {
            var numeroAleatorio = parseInt(Math.random()*100+1);
            aux.push(numeroAleatorio)
        }
        return aux
    }

    //STATE ES SOLAMENTE CUANDO YA SE HAYA CARGADO EL COMPONENTE
    state = {
            operaciones: [],
            resultados: []
    }
    //COMO QUIERO QUE LOS NUMEROS SE CARGEN DE PRIMERAS TENGO QUE SACARLOS DEL STATE
    numerosAleatorios = this.generarNumerosSelect();
  render() {
    return (
      <div>
        <h1>Tabla de Multiplicar v2.0</h1>
        <form >
            <label>Selecciona número: </label>
            <select type='number' ref={this.numero} onChange={this.generarTabla} >
                {                    
                    this.numerosAleatorios.map((numero, index) => {
                        return(<option key={index}>{numero}</option>)
                    })
                }
            </select>
        </form>
        <br></br>
        <table border='1'>
            <thead>
                <tr>
                    <th>Operación</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.operaciones.map((operacion, index) => {
                        return(<tr key={index}>
                            <td>{operacion}</td><td>{this.state.resultados[index]}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
