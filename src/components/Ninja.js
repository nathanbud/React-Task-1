import React from 'react'

const Ninja =({ninjas}) => {
        //const {ninjas} = props;
        const ninjaList = ninjas.map(ninja =>{
            return (
                <div key = {ninja.id}>
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
export default Ninja