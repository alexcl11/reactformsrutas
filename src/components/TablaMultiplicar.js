import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    numero = React.createRef();

    generarTabla = (event) => {
        event.preventDefault();
        var numero = parseInt(this.numero.current.value);
        var operacionesAux = []
        var resultadosAux = []
         for (let i = 1; i <= 10; i++) {
            var operacion = `${numero} · ${i}`
            var resultado = numero*i

            //SE PODRÍA CREAR EL DIBUJO HTML EN ESTE MOMENTO Y PASARLO A LA TABLA
            // .push(<tr>.....<tr>)

            operacionesAux.push(operacion)
            resultadosAux.push(resultado)
                       
         }
         this.setState({            
            operaciones: operacionesAux,
            resultados: resultadosAux        
         })
    }

    state = {
            operaciones: [],
            resultados: []
    }

  render() {
    return (
      <div>
        <h1>Tabla de Multiplicar</h1>
        <form onSubmit={this.generarTabla}>
            <label>Introduza número: </label>
            <input type='number' ref={this.numero} defaultValue="1"/>
            <button>Crear tabla</button>
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
