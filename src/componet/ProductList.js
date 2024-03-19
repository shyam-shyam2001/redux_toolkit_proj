import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProduct } from '../store/productSlice';
import { useSelector } from 'react-redux';
import Alert from 'react-bootstrap/Alert';

export const ProductList = () => {
 
  const dispatch= useDispatch();
const {data:product,status}=useSelector(state=>state.products);
  useEffect(() => {
    // Call the API
    //dispatch the api here
    dispatch(getProduct());
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((result) => setProduct(result));
  }, []);

  if(status==="Loading"){
    return <p style={{textAlign:"center"}}>Loading.....</p>
  }
  if(status==="Error"){
    return <Alert key="danger" variant="danger" style={{textAlign:"center"}}>Something Went Wrong! please try again later</Alert>
  }
  const addToCart = (pro) => {
    console.log(pro);
    dispatch(add(pro));
  };
  

  const products = product.map((pro) => (
    <div key={pro.id} className='col-md-3' style={{padding:"20px"}}>
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
        <Button variant="primary" onClick={()=>addToCart(pro)}>Add TO Cart</Button>
        </Card.Footer>
        </div>
        
      </Card>
    </div>
  ));

  return (
    <>
    
      <h2 style={{textAlign:"center",padding:"10px"}}>Product Lists</h2>
      <div className='row' style={{width:"100%"}}>
        {products}
      </div>
    </>
  );
};
