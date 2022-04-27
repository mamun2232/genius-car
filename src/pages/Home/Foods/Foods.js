import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Foods.css'

const Foods = () => {
      const [foods, setFood] = useState([])
    
      useEffect(() =>{
            fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data=> setFood(data))



      } , [])

      return (
            <div className="food-section">
               
                <div className="container ">
                <h4 className='my-3'>Our Service</h4>
                  <div className="food-container">
                        {
                              foods.map(food => <Food food={food} key={food._id}></Food>)
                        }
                        
                  </div>
                </div>
                 
            </div>
      );
};

export default Foods;