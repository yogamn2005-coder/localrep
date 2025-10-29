import React from 'react'

function Products({name,price,image}) {
    

  return (
    <>
     <div style={{border:"solid black 1px"}} >
      <img  height={100} width={100}   src={image} alt="" />
      <p>name:{name}</p>
      <p>Price{price}</p>
     </div>
    
    </>
  )
}

export default Products