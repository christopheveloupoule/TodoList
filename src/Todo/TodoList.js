import React, { Component } from 'react';

class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            userInput: '', //le state, le user n'a encore rien renseigné
            items: []
        };
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

     addTodo(event) {
        event.preventDefault(); //Pr éviter que ça reload la page
        this.setState({
            userInput: '', //pr réinitialiser le field
            items: [...this.state.items, this.state.userInput] //es6 maniere +simple d'ecrire un arr
        }, () => console.log(this.state));
    }

    deleteTodo(item) {
        // use 2 method
        // pass the item to indexOf
        const array = this.state.items; //nvelle variable qui correspond a mn state, dc un arr (items)
        const index = array.indexOf(item);
        array.splice(index, 1); //suppr l'arr de ma TODO
        this.setState({
            items: array
        });
    }

// Pr voir une TODO, on applique une méthode

renderTodos() {
    return this.state.items.map((item) => {
        return (
            <div className="list-group-item" key={item}>
                {item} | <button onClick={this.deleteTodo.bind(this, item)}>X</button>
            </div>    
        );
    });
}

    render() {
        return (
            <div>
               <h1 align="center">Ma Todo list</h1>
               <form className="form-row align-items-center">
                    <input 
                        value={this.state.userInput} 
                        type="text" 
                        placeholder="Renseigner un item"
                        onChange={this.onChange.bind(this)}
                        className="form-control mb-2"/>
               </form>
               
               <button 
                    onClick={this.addTodo.bind(this)} 
                    className="btn btn-primary">
                    Ajouter
               </button>
                <div className="list-group">
                    {this.renderTodos()}
                </div>
            </div>
            
        );
    }
}

export default TodoList;

