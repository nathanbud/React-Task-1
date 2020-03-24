import React from 'react'

const SortNinja =({ninjas}) => {
        //const {ninjas} = props;
        const ninjaList = ninjas.map(ninja =>{
            return ninja.age > 50 ? (  
                <div key = {ninja.id}>
                <p>Name: {ninja.name} </p>
        <p>Age: {ninja.age}</p>
        <p>Belt: {ninja.belt}</p>
            </div>
            ) : null;
        })
        return(
            <div>
                {ninjaList}
            </div>
            
        )
    }
export default SortNinja