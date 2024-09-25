import React, { useState, useEffect } from 'react';

function Main() {
  const TypingEffect = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
      if (index < text.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText(displayedText + text[index]);
          setIndex(index + 1);
        }, 100); // Adjust the speed of typing here
        return () => clearTimeout(timeoutId);
      }
    }, [index, text, displayedText]);

    return <span>{displayedText}</span>;
  };

  return (
    <div className="position-relative vh-100 vw-100">
      <nav className="navbar navbar-light bg-dark shadow rounded">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img src='skylogo1.png' alt='' width='120' height='50' />
          </div>
          <div className="d-flex">
            <a className="nav-link mt-1 me-5 text-white btn btn-outline-secondary btn-sm mt-1" href="/Main">Home</a>
            <a className="nav-link mt-1 me-5 text-white" href="/Flight">Flights</a>
            <button className="btn btn-success me-5">
              <a className="nav-link text-white mt-1" href="/login">Log In</a>
            </button>
            <button className="btn btn-primary me-5">
              <a className="nav-link text-white mt-1" href="/Signup">Sign Up</a>
            </button>
          </div>
        </div>
      </nav>
      <img src='200w.webp' alt='background' className='img-fluid position-absolute top-0 start-0 w-100 h-100' style={{ objectFit: 'cover', opacity: 0.99, zIndex: -1 }} />
      <div className="position-absolute text-light" style={{ top: '30%', left: '10%' }}>
        <h1><TypingEffect text="Welcome to SkyBook!" /></h1>
        <p><TypingEffect text="Book your flights easily and quickly." /></p>
      </div>
    </div>
  );
}

export default Main;
