import Header from './Header'
import './App.css'
import Products from './Products'
import { useState ,useEffect} from 'react'



function App() {

const [products,setproducts]=useState([])

//useeffect syntax
useEffect(()=>{
 fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setproducts(data));
},[])





 
 

  //handle count


  return (
    <>
    <Header/>
    <br />
{

products.map(function(p){
  return <div key={p.id}>
    <img height={100} width={100} src={p.image} alt="" />
    <p>{p.title}</p>
    <p>{p.price}</p>
  </div>
})

}





    <div style={{display:'flex', gap:'20px', flexWrap:'wrap'} }>
    
    </div>

   
     
    </>
  )
}

export default App
