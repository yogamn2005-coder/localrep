import Header from './Header'
import './App.css'
import Products from './Products'

function App() {
 

  return (
    <>
    <Header/>
    <br />
    <div style={{display:'flex', gap:'20px', flexWrap:'wrap'} }>
    <Products name="bag"  image="https://res.cloudinary.com/dhdepk5ib/image/upload/v1757696461/samples/ecommerce/leather-bag-gray.jpg" 
    price="10000"
 />
    <Products name="Watch"  image="https://res.cloudinary.com/dhdepk5ib/image/upload/v1757696459/samples/ecommerce/analog-classic.jpg" 
    price="1000" />
  
 <Products name="Speaker"  image="https://res.cloudinary.com/dhdepk5ib/image/upload/v1757698472/Gemini_Generated_Image_z6124hz6124hz612_3_atjkpb.png" 
    price="2000" />
     
     

    </div>
   
     
    </>
  )
}

export default App
