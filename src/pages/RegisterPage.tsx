import React from 'react'
import './register.css'
import { Card } from '@mui/material';

const RegisterPage = () => {
  return (
    <div className='container'>
      <img src='src/assets/logo.svg' className='logo'></img>
      <div className='char'>
        <h1>Sign up: Are you an educator or a student?</h1>
      </div>
      <div className='container'>
        <div className='flex justify-center gap-6'>
          <a href="/register/teacher">
            <Card
              sx={{
                boxShadow: 3,
                padding: 1,
                paddingTop: 2,
                paddingBottom: 5,
                ':hover': {
                  boxShadow: 6,
                },
              }}
            >
              <img src="src/assets/woodcut.png" alt="" className='typeimg'/>
              <h2 className='chooseTitle'>Educator</h2>
              <p>Create your perfect course</p>
            </Card>
          </a>
          <a href="/register/student">
            <Card className='cardHover'
              sx={{
                boxShadow: 3,
                padding: 1,
                paddingTop: 2,
                paddingBottom: 5,
                ':hover': {
                  boxShadow: 6,
                },
              }}
            >
              <img src="src/assets/hand.png" alt="" className='typeimg'/>
              <h2 className='chooseTitle'>Student</h2>
              <p>Find your course</p>
            </Card>
          </a>
        </div>
      </div>

    </div>
  );
}

export default RegisterPage