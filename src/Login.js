import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginValidation from './LoginValidation';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})
    const handleInput =(event) =>{
        setValues(prev => ({...prev, [event.target.name]:[event.target.value] }))
    }
    const handleSubmit =(event) =>{
        event.preventDefault();
        setErrors(LoginValidation(values));
    }

    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const typingRef = useRef({ email: false, password: false });
  
    useEffect(() => {
      const emailInput = emailInputRef.current;
      const passwordInput = passwordInputRef.current;
      const emailPlaceholder = 'example@gmail.com';
      const passwordPlaceholder = 'Minimum 8 Characters';
      let emailIndex = 0;
      let passwordIndex = 0;
  
      function typeEmail() {
        if (emailIndex < emailPlaceholder.length) {
          emailInput.placeholder += emailPlaceholder.charAt(emailIndex);
          emailIndex++;
          setTimeout(typeEmail, 100); // Adjust the speed here
        } else {
          typingRef.current.email = true;
          typePassword();
        }
      }
  
      function typePassword() {
        if (typingRef.current.email && passwordIndex < passwordPlaceholder.length) {
          passwordInput.placeholder += passwordPlaceholder.charAt(passwordIndex);
          passwordIndex++;
          setTimeout(typePassword, 100); // Adjust the speed here
        }
      }
  
      // Clear the placeholders initially only once
      if (emailInput && passwordInput && !typingRef.current.email) {
        emailInput.placeholder = '';
        passwordInput.placeholder = '';
        typingRef.current.email = true;
        typeEmail();
      }
    }, []);  

  return (
    <div className='d-flex align-items-center vh-100'>
        <img src='pexels-pixabay-62623.jpg' alt='.image' className=' img-fluid start-50 align-items-right w-100 h-100' style={{ objectFit: 'cover', opacity: 0.70 }}></img>
        <nav className="navbar navbar-expand-lg navbar-dark position-absolute bg-dark w-100 top-0">
      <div className="container-fluid">
        <img src='skylogo1.png' alt='' width='120' height='50' />
        <Link to='/' className="navbar-brand ms-auto">
          <img className="" src='Home.png' alt='Home' width='50' height='50' />
        </Link>
      </div>
    </nav>
        <div className='w-25 position-absolute top-50 start-10 translate-middle-y p-3 rounded shadow' style={{ left: '10%', border:'2px solid #D3D3D3', opacity: 0.99}}>
            <form action='' onSubmit={handleSubmit}>
                <h2 className='bg-dark position-relative text-center text-white'>Log In</h2>
                <div className='mb-3'>
                    <label htmlFor='email' className='mb-2'><strong>Email</strong></label>
                    <input id='email' ref={emailInputRef} onChange={handleInput} name='email' type='email' className='form-control rounded-0 mb-3'/>
                    {errors.email && <span className='text-light'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='mb-2'><strong>Password</strong></label>
                    <input id='password' ref={passwordInputRef} onChange={handleInput} name='password' type='password' className='form-control rounded-0 mb-3'/>
                    {errors.password && <span className='text-light'>{errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Log In</strong></button>
                <p>
                <input type="checkbox" class="mr-2" id="termsAndConditions"/>
                <label for="termsAndConditions" className='p-3'>Agree to the terms and conditions</label>
                </p>
                <p>Don't have an account?</p>
                <Link to='/signup' className='btn btn-default border p-25 bg-white text-decoration-none'>Create Account</Link>
            </form>
        </div>
    </div>
  )
  
}

export default Login;