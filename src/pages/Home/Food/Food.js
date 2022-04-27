import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Food.css'

const Food = ({food}) => {
      const { _id , name , price,  img , description} = food
      const navigate = useNavigate()
      const addToCart = (id) =>{
           navigate(`/addCart/${_id}`)
      }
      
     
      return (
           <div className="cart-container">
                 <div className="card h-100">
                       <div className="food-img">
                             <img src={img} alt="" />
                       </div>
                       <div className="food-info h-100">
                             <h5 className='card-title'>{name}</h5>
                             <h3>${price}</h3>
                             <p>{description}</p>
                       </div>
                       <button onClick={() =>addToCart(_id)} className='btn btn-primary'>Add to cart</button>
                 </div>
           </div>
      );
};

export default Food;