import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  useSelector } from 'react-redux';
import {  useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
const dispatch= useDispatch();
const removeFromCart =(id)=>{
  dispatch(remove(id));

}


  const product=useSelector(state=> state.cart);
  const products = product.map((pro) => (
    <div key={pro.id} className='col-md-12' style={{padding:"20px"}}>
      <Card style={{ width: '17rem',marginLeft:"auto",marginRight:"auto"}}>
        <div className='text-center'>
        <Card.Img variant="top" src={pro.image} style={{width:"100px",height:"150px",objectFit:"contain"}} />
        <Card.Body>
          <Card.Title style={{fontWeight:"bold",fontSize:"15px"}}>{pro.title}</Card.Title>
          <Card.Text style={{fontWeight:"bold",fontSize:"18px"}}>{pro.price}$</Card.Text>
          <details>
            <summary style={{fontWeight:"bold"}}>Show Description</summary>
            <Card.Text className='description'>{pro.description}</Card.Text>
          </details>
          
        </Card.Body>
        <Card.Footer>
        <Button variant="danger" onClick={()=>removeFromCart(pro.id)}>Remove</Button>
        </Card.Footer>
        </div>
        
      </Card>
    </div>
  ));

  return (
    <>
    <h2 style={{textAlign:"center",padding:"10px"}}>Cart List</h2>
      <div className='row' style={{width:"100%"}}>
        {products}
      </div>
    </>
    
  )
}

export default Cart