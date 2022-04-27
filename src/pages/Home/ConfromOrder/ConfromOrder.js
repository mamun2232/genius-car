import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ConfromOrder = () => {
      const { id } = useParams()
      const [user] = useAuthState(auth)
      const [order, setOrder] = useState({})
      const navigate = useNavigate()
    
      useEffect(() => {
            fetch(`http://localhost:5000/service/${id}`)
                  .then(res => res.json())
                  .then(data => setOrder(data))

      }, [])
      console.log(order);
      const confromOrder = (event) => {
            event.preventDefault()
            const email = event.target.email.value
            const service = event.target.service.value
            const address = event.target.address.value
            const number = event.target.number.value
            console.log(email, service, address, number);

            fetch('http://localhost:5000/order', {
                  method: 'POST',
                  body: JSON.stringify({
                        email , service , address , number
                  }),
                  headers: {
                        // stap-3 
                        // token jehutu localStorage e save kora ase seti niye server e patiye debo 
                        'authorization': `${email} ${localStorage.getItem('accessToken')}`,
                        'Content-type': 'application/json; charset=UTF-8',
                  },
            })
                  .then((response) => response.json())
                  .then((json) => {
                        toast(json.success)
                       
                  });
      }
      const OrderTotal = () =>{
            navigate('/totalOrder')

      }
      return (
            <div>
                  <p>confrom order {id}</p>
                  <h3>order Name: {order?.name}</h3>
                  <div className="confrom-ordre-section">
                        <div className="container">

                              <form onSubmit={confromOrder}>
                                    <div className="card p-5">
                                          {/* <input className='form-control' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
                                          <br /> */}

                                          <input className='form-control' type="email" placeholder='email' name="email" value={user?.email} id="" />
                                          <br />
                                          <input className='form-control' type="text" placeholder='service' name="service" value={order?.name} id="" />
                                          <br />
                                          <br />
                                          <input className='form-control' type="text" name="address" placeholder='address' autoComplete='off' required />
                                          <br />
                                          <input className='form-control' type="number" name="number" placeholder='phone' required />
                                          <br />
                                          <div>
                                          <input className='btn btn-primary' type="submit" value="Place Order" />
                                          </div>
                                          <div className='my-3'>
                                          <button onClick={OrderTotal} className='btn btn-primary'>oderList</button>

                                          </div>
                                    </div>
                              </form>
                              <ToastContainer></ToastContainer>
                        </div>
                  </div>
            </div>
      );
};

export default ConfromOrder;