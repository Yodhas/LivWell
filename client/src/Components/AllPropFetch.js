import React from 'react'
import CardsNew from './CardsNew'

function AllPropFetch({details}) {
  return (
    <div>
        <div className='container-fluid row'>
            
                {
                    details.map((element, idx)=>{
                        return <div className='col-md-4 my-4'> <CardsNew key={idx} info = {element} /> </div>
                    
                    })
                }
            
        </div>
    </div>
  )
}

export default AllPropFetch