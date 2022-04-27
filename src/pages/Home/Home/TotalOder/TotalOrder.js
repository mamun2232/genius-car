import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const TotalOrder = () => {
      const [user] = useAuthState(auth)
      const [orders , setOrders] = useState([])
      useEffect(()=>{
            const getOrder = async () =>{
                  const email = user.email
                  console.log(email);
                  const url = `http://localhost:5000/order?email=${email}`
                  const {data} = await axios.get(url)
                  setOrders(data)

            }

            getOrder()
      },[user])
      console.log(orders);
      return (
            <div>
                  <p>Order total {orders.length}</p>
            </div>
      );
};

export default TotalOrder;