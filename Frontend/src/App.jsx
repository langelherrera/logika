import { useState,useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap';
import axios from "axios";

import './App.css'
import Product from './components/Product';

function App() {

const uri='http://localhost:8000';
const [products,setProducts]=useState([]);
const [role,setRole]=useState('');
const [showModal, setShowModal] = useState(false);
const [productData, setProductData] = useState({
  name: '',
  price: '',
  category: ''
});
const [error, setError] = useState('');
const [reload,setReload]=useState('false');

useEffect(()=>{
  if(role!=""){
   getAllProducts();
  }
 
 },[role])

 useEffect(()=>{
    if(reload){
      getAllProducts();
      setReload(false)
    }
 },[reload])

const changeRole = (e) => {
  setRole(e.target.value);
};

async function getAllProducts() {
  const response =await axios.get(`${uri}/product`);
  if(response.status==200){
    setProducts(response.data);
  }
}

const handleChange = (e) => {
  const { name, value } = e.target;
  setProductData({
    ...productData,
    [name]: value
  });
  setError('');
};


const crearProducto = async (e) => {
  e.preventDefault();
  if (!productData.name || !productData.price || !productData.category) {
    setError('Por favor, complete todos los campos');
    return;
  }
  setShowModal(false)

  const respose = await axios.post(`${uri}/product/${role}`,productData)
  if(respose.status==201){

    setProductData({ name: '', price: '', category: '' });
    setReload(true)
  }
}

  return (
    <>

    <form id="role-form" className='form'>

    <select className="form-select" aria-label="Default select example" value={role} onChange={changeRole}>
      <option value="">Seleccione un rol</option>
      <option value="Admin">Admin</option>
      <option value="Viewer">Viewer</option>
    </select>
    <br></br>
    <p>Rol seleccionado: {role}</p>

    </form>
    {role === "Admin" && (
        <button className="btn btn-primary mb-3"
        onClick={()=>setShowModal(true)}>
          
          Crear Producto
        </button>
      )}
    {role !== "" && (
    <main className="container-xl mt-5">
      <h2 className="text-center">Nuestros productos</h2>

      <div className="row mt-5">
        {products.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </main>
  )}


<Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
            <>
              
            <form id="created-product-form" >
            
            
              <div className="form-group">
                <label htmlFor="name">Nombre del producto:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={productData.name}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="price">Precio:</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
                  required
                  className="form-control"
                  step="0.01"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="category">Categoría:</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={productData.category}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
              
              {error && <p className="text-danger">{error}</p>}
            
            </form>
            
            </>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" form="created-product-form" type="submit" onClick={crearProducto} >
            Crear
          </Button>
          
         
        </Modal.Footer>
      </Modal>  

     
    </>
  )
}

export default App
