import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Legal bot</h1>
          <p className='lead'>Crea tu propio documento legal sin errores.</p>
          <div className='buttons'>
            <Link to='register.html' className='btn btn-primary'>
              <b>Registrarse</b>
            </Link>
            <Link to='login.html' className='btn'>
              Log-in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
