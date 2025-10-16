import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {
    selectMultiple = React.createRef();
    
    mostrarSeleccionados =  (event) => {
        event.preventDefault();
        var options = this.selectMultiple.current.options;
        var optionsArray = []
        //DEBEMOS RECORRER TODAS LAS OPCIONES
        for( var option of options){
            if(option.selected){
                optionsArray.push(option.value)
            }
            
        }
        this.setState({
            seleccionados: optionsArray
        })
    }

    state = {
        seleccionados: []
    }

  render() {
    return (
      <div>
        <h1>Selección Múltiple</h1>
        <form onSubmit={this.mostrarSeleccionados}>
            <label>Selecciona varios elementos: </label>
            <select size="10" multiple ref={this.selectMultiple}>
                <option>Elemento 1</option>
                <option>Elemento 2</option>
                <option>Elemento 3</option>
                <option>Elemento 4</option>
                <option>Elemento 5</option>
                <option>Elemento 6</option>
                <option>Elemento 7</option>
            </select>
            <button>Mostrar seleccionados</button>
        </form>
        <ul>
            {
                this.state.seleccionados.map((seleccionado, index) => {
                    return(<li key={index}>{seleccionado}</li>)
                })
            }
        </ul>
      </div>
    )
  }
}
