import React, { Component } from 'react'

export default class FormSimple extends Component {
    cajaNombre = React.createRef();
    peticionFormulario = (event) => {
        //DETENEMOS EL SUBMIT DEL FORMULARIO
        event.preventDefault()
        console.log("Peticion lista")
        //PARA RECUPERAR EL VALOR DE UN OBJETO React:
        let nombre = this.cajaNombre.current.value;
        console.log("Nombre: "+ nombre)
      
        this.setState({
          nombre: nombre
        })
        
    }

    state = {
          nombre: ""
        }


  render() {
    return (
      <div>
            <h1>Formulario simple React</h1>
            <h2>{this.state.nombre}</h2>
                <form onSubmit={this.peticionFormulario}>
                    <label>Nombre: </label>
                    <input type='text' ref={this.cajaNombre}/>
                    <button>Realizar petición</button>
                </form>
      </div>
    )
  }
}
