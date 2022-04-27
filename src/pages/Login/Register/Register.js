import React, { useRef } from 'react';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
      const emailRef = useRef('')
      const passRef = useRef('')
      const navigate = useNavigate()
      const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useCreateUserWithEmailAndPassword(auth);
      const formSubmit = (event) =>{
            event.preventDefault()
            const email = emailRef.current.value;
            const password = passRef.current.value
            createUserWithEmailAndPassword(email, password)
            

      }
      if(user){
            navigate('/')

      }
      return (
            <div className="register-from">
                 <div className="container">
                       <div className="card">
                       <h3>Please register</h3>
                       <form onSubmit={formSubmit} className='p-5'>
                             <input ref={emailRef} placeholder='enter your email' className='form-control' type="email" name="email" id="" />
                             <br />
                             <input ref={passRef} placeholder='enter your password' className='form-control' type="password" name="password" id="" />
                             <br />
                             <input className='form-control' type="submit" value="Register" />
                       </form>
                       </div>
                 </div>
            </div>
      );
};

export default Register;