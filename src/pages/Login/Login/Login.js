import axios from 'axios';
import React, { useRef } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
      const emailRef = useRef('')
      const passRef = useRef('')
      const navigate = useNavigate()
      let location = useLocation();
      const [user] = useAuthState(auth)
      let from = location.state?.from?.pathname || "/";

      const [
            signInWithEmailAndPassword,
            users,
            loading,
            error,
      ] = useSignInWithEmailAndPassword(auth);


      const formSubmit = async (event) => {
            event.preventDefault()
            const email = emailRef.current.value;
            const password = passRef.current.value
            await signInWithEmailAndPassword(email, password)

         
            // const {data} = axios.post('http://localhost:5000/login' , {email})
            // console.log(data);


            // // navigate(from, { replace: true });

      }

         //      STAP - 2
            // ACCESS token er jonno user er email patiye debo.. r backend theke token send korbe 

      if (user) {
            console.log(user.email);
            fetch('http://localhost:5000/login', {
                  method: 'POST',
                  body: JSON.stringify({
                        email: user.email
                  }),
                  headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                  },
            })
                  .then((response) => response.json())
                  .then((data) => {
                        localStorage.setItem('accessToken' , data.accessToken)
                        navigate(from, { replace: true });
                  });
            

      }
      return (
            <div className="register-from">
                  <div className="container">
                        <div className="card">
                              <h3>Please Login</h3>
                              <form onSubmit={formSubmit} className='p-5'>
                                    <input ref={emailRef} placeholder='enter your email' className='form-control' type="email" name="email" id="" />
                                    <br />
                                    <input ref={passRef} placeholder='enter your password' className='form-control' type="password" name="password" id="" />
                                    <br />
                                    <input className='form-control' type="submit" value="login" />
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default Login;