import React, { Component } from 'react'

export default class Ninja extends Component{
    render(){

        const {ninjas} = this.props;
        const ninjaList = ninjas.map(ninja =>{
            return (
                <div>
                <p>Name: {ninja.name} </p>
        <p>Age: {ninja.age}</p>
        <p>Belt: {ninja.belt}</p>
            </div>
            )
        })

        return(
            <div>
                {ninjaList}
            </div>
            
        )
    }
}