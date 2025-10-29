import React from 'react'

function Header() {
  return (
  <>
  <div  style={{display:'flex',
    justifyContent:'space-evenly',border:'solid black 1px'}}  >
    <img height={75} width={75}    src="https://res.cloudinary.com/dhdepk5ib/image/upload/v1757696461/samples/ecommerce/leather-bag-gray.jpg
" alt="" />
 <nav style={{display:'flex',gap:"30px" ,alignItems:'center'}}  >
 <a href="">Home</a>
 <a href="">About US</a>
 <a href="">Products</a>
 <a href="">signin</a>
 <a href="">Register</a>

 </nav>

  </div>
  </>
  )
}

export default Header