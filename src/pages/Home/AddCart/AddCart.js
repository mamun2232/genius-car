import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddCart = () => {
      const {id} = useParams()
      const [cart , setCart] = useState({})

      const navigate = useNavigate()
      const confromOrder = (id) =>{
            navigate(`/confromOrder/${id}`)
      }
      useEffect(()=>{
            fetch(`http://localhost:5000/service/${id}`)
            .then(res => res.json())
            .then(data => setCart(data))
      },[])
      console.log(cart);


      return (
            <div className="cart-section">
                  <div className="container my-3">
                        <h3>Your Order is {cart?.name}</h3>
                        <div className="card p-5">
                              <img height={500} src={cart.img} alt="" />

                              <h3>{cart.name}</h3>
                              <h3>${cart.price}</h3>
                              <p>{cart.description}</p>
                              <div >
                              <button onClick={() => confromOrder(id)} className='btn btn-primary'>Confrom oder</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default AddCart;