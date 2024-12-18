import Contacto from './components/Contacto';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Nosotros from './components/Nosotros';
import { CarProvider } from './Context/CarContext';
import './main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';

function App() {

  return (
    <div>
      <CarProvider>

        <BrowserRouter>

          <Navbar/>

          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/productos' element={<ItemListContainer/>}/>
            <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/carrito' element={<Carrito/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>

        </CarProvider> 
    </div>
  );
}

export default App;
