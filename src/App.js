
import Product from "./customer/components/Product/Product.jsx";
import {Routes,Route} from 'react-router-dom' 
import CustomerRouters from './Routers/CustomerRouters'

export default function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
        
      </Routes>
    
    </div>
     
    
  )
} 