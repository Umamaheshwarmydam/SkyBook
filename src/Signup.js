import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import SignupValidation from './SignupValidation'


function Signup() {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
})

const [errors, setErrors] = useState({})
const handleInput =(event) =>{
    setValues(prev => ({...prev, [event.target.name]:[event.target.value] }))
}
const handleSubmit =(event) =>{
    event.preventDefault();
    setErrors(SignupValidation(values));
}

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const typingRef = useRef({ name: false, email: false, password: false });

  useEffect(() => {
    const nameInput = nameInputRef.current;
    const emailInput = emailInputRef.current;
    const passwordInput = passwordInputRef.current;
    const namePlaceholder = 'Enter Name';
    const emailPlaceholder = 'example@gmail.com';
    const passwordPlaceholder = 'Minimum 8 Characters';
    let nameIndex = 0;
    let emailIndex = 0;
    let passwordIndex = 0;

    function typename() {
      if (nameIndex < namePlaceholder.length) {
        nameInput.placeholder += namePlaceholder.charAt(nameIndex);
        nameIndex++;
        setTimeout(typename, 100); // Adjust the speed here
      } else {
        typingRef.current.name = true;
        typeEmail();
      }
    }

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
    if (nameInput && emailInput && passwordInput && !typingRef.current.name) {
      nameInput.placeholder = '';
      emailInput.placeholder = '';
      passwordInput.placeholder = '';
      typingRef.current.name = true;
      typename();
    }
  }, []);
  return (
          <div className='d-flex align-items-center vh-100'>
        <img src='pexels-pixabay-62623.jpg' alt='.image' className='start-50 align-items-right w-100 h-100' style={{ objectFit: 'cover', opacity: 0.70 }}></img>
        <div className='position-absolute top-50 start-10 translate-middle-y w-25 p-3 rounded shadow' style={{ left: '10%', border:'2px solid #D3D3D3', opacity: 0.99}}>
            <form action='' onSubmit={handleSubmit}>
                <h2 className='bg-dark position-relative text-center text-white'>Register</h2>
                <div className='mb-3'>
                    <label htmlFor='name' className='mb-2'><strong>Name</strong></label>
                    <input id='name' ref={nameInputRef} name='name' onChange={handleInput} type='text' className='form-control rounded-0 mb-3'/>
                    {errors.name && <span className='text-light'>{errors.name}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className='mb-2'><strong>Email</strong></label>
                    <input id='email' ref={emailInputRef} name='email' onChange={handleInput} type='email' className='form-control rounded-0 mb-3'/>
                    {errors.email && <span className='text-light'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='mb-2'><strong>Password</strong></label>
                    <input id='password' ref={passwordInputRef} name='password' onChange={handleInput} type='password' pattern='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$' className='form-control rounded-0 mb-3'/>
                    {errors.password && <span className='text-light'>{errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Sign Up</strong></button>
                <p>
                <input type="checkbox" class="mr-2 required" id="termsAndConditions"/>
                <label for="termsAndConditions" className='p-3'>Agree to the terms and conditions</label>
                </p>
                <p>Already have an account?</p>
                <Link to='/login' className='btn btn-default border p-25 bg-white text-decoration-none'>Log In</Link>
            </form>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark position-absolute bg-dark w-100 top-0">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">
          <img src='Home.png' alt='Home' width='50' height='50' />
        </Link>
      </div>
    </nav>
    </div>
  )
}

export default Signup