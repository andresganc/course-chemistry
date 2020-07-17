
import React, { Component, Fragment } from 'react';


class Prueba extends Component {

    state = {
        numero1: 0,
        numero2: 0,
        resultado: 0
    }

    handleOnChange = (event) => {
        //this.setState({ [event.target.numero1]: event.target.value })
        this.setState({ [event.target.name]: event.target.value });
        console.log({ [event.target.name]: event.target.value })
    }

    handleOnClick = (event) => {

        this.setState({ resultado: (parseInt(this.state.numero1) + parseInt(this.state.numero2)) })
        //this.setState.resultado =  ( parseInt(this.state.numero1) + parseInt(this.state.numero2) ); 
        //window.alert( this.state.resultado );

        /*
        var num1 = this.state.numero1;
        var num2 = this.state.numero2;
        var resul = parseInt(num1) + parseInt(num2) ;
        
        window.alert( resul );

        this.state.resultado = resul;
        */

        //event.preventDefault();
    }

    render() {
        return (
            <Fragment>
                <input name="numero1" value={this.state.numero1} onChange={this.handleOnChange} type="text" />
                <input name="numero2" value={this.state.numero2} onChange={this.handleOnChange} type="text" />
                <h2> {this.state.resultado} </h2>
                <button onClick={this.handleOnClick} > Sumar </button>
            </Fragment>
        );
    }
}

export default Prueba