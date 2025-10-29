import React from 'react'

function Products(props) {
    

  return (
    <>
     <div style={{border:"solid black 1px"}} >
      <img  height={100} width={100}   src={props.image} alt="" />
      <p>name:{props.name}</p>
      <p>Price{props.price}</p>
     </div>
    
    </>
  )
}

export default Products